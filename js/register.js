	/*
		用户名验证
	*/
	function userBtn(){
		var user=document.getElementById("user").value;
		var userReg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		//alert(userReg.test(user));
		var userText=document.getElementById("userText");
		if(userReg.test(user)){
			userText.innerHTML="输入正确!";
			return true;
		}else{
			userText.innerHTML="输入不正确!";
		}
		return false;
	}
	/*
		密码验证
	*/
	function pwdBtn(){
		var pwd=document.getElementById("pwd").value;
		var pwdReg=/^[a-zA-Z0-9]{4,10}$/;
		//alert(pwdReg.test(pwd));
		var pwdText=document.getElementById("pwdText");
		if(pwdReg.test(pwd)){
			pwdText.innerHTML="输入正确!";
			var repwd=document.getElementById("repwd").value;
			var repwdText=document.getElementById("repwdText");
			if(pwd==repwd){
				repwdText.innerHTML="输入正确!";
				return true;
			}else{
				repwdText.innerHTML="第二次输入的密码与第一次不相同";
			}
		}else{
			pwdText.innerHTML="输入不正确!";
		}
		return false;
	}
	/*
		电子邮件验证
	*/
	function emailBtn(){
		var email=document.getElementById("email").value;
		var emailReg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
		//alert(emailReg.test(email));
		var emailText=document.getElementById("emailText");
		if(emailReg.test(email)){
			emailText.innerHTML="输入正确!";
			return true;
		}else{
			emailText.innerHTML="输入不正确!";
		}
		return false;
	}
	/*
		手机号码验证
	*/
	function mobileBtn(){
		var mobile=document.getElementById("mobile").value;
		var mobileReg=/^1[3|5]\d{9}$/;
		//alert(mobileReg.test(mobile));
		var mobileText=document.getElementById("mobileText");
		if(mobileReg.test(mobile)){
			mobileText.innerHTML="输入正确!";
			return true;
		}else{
			mobileText.innerHTML="输入不正确!以13或15开头";
		}
		return false;
	}
	/*
		出生日期验证
	*/
	function birthBtn(){
		var birth=document.getElementById("birth").value;
		var birthReg=/((19\d{2})|(200\d))-(0\d|1[0-2])-([0-2]\d|3[0-1])/;
		//alert(birthReg.test(birth));
		var birthText=document.getElementById("birthText");
		if(birthReg.test(birth)){
			birthText.innerHTML="输入正确!";
			return true;
		}else{
			birthText.innerHTML="输入不正确!";
		}
		return false;
	}
	/*
		提交验证
	*/
	function postBool(){
		if(userBtn()&&pwdBtn()&&emailBtn()&&mobileBtn()&&birthBtn()){
			alert("提交成功!");
		}
	}
