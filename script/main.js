const formulario =document.forms[0]
var inp1= formulario.elements[0]
var inp2= formulario.elements[1]
var inp3= formulario.elements[2]
var inp4= formulario.elements[3]
var mensagem1= document.getElementById("m1")
var mensagem2= document.getElementById("m2")
var mensagem3= document.getElementById("m3")
var mensagem4= document.getElementById("m4")
const badd =document.getElementById("bot1")
const bedt =document.getElementById("bot2")
const brem =document.getElementById("bot3")

if(inp1.value!=""){
    mensagem1.style.display="none"
}
if(inp2.value!=""){
    mensagem2.style.display="none"
}
if(inp3.value!=""){
    mensagem3.style.display="none"
}
if(inp4.value!=""){
    mensagem4.style.display="none"
}
//função de tratativas de erro

// função adicionar usuários
function add(event){
    event.preventDefault(); 
    

    if(inp1.value==""){
        mensagem1.style.display="block"
        mensagem1.setAttribute("class","men") 
    }else{
        mensagem1.style.display="none"
    }
    if(inp2.value==""){
        mensagem2.style.display="block"
        mensagem2.setAttribute("class","men") 
    }else{
        mensagem2.style.display="none"
    }
    if(inp3.value==""){
        mensagem3.style.display="block"
        mensagem3.setAttribute("class","men") 
    }else{
        mensagem3.style.display="none"
    }
    if(inp4.value==""){
        mensagem4.style.display="block"
        mensagem4.setAttribute("class","men") 
    }else{
        mensagem4.style.display="none"
    }
     if((inp1.value!="")&&(inp2.value!="")&&(inp3.value!="")&&(inp4.value!=""))
    {
         
        fetch("https://my-json-server.typicode.com/typicode/demo/db", {
            method: 'POST',
            Headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome:"edspon", email:"eds@gma.com",telefone:"19971282781",pdv:"035643"})
        })
        .then(function(response){
            if(!response.ok){
                throw "A Requisção chegou no servidor, mas o servidor retornou um erro" + response.statusText
            }
            return response.json()
        })
        .then(function(usu){
            console.log(usu)
        })
        .catch(function(error){
            console.log("Aconteceu um Erro" + error)
        }) 

        

        inp1.value=""
        inp2.value=""
        inp3.value=""
        inp4.value=""
        inp1.focus()
    }
    
       

}

badd.addEventListener("click",add) 