const form = document.getElementById('data');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(...data);

});
