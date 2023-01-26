

const formulario = document.forms[0]
var inp1 = formulario.elements[0]
var inp2 = formulario.elements[1]
var inp3 = formulario.elements[2]
var inp4 = formulario.elements[3]
var mensagem1 = document.getElementById("m1")
var mensagem2 = document.getElementById("m2")
var mensagem3 = document.getElementById("m3")
var mensagem4 = document.getElementById("m4")
const badd = document.getElementById("bot1")
const bedt = document.getElementById("bot2")
const brem = document.getElementById("bot3")


if (inp1.value != "") {
    mensagem1.style.display = "none"
}
if (inp2.value != "") {
    mensagem2.style.display = "none"
}
if (inp3.value != "") {
    mensagem3.style.display = "none"
}
if (inp4.value != "") {
    mensagem4.style.display = "none"
}
//função de tratativas de erro

// função adicionar usuários
async function add(event) {
    event.preventDefault();

    if (inp1.value == "") {
        mensagem1.style.display = "block"
        mensagem1.setAttribute("class", "men")
    } else {
        mensagem1.style.display = "none"
    }
    if (inp2.value == "") {
        mensagem2.style.display = "block"
        mensagem2.setAttribute("class", "men")
    } else {
        mensagem2.style.display = "none"
    }
    if (inp3.value == "") {
        mensagem3.style.display = "block"
        mensagem3.setAttribute("class", "men")
    } else {
        mensagem3.style.display = "none"
    }
    if (inp4.value == "") {
        mensagem4.style.display = "block"
        mensagem4.setAttribute("class", "men")
    } else {
        mensagem4.style.display = "none"
    }
    if ((inp1.value != "") && (inp2.value != "") && (inp3.value != "") && (inp4.value != "")) {

       var nome= inp1.value
       var email =inp2.value
       var telefone=inp3.value
       var pdv=inp4.value
        
       usuario={ nome ,email, telefone, pdv}

        fetch("https://script.google.com/home/projects/1QkedlK7JmqaD8XO9sYEw462axwvw3OFbg8EQXkRjwwYTzrD6cLU9QYpO/edit", {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/vnd.github+json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone,
                pdv: pdv
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw "A Requisção chegou no servidor, mas o servidor retornou um erro" + response.statusText
                }
                return response.json()
            })
            .then(function (repos) {
                console.log(repos)
            })
            .catch(function (error) {
                console.log("Aconteceu um Erro" + error)
            })

         localStorage.setItem("id1",JSON.stringify(usuario))

        inp1.value = ""
        inp2.value = ""
        inp3.value = ""
        inp4.value = ""
        inp1.focus()
    }



}

badd.addEventListener("click", add) 