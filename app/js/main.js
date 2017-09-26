console.log('Edite o arquivo js/main.js.')

var submit = false;
var form = document.getElementById("form")
form.onsubmit = (e) => {
  e.preventDefault()
  showLoader(form);
}

var showLoader = (form) =>{
	document.getElementsByClassName('loader')[0].style.visibility = 'visible'
	setTimeout(() => {
  document.getElementsByClassName('loader')[0].style.visibility = 'hidden'
  form.submit();
},2000)
}