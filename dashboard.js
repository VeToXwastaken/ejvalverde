fetch('C:\Users\ValKorp\Downloads/dashboard.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos JSON y mostrarlos en la página
    document.getElementById('dashboard').innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
