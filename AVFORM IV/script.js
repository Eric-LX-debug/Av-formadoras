        document.getElementById("form").addEventListener("submit", (event) => {
            event.preventDefault();
        
            let hasErrors = false; // Variável de controle para rastrear erros

            const input = document.getElementById("tel-Fixo");
            const CPF = document.getElementById("CPF").value;
            const nome = document.getElementById("nome").value;
            const nomeMaterno = document.getElementById("nome-materno").value;
            const senha = document.getElementById("senha").value;
            const confirmaSenha = document.getElementById("confirmasenha").value;
            const enderecoRegex = /^(Rua|Avenida|Travessa|Av\.)\s+[A-Za-z0-9à-ÿçÁ-ÿ\s,.'-]{10,}$/i;
            const endereco = document.getElementById("endereco").value;
            const login = document.getElementById("login").value;
            const loginRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Apenas letras e espaços
            const data = document.getElementById("data").value; // Obtém o valor da data inserida
            const today = new Date();
            const inputDateValue = new Date(data); // Cria um objeto Date com o valor inserido
            const checkbox = document.getElementById("termo-check");
            // Calcula a data mínima para 18 anos atrás
            const minAgeDate = new Date(today);
            minAgeDate.setFullYear(today.getFullYear() - 18); // Ajusta a data para 18 anos atrás
            
                    // Validação se a data está vazia ou o usuário é menor de 18 anos
            if (!data || data === "") { // Verifica se a data está vazia
                document.getElementById("dataError").style.display = "block"; // Exibe erro se vazio
                document.getElementById("data").style.border = "2px solid red";
                hasErrors = true;
            } else if (inputDateValue > minAgeDate) { // Verifica se a data é menor que 18 anos atrás
                document.getElementById("dataError2").style.display = "block"; // Exibe erro se menor de 18 anos
                hasErrors = true;
            } else {
                document.getElementById("dataError2").style.display = "none"; // Oculta erro se idade ok
                document.getElementById("dataError").style.display = "none"; // Oculta erro de vazio, se válido
                document.getElementById("data").style.border = "2px solid green";
            }    

            // Validação do CPF
            if (!validarCPF(CPF)) {
                document.getElementById("cpfError").style.display = "block";
                document.getElementById("CPF").style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("cpfError").style.display = "none";
                document.getElementById("CPF").style.border = "2px solid green";
            }
        
            
            // Validação do campo "nome"
            if (nome && nome[0] !== nome[0].toUpperCase() || nome === "" || nome.length < 10) {
                document.getElementById("nomeError").style.display = "block";
                document.getElementById('nome').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("nomeError").style.display = "none";
                document.getElementById('nome').style.border = "2px solid green";
            }

        
            // Validação do campo "nomeMaterno"
            if (nomeMaterno && nomeMaterno[0] !== nomeMaterno[0].toUpperCase() || nomeMaterno === "") {
                document.getElementById("nomeMaternoError").style.display = "block";
                document.getElementById('nome-materno').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("nomeMaternoError").style.display = "none";
                document.getElementById('nome-materno').style.border = "2px solid green";
            }
                    
            // Validação do Endereço
            if (!enderecoRegex.test(endereco)) {
                document.getElementById('endereco').style.border = "2px solid red";
               document.getElementById("enderecoError").style.display = "block";
                hasErrors = true;
            } else {
                document.getElementById("enderecoError").style.display = "none";
                document.getElementById('endereco').style.border = "2px solid green";
            }
        
            // Validação de senha e confirmação
            if (senha.length > 7 || senha === "") {
                document.getElementById("senhaError").style.display = "block";
                document.getElementById('senha').style.border = "2px solid red";
                
                hasErrors = true;
            } else {
                document.getElementById("senhaError").style.display = "none";
                document.getElementById('senha').style.border = "2px solid green";
            }
            
            
            if (!loginRegex.test(login) || login.length !== 5 ) {
                document.getElementById("nomeUsuarioError").style.display = "block";
                document.getElementById('login').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("nomeUsuarioError").style.display = "none";
                document.getElementById('login').style.border = "2px solid green";
            }


            if (senha !== confirmaSenha || senha === "") {
                document.getElementById("confirmaSenhaError").style.display = "block";
                document.getElementById('confirmasenha').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("confirmaSenhaError").style.display = "none";
                document.getElementById('confirmasenha').style.border = "2px solid green";
            }

            // Validação do campo "telefone fixo"
            if (input.value === "") {
                document.getElementById("telfixoError").style.display = "none"; // Esconde erro se vazio
            } else if (!telFixo(input)) {
                document.getElementById("telfixoError").style.display = "block"; // Mostra erro se inválido
                document.getElementById('tel-Fixo').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("telfixoError").style.display = "none"; // Esconde erro se válido
            }   
            
            // Validação do checkbox
            if (!checkbox.checked) {
                document.getElementById("termoError").style.display = "block";
                document.getElementById('termoError').style.border = "2px solid red";
                hasErrors = true;
            } else {
                document.getElementById("termoError").style.display = "none"; // Esconde erro se válido
                
            }


                // Se houver erros, não prossegue
            if (hasErrors) {
                return;
            } else {
            // Se todas as validações passarem
            alert("Os dados foram cadastrados com sucesso!");
            // Resetar as bordas de todos os campos antes de aplicar novamente
            const inputs = document.querySelectorAll('input'); // Seleciona todos os campos input
            inputs.forEach(input => {
            input.style.border = ''; // Reseta a borda
            document.getElementById("form").reset(); // Limpa o formulário
                }
            )}
            
        });
           
        
        // Máscara para o CPF
        CPF.addEventListener('keypress', () => {
            let inputLength = CPF.value.length;
        
            if (inputLength === 3 || inputLength === 7) {
                CPF.value += ".";
            } else if (inputLength === 11) {
                CPF.value += "-";
            }
        });
        
        // Função para validar o CPF
        function validarCPF(CPF) {
            // Remove caracteres não numéricos
            CPF = CPF.replace(/[^\d]+/g, '');
        
            // Verifica se tem 11 dígitos e se não é sequência repetida
            if (CPF.length !== 11 || /^(\d)\1{10}$/.test(CPF)) {
                return false;
            }
        
            // Calcula o primeiro dígito verificador
            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += parseInt(CPF[i]) * (10 - i);
            }
            let resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(CPF[9])) {
                return false;
            }
        
            // Calcula o segundo dígito verificador
            soma = 0;
            for (let i = 0; i < 10; i++) {
                soma += parseInt(CPF[i]) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(CPF[10])) {
                return false;
            }
            return true;
        }

        //Máscara do Celular
        function mascaraCel(input) {
            let valor = input.value.replace(/\D/g, ""); //Remove todos os caracteres não numéricos
            
            // Adiciona o prefixo "+55" automaticamente
            if (!valor.startsWith("55")) {
                valor = "55" + valor;
            }
            
            //Formata para "+55(XX)XXXXX-XXXX"
            valor = valor.replace(/^(\d{2})(\d)/g, "+$1($2");
            valor = valor.replace(/^(\+\d{2}\(\d{2})(\d)/, "$1)$2");
            valor = valor.replace(/(\d{5})(\d{1,4})/, "$1-$2");
            
            //Limita o número máximo de caracteres
            input.value = valor.slice(0, 17);
        }    


        // Função de formatação e validação do TELEFONE FIXO
        function telFixo(input) {
            let telFixo = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

            if (telFixo.length === 0) {
                return true; // Se estiver vazio, considera válido (erro ocultado)
            }

            // Limita o número a 10 dígitos
            if (telFixo.length > 10) {
                telFixo = telFixo.slice(0, 10);
            }

            // Verifica se o primeiro dígito da sequência de 5 dígitos é válido (2, 3, 4, 5)
            if (telFixo.length >= 6) {
                const primeiroDigito = telFixo[2]; // Pega o primeiro dígito após o DDD
                if (!/[2-5]/.test(primeiroDigito)) {
                    return false; // Se o primeiro dígito não for válido, retorna inválido
                }
            }

            // Se o número tiver 10 dígitos, formata o telefone
            if (telFixo.length === 10) {
                telFixo = `(${telFixo.slice(0, 2)}) ${telFixo.slice(2, 6)}-${telFixo.slice(6)}`;
            }

            input.value = telFixo; // Atualiza o valor do campo com a formatação

            return true; // Retorna true se válido (não teve erro)
        }


        document.getElementById('botao-limpar').addEventListener('click', () => {
            // Esconde todas as mensagens de erro
            const mensagensErro = document.querySelectorAll('div.error');
            mensagensErro.forEach((mensagem) => {
                mensagem.style.display = 'none';
            });

            const inputs = document.querySelectorAll('input'); // Seleciona todos os campos input
            inputs.forEach(input => {
            input.style.border = ''; // Reseta a borda
            document.getElementById("form").reset(); // Limpa o formulário
                }
            )
        
        });
    
