$(function(){
	$('#login_form').validate({
		ignore:'',
		errorClass:'error',
		rules:{
			loginAccount:{
				required:true,
				email:true
			},
			password:{
				required: true,
			}
		},
		messages:{
			loginAccount:{
				required:'用户名不能为空',
				email:'邮箱格式不正确'
			},
			password:{
				required: '密码不能为空'
			}
		}
	});
});


