(function(){
	$(document).ready( () => {

		// general ajax request function

		function ajaxRequest (Method, URL){
			return $.ajax({
				method: Method,
				url: URL
			});
		}

		var postId = sessionStorage.getItem("postId");

		// ajax get data request

		ajaxRequest("GET", `https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then( (res) => {
			displayEditPost(res);
		})

		// display post data in form

		function displayEditPost(post){
			$("form#edit-form input#title").val(post.title);
			$("form#edit-form textarea#content").val(post.body);
		}

		// on click cancel button

		$("#cancelBtn").click( () => {
			var cancelConfirm = confirm("If you cancel now any changes will not be saved. Are you sure you want to cancel ?");
			if (cancelConfirm) {
				window.location.assign("dashBoard.html");
			}
		})

		// on click save button

		$("#saveBtn").click(validateForm);

		function validateForm(ev){
			ev.preventDefault();

			var titleVal = $.trim($("input#title").val());
			var contentVal = $.trim($("textarea#content").val());

			if(titleVal=="" || contentVal==""){
				alert("please fill out all of the fields");
			}else{
				ajaxRequest("PUT", `https://jsonplaceholder.typicode.com/posts/${postId}`)
					.then( (res) => {
				window.location.assign("dashBoard.html");
		})
			}
		}
	});
})();