var url = 'https://jsonplaceholder.typicode.com/posts'

var contenido = document.querySelector("#contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    //console.log(datos);
    for (item of datos) {
    //for (var i =0; i<datos.length; i++)     item[i].userId
        contenido.innerHTML +=  `
            <tr>
                <th >${item.userId}</th>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>
        `
        if (item.id == 10) {break;}
    }
})  








/*
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>

*/
