function myFunction() { 
	var imageSrc = document.getElementById('bigImagee').src;
    document.getElementById('bigImagee').src = document.getElementById(event.currentTarget.id).src;
    document.getElementById(event.currentTarget.id).src = imageSrc;
}