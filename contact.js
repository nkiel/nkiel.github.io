function sendMail() {
    var link = "mailto:kielnoah4@gmail.com"
    + "?subject=From " + escape(document.getElementById('email-name').value)+": "
    +escape(document.getElementById('email-subject').value)
    + "&body=" + escape(document.getElementById('email-msg').value);
    window.location.href = link;
}

function resetMailForm() {
    document.getElementById('email-name').value="";
    document.getElementById('email-subject').value="";
    document.getElementById('email-msg').value="";
}

/*


		function overButton(img){
			buttonImg = "buttons/button_"+img+"_over.png"
			document.getElementById(img).src = buttonImg
		}
		function upButton(img) {
			buttonImg = "buttons/button_"+img+"_up.png"
			document.getElementById(img).src = buttonImg
		}
		function sendMail() {
			var link = "mailto:chenya@iastate.edu"
				+ "?subject=From " + escape(document.getElementById('name').value)+": "
				+escape(document.getElementById('subject').value)
				+ "&body=" + escape(document.getElementById('comment').value);
		    window.location.href = link;
		}
		function reset() {
			document.getElementById('name').value="";
			document.getElementById('subject').value="";
			document.getElementById('comment').value="";
		}
	*/