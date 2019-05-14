(function(){
	$(document).ready( () => {

		// email validation

		function emailValidation(email){
			var emailRgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return emailRgx.test(email);
		}

		// password validation

		function passwordValidation(password){
			var passwordRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/
			return passwordRgx.test(password);
		}

		// on click sign in button

		$("form button").on("click", validate);

		function validate (event){
			event.preventDefault();
			var emailValue = $("#email").val();
			var passwordValue = $("#password").val();

			if(emailValidation(emailValue) && passwordValidation(passwordValue)){
				window.location.assign("dashBoard.html");
			}else{
				$(".error").hide();
				if(passwordValue == ""){
					$("#emptyPassword").show();
				}else if(!passwordValidation(passwordValue)){
					$("#wrongPassword").show();
				}
				if(emailValue == ""){
					$("#emptyEmail").show();
				}else if(!emailValidation(emailValue)){
					$("#wrongEmail").show();
				}
			}
		}
	});
})();