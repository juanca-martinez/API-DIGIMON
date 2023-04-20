var url = "https://digimon-api.vercel.app/api/digimon";

var contenido = document.querySelector("#contenido");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    for (item of datos) {
      contenido.innerHTML += `
      <div class="col-md-3" id="carta">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${item.img} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.level}</p>

            </div>
        </div>
    </div>
        `;

      if (item.id == 10) {
        break;
      }
    }
  });

/* <tr>
                <th >${item.name}</th>
                <td><img src=${item.img} alt=${item.name} /></td>
                <td>${item.level}</td>
                
            </tr> */
