//Cadastro e Login em JS

// Functions
function fazerLogin(){
    if (datas.length == 0){
        console.log("Não há usuários cadastrados para fazer login!");
    } else{
        alert("\nFaça Login digitando seu nome de usuário e senha!");
        
        var user = prompt("Nome de usuário (em letras minúsculas): ");
        user = evitarStringVazia(user, "Preencha o dado Nome de Usuário corretamente. \nNome de usuário: ");
        user = user.toLowerCase();
        var password = prompt("Senha: ");
        password = evitarStringVazia(password, "Preencha o dado Senha corretamente. \nSenha:");
        var resultado = buscaLogin(user, password);
        
        if(resultado == null){
            alert("O usuário ou senha estão incorretos.");
        } else{
            alert("Login realizado com sucesso");
        }
    }
}

function buscaLogin(nome, senha){
    var inicio = 0;
    var fim = datas.length - 1;
    
    while (inicio <= fim){
        var meio = Math.floor((inicio + fim) / 2);
        
        if(datas[meio].user == nome && datas[meio].password == senha){
            return "Found";
        } else if (datas[meio].user < nome){
            inicio = meio + 1;
        } else{
            fim = meio - 1;
        }
    }
    
    return null;
}

function cadastrar(){
    alert("\nCadastre-se digitando seu nome de usuário e senha!");
    
    var user = prompt("Nome de usuário (em letras minúsculas): ");
     user = evitarStringVazia(user, "Preencha o dado Nome de Usuário corretamente. \nNome de usuário: ");
    user = user.toLowerCase();
    var password = prompt("Senha: ");
    password = evitarStringVazia(password, "Preencha o dado Senha corretamente. \nSenha:");
    password = verificaSenha(password)
    var resultado = buscaUsuario(user);
    
    if(resultado == null){
        addUsuario(user, password);
        console.log("Cadastro realizado com sucesso!");
    } else{
        console.log("Esse nome de usuário já está sendo utilizado!");
    }
}

function verificaSenha(senha){
    var minimo_caracteres = 6;
    while(senha.length < minimo_caracteres){
        senha = prompt(`Quantidade de Caracteres insuficiente (Minimo ${minimo_caracteres}). \nSenha: `);
    }
    return senha;
}

function buscaUsuario(nome){
    var inicio = 0;
    var fim = datas.length - 1;
    
    while (inicio <= fim){
        var meio = Math.floor((inicio + fim) / 2);
        
        if(datas[meio].user == nome){
            return datas[meio];
        } else if (datas[meio].user < nome){
            inicio = meio + 1;
        } else{
            fim = meio - 1;
        }
    }
    
    return null;
}

function addUsuario(nome, senha){
    var novoUsuario = { user: nome, password: senha };
    var inicio = 0;
    var fim = datas.length - 1;
    
    while (inicio <= fim){
        var meio = Math.floor((inicio + fim) / 2);
        
        if(datas[meio].user < nome){
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    datas.splice(inicio, 0, novoUsuario);
}

function evitarStringVazia(string, texto){
    while (string == "" || string == null) {
        string = prompt(`${texto}`);
    }
    return string;
}

// Execução do código
var datas = [
    {
        user: "nickname",
        password: "0642NK!"
    },
    {
        user: "keke123",
        password: "40028922"
    }
];

datas.sort((a, b) => (a.user < b.user) ? -1 : (a.user > b.user) ? 1 : 0);

console.log("Bem vindo a nossa página! Siga os comandos abaixo\n1- Fazer Login \n2- Fazer Cadastro \n0- Sair da Página.");
var execucao = prompt("Digite o comando: ");

while (execucao != "0"){
    while(execucao != "0" && execucao != "1" && execucao != "2"){
        execucao = prompt("Erro! Digite apenas 1(Login), 2(Cadastro) ou 0(Sair). \nDigite o comando: ");
    }
    
    if(execucao == "1"){
        fazerLogin();
    } else if(execucao == "2"){
        cadastrar();
    } else if (execucao == "0"){
        alert("\nFinalizado!");
        break;
    }
    
    execucao = prompt("\nDigite o comando (1(Login), 2(Cadastro) ou 0(Sair)): ");
}

console.table(datas);