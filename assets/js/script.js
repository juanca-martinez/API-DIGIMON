var url = "https://digimon-api.vercel.app/api/digimon?";
var contenido = document.querySelector("#contenido");
var numero = 0

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    for (item of datos) {
      numero++
      contenido.innerHTML += `
      <div class="col-md-4" id="carta">
        <div class="card">
            <img class="card-img-top" src=${item.img} alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title text-white ver">${"#"+numero+" "}${item.name}</h4>
                <p class="card-text text-light bg-dark text-center">${item.level}</p>

            </div>
        </div>
    </div>
        `;

      if (numero == 100) {
        break;
      }
    }
  });

  

/* <tr>
                <th >${item.name}</th>
                <td><img src=${item.img} alt=${item.name} /></td>
                <td>${item.level}</td>
                
            </tr> */
            