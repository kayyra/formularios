const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
        e.preventDefault();    
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const date = document.querySelector("#date").value;        
  
        
        console.log(name, email, date);
}
