const shortBtn = document.getElementById('short-btn');
const clearBtn = document.getElementById('clear-btn');

shortBtn.addEventListener('click', shortenUrl);
clearBtn.addEventListener('click', clearUrl);

function shortenUrl() {
	var originalUrl = document.getElementById('originalUrl').value;
	var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
	var shortenedUrlTextArea = document.getElementById('shortenedUrl');
	fetch(apiUrl)
		.then(response => response.text())
		.then(data => {
			if (data == "Error") {
				shortenedUrlTextArea.style.color = "red";
				shortenedUrlTextArea.value = "Error al acortar la URL";
			}	
			else {
				shortenedUrlTextArea.style.color = "black";
				shortenedUrlTextArea.value = data;
			}
		})
		.catch(err => {
			shortenedUrlTextArea.value = "Error al acortar la URL";
		});
}

function clearUrl() {
	document.getElementById('shortenedUrl').value = "";
	document.getElementById('originalUrl').value = "";
}