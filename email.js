// CÓDGO DE VALIDAÇÃO DO EMAIL
// ----------------------------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1){
        alert("Por favor, informar um e-mail válido");
        return false;
    }else{
            alert("Email informado");
            document.getElementById('email').innerHTML = document.forms[0].email.value;
        }
    }
    
    
    
    
    
    // ----------------------------------------------------------
    
    
    // CÓDIGO DE VERIFICAÇÃO DO EMAIL DIGITADO
    // ----------------------------------------------------------
    
    
    
    // ----------------------------------------------------------