//função que valida todos os campos de cadastro.
function validaForm(event) {

    event.preventDefault()

    var nome = document.getElementById('nome').value

    var idade = document.getElementById('idade').value

    var endereco = document.getElementById('endereco').value

    var email = document.getElementById('email').value

    var login = document.getElementById('login').value

    var senha = document.getElementById('senha').value

    var confirmasenha = document.getElementById('confirmasenha').value
    

    // 
    if (nome === ""){
        alert('O campo nome completo não foi preenchido')
        
    return false;
    
    } else if (nome.length < 10) {
        alert('O campo Nome precisa ter pelo menos 10 caracteres')
    
    return false;
    }

    if (idade === ""){
        alert('O campo Idade não foi preenchido')
        
    return false;
    }


    if (endereco === ""){
        alert('O campo endereço não foi preenchido')
        
    return false;
    }

    if (email === ""){
        alert('O campo e-mail não foi preenchido')
        
    return false;
    }

    if (login === ""){
        alert('O campo Login não foi preenchido')
        
    return false;
    
    } else if (login.length == 5) {
        alert('O campo Login ter exatamente 5 caracteres')
    
    return false;
    
    }

    if (senha === ""){
        alert('O campo senha não foi preenchido')
        
    return false;
    
    } else if (senha.length == 8) {
        alert('O campo senha deve ter exatamente 8 caracteres')
    
    return false;
    
    }

    if (confirmasenha === ""){
        alert('O campo senha não foi preenchido')
        
    return false;
    
    } else if (confirmasenha.length == 8) {
        alert('O campo confirma senha deve ter exatamente 8 caracteres')
    
    return false;
    
    }

    alert('Dados cadastrados')
    window.location.href="https://www.unisuam.edu.br/"
    
    
        
    


    // if (senha === ''){
    //     alert('Por favor, informe uma senha')        
    //     return false;

    // }

    // if (confirmasenha ===''){
    //     alert('Por favor, confirme a senha')       
    //     return false;

    // }

    // if (senha !== confirmasenha){
    //     alert('As senhas não coincidem')     
    //     return false;
    
    // }
        
    // if (login === ''){
    //     alert('Por favor, informe um usuário')
    //     return false;


    // }


    // if (endereco ===''){
    //     alert('Por favor, informe um endereço');
    //     return false;
    // }



    // if (email ===''){
    //     alert('Por favor, informe um e-mail');
    //     return false;
    // }
    
    // if (idade ===''){
    //     alert('Por favor, informe uma idade');
    //     return false;


   
    

    
    
}
