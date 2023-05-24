fetch('https://github.com/VeToXwastaken/ejvalverde/blob/main/dashboard.json')
  .then(response => response.json())
  .then(data => {
    let dashboardElement = document.getElementById('dashboard');
    for (let key in data) {
      let value = data[key];
      let pElement = document.createElement('p');
      pElement.textContent = key + ': ' + value;
      dashboardElement.appendChild(pElement);
    }
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
