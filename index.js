
var fields = document.querySelectorAll("#form-user-create [name]");

var user = {};

function addLine(datauser) {

    console.log(datauser);

    var tr = document.createElement("tr");

    tr.innerHTML = `

    <tr>
    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
    <td>${datauser.name}</td>
    <td>${datauser.email}</td>
    <td>${datauser.admin}</td>
    <td>${datauser.birth}</td>
    <td>
      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    </td>
  </tr> 
    
    `;

    document.getElementById("table-users").appendChild(tr);
}



document.getElementById("form-user-create").addEventListener("submit", function(event){
   
    event.preventDefault();

    fields.forEach(function (field, index) {
        

        if (field.name == "gender") {

            if (field.checked) {
                user[field.name] = field.value;
            }
        } else {

            user[field.name] = field.value;
        }

    });

    addLine(user);
   
});




