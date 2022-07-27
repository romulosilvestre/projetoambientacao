/*
  A função é
  um trecho de código
  (algoritmo) que
  realiza uma tarefa
  específica
*/

function validar(){
    //declara as variáveis
    //O tipo é implícito
    //JS é fracamente tipada
    var login;
    var senha; 
    //Pegar o elemento
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    if(login === ''){
        alert("login obrigatório");
        return false;
    }else if(senha === ''){
        alert("senha obrigatória");
        return false;
    }else{
        if(login != "senai"){
            alert("login inválido");
            return false;
        }else if(senha != 123){
            alert("senha inválida");
            return false;
        }else{           
            window.sessionStorage.setItem('login',login);
            return true;            
        }
      
    }
}
