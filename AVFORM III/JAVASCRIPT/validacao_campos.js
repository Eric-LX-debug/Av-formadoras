//função que valida todos os campos de cadastro.
function validarForm(event) {

    event.preventDefault(); 
    
    let nome = document.getElementById('nome').value

    let idade = document.getElementById('idade').value

    let endereco = document.getElementById('endereco').value

    let email = document.getElementById('email').value

    let login = document.getElementById('login').value

    let senha = document.getElementById('senha').value

    let confirmasenha = document.getElementById('confirmasenha').value
    


    if (nome === ''){
        alert('O campo nome completo não foi preenchido')       
        return false;


    }


    if (senha === ''){
        alert('Por favor, informe uma senha')        
        return false;

    }

    if (confirmasenha ===''){
        alert('Por favor, confirme a senha')       
        return false;

    }

    if (senha !== confirmasenha){
        alert('As senhas não coincidem')     
        return false;
    
    }
        
    if (login === ''){
        alert('Por favor, informe um usuário')
        return false;


    }


    if (endereco ===''){
        alert('Por favor, informe um endereço');
        return false;


    }



    if (email ===''){
        alert('Por favor, informe um e-mail');
        return false;



        
    }
    
    if (idade ===''){
        alert('Por favor, informe uma idade');
        return false;


    }
    
    window.location.href="https://www.unisuam.edu.br/"

}
