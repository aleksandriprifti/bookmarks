//listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e){
	//get form value
	let siteName = document.getElementById("siteName").value;
	let urlName = document.getElementById("urlName").value;

	
	let bookmark = {
		name: siteName,
		url: urlName
	};

	//test that the array is null in local storage
	if(localStorage.getItem('bookmarks') === null){
		//init array bookmarks
		let bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	fetchBookmakers();

	//prevent from submiting
	e.preventDefault();
}//end function saveBookmark(e)

	function deleteBookmark(url){
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		for(let i = 0;i < bookmarks.length;i++){
			if(bookmarks[i].url == url){
				bookmarks.splice(i, 1);
			}
		}

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		
		fetchBookmakers();
	}//end function deleteBookmark

	function fetchBookmakers(){
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
		//Get output
		let bookmarkResults = document.getElementById('bookmarkResults');

		
		bookmarkResults.innerHTML = '';

		for(let i = 0;i < bookmarks.length;i++){

			let name = bookmarks[i].name;
			let url = bookmarks[i].url;

			bookmarkResults.innerHTML += '<div class="displayArea">' + 
										 '<h5>' + name + 
										 '<a class="btn btn-default " target="_blank" href="' + url +'">Visit</a>' +
										 '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger"  href="#">Delete</a>' +
										 '</h5>' + 
										 '</div>' ;

		}
	}//end function fetchBookmakers()










