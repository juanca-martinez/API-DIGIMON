var url = "https://digimon-api.vercel.app/api/digimon";

var contenido = document.querySelector("#contenido");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {

    for (item of datos) {

      contenido.innerHTML += `
            <tr>
                <th >${item.name}</th>
                <td><img src=${item.img} alt=${item.name} /></td>
                <td>${item.level}</td>
                
            </tr>
        `;
      if (item.id == 10) {
        break;
      }
    }
  });

