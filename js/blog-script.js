(function(){
	$(document).ready( () => {

		// general ajax request function

		function blogGetData (Method, URL){
			return $.ajax({
				method: Method,
				url: URL
			});
		}

		// ajax get data request

		blogGetData("GET", "https://jsonplaceholder.typicode.com/posts")
		.then( (res) => {
			displayBlogData(res);
		})

		// display posts data in blog

		function displayBlogData (arr){
			$.map(arr, (elt,i) => {
				var card = $( document.createElement("div") );
				card.addClass("card");

				var imgDiv = $(document.createElement("div"));
				imgDiv.addClass("img");

				var image = $(document.createElement("img"));
				image.attr("src","https://picsum.photos/g/150");

				imgDiv.append(image);

				var info = $(document.createElement("div"));
				info.addClass("info");

				var title = `<h6 class="txt-blue bold">${elt.title}</h6>`;
				var body = `<p class="txt-grey regular">${elt.body}</p>`;

				var readMoreLink = `<a href="#" class="txt-blue regular">Read more</a>`;

				info.append(title, body, readMoreLink);

				$("#cards").append($(card).append(imgDiv, info));
			})
		}


	});
})();