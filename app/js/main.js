console.log('Edite o arquivo js/main.js.')

var submit = false;
var form = document.getElementById("form")
form.onsubmit = (e) => {
  e.preventDefault()
  showLoader(form);
}

var showLoader = (form) => {
  const container = document.getElementsByClassName('form')[0]
  const loader = document.getElementsByClassName('loader')[0]
  container.style.opacity = 0.5
	loader.style.visibility = 'visible'
	setTimeout(() => {
  loader.style.visibility = 'hidden'
  container.style.opacity = 1
  form.submit();
},2000)
}