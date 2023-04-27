var url = "https://digimon-api.vercel.app/api/digimon?";
var contenido = document.querySelector("#contenido");
var numero = 0;

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    for (item of datos) {
      numero++;
      contenido.innerHTML += `
     
    <div class="card col- col-sm-4 col-md-3 col-lg-2 border-danger text-center">
    <img class="card-img-top" src=${item.img} alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title text-wrap align-middle font-weight-bolder">${
        "#" + numero + " "
      }${item.name}</h4>
      
      <p class="card-text bg-dark "><small class=" text-white">${
        item.level
      }</small></p>
    </div>
  </div>
        `;

      if (numero == 100) {
        break;
      }
    }
  });

function cambiarColor(e) {
  if (e.type == "mouseover") e.currentTarget.style.color = "red";
  else e.currentTarget.style.color = "red";
}
let lnk = document.getElementById("lnk");
lnk.addEventListener("mouseover", cambiarColor);
lnk.addEventListener("mouseout", cambiarColor);

/* <tr>
                <th >${item.name}</th>
                <td><img src=${item.img} alt=${item.name} /></td>
                <td>${item.level}</td>


                <div class="col" id="carta">
        <div class="card">
            <img class="card-img-top" src=${item.img} alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title text-white ver">${"#"+numero+" "}${item.name}</h4>
                <p class="card-text text-light bg-dark text-center">${item.level}</p>

            </div>
        </div>
    </div>
                
            </tr> */
