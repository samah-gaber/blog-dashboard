(function(){
	$(document).ready( () => {

		// general ajax request function

		function ajaxRequest (Method, URL){
			return $.ajax({
				method: Method,
				url: URL
			});
		}

		// ajax get data request

		ajaxRequest("GET", "https://jsonplaceholder.typicode.com/posts")
		.then( (res) => {
			displayDashBoardData(res);
		})

		// displaying data in table

		function displayDashBoardData (arr) {
			$.map(arr, (elt, i) => {

				var tableRow = $( document.createElement("tr") );
				tableRow.addClass("table-row");

				var tableDataTitle = $( document.createElement("td") );
				tableDataTitle.addClass("title");

				var tableDataContent = $( document.createElement("td") );
				tableDataContent.addClass("content");

				var tableDataAction = $( document.createElement("td") );
				tableDataAction.addClass("action");

				var title = `<h6 class="txt-blue bold">${elt.title}</h6>`;
				var content = `<p class="txt-grey regular">${elt.body}</p>`;

				var btnEdit = $(document.createElement("button"));
				btnEdit.text("Edit");
				btnEdit.attr({
					"data-id" : elt.id,
					"value" : "edit",
					"class" : "btn-fill"
				});

				var btnDelete = $(document.createElement("button"));
				btnDelete.text("Delete");
				btnDelete.attr({
					"data-id" : elt.id,
					"value" : "delete",
					"class" : "btn-ghost"
				});

				tableDataTitle.append(title);
				tableDataContent.append(content);
				tableDataAction.append(btnEdit, btnDelete);

				$("#table").append($(tableRow).append( tableDataTitle, tableDataContent, tableDataAction ));

			})
		}

		// on click delete button

		$(document).on("click","button[value='delete']", deletePost);

		function deletePost (event){
			var postId = $(event.target).attr("data-id");
			var deleteResponse = confirm("Are you sure you want to delete this post ?");
			if(deleteResponse){
				ajaxRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`)
					.then( (res) => {
						$(event.target).parent().parent().remove();
					})
			}
		}

		// on click edit button

		$(document).on("click","button[value='edit']", editPost);

		function editPost (event) {
			var postId = $(event.target).attr("data-id");
			sessionStorage.setItem("postId", postId);
			// postEditForm(postId);
			window.location.assign("editPosts.html");
		}

	});
})();