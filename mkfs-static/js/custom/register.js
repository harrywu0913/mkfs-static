$(function(){
	$(".js-change-checkcode").on("click",function(){
		$('#checkcode-img').attr("src","/checkcode.jpg?t=" + new Date().getTime());
	});
	
	
	$('#register_form').validate({
		ignore:'',
		errorClass:'error',
		rules:{
			loginAccount:{
				required:true,
				email:true,
				remote:{
					cache:false,
					url:'/account/validate_login_account_is_registed.json',
					type:'get',
					dataType:'json',
					data:{
						userName:function(){
							return $('#loginAccount').val();
						}
					}
				}
			},
			password:{
				required: true,
			},
			confirmPassword:{
				required:true,
				equalTo:'#password'
			},
			checkcode:{
				required: true,
				remote:{
					cache:false,
					url:'/account/validate_checkcode.json',
					type:'get',
					dataType:'json',
					data:{
						checkcode:function(){
							return $('#checkcode').val();
						}
					}
				}
			}
		},
		messages:{
			loginAccount:{
				required:'用户名不能为空',
				email:'邮箱格式不正确',
				remote:'用户名已存在'
			},
			password:{
				required: '密码不能为空'
			},
			confirmPassword:{
				required: '确认密码不能为空',
				equalTo:'两次密码不一致'
			},
			checkcode:{
				required: '验证码不能为空',
				validateCheckcode:'验证码不正确',
				remote:'验证码不正确'
			}
		}
	});
});