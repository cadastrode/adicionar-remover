// Declaração do Banco de dados
var db = new Dexie("lojistas");
db.version(3).stores({
    lojistas: `
    ++id, loja, cnpj, tfone, pdv, representante`
});
// Classe necessária para o foreach
class Cadastro {

    constructor(id, loja, cnpj, tfone, pdv, representante) {
        this.id = id
        this.loja = loja
        this.cnpj = cnpj
        this.tfone = tfone
        this.pdv = pdv
        this.representante = representante
    }
    // Declaração para obter todos os dados
    static getAll() {
        return db.lojistas.toArray()
    }
}
// Chamando a função para a leitura dos usuários
get()
// Declarando a função Principal.
function get() {

    const usuario = new Cadastro("hhasd", "hhasd", "hhasd", "hhasd", "hhasd", "hhasd")

    Cadastro.getAll().then(lojistas =>
        lojistas.forEach(usuario => {
            //Criando os elementos da tabela
            var tr = document.createElement("tr")
            var idCliente = document.createElement("td")
            idCliente.textContent = usuario.id

            var tdloja = document.createElement("td")
            tdloja.textContent = usuario.loja
            tr.appendChild(tdloja)

            var tdcnpj = document.createElement("td")
            tdcnpj.textContent = usuario.cnpj
            tr.appendChild(tdcnpj)

            var tdtfone = document.createElement("td")
            tdtfone.textContent = usuario.fone
            tr.appendChild(tdtfone)

            var tdpdv = document.createElement("td")
            tdpdv.textContent = usuario.pdv
            tr.appendChild(tdpdv)

            var tdrepresentante = document.createElement("td")
            tdrepresentante.textContent = usuario.representante
            tr.appendChild(tdrepresentante)

            var tdopções = document.createElement("td")
            var editar = document.createElement("button")
            var remover = document.createElement("button")
            tdopções.appendChild(editar)
            tdopções.appendChild(remover)
            //Criando o botao de edição
            var imged = document.createElement("img")
            imged.src = "img/pencil-square.svg"
            imged.alt = "editar usuario"
            editar.appendChild(imged)
            // Criando a função de edição

            imged.addEventListener("click", function (event) {
                console.log("deu certo")
                //Criando a captura pelo ID
                tr.setAttribute("data-idCliente", usuario.id)
                // Capturando os tds
                let botao = event.target
                let bpegtr = botao.parentElement.parentElement.parentElement
                let idCliente = bpegtr.dataset.idCliente
                let loja = tr.querySelectorAll("td")[0].textContent
                let cnpj = tr.querySelectorAll("td")[1].textContent
                let fone = tr.querySelectorAll("td")[2].textContent
                let pdv = tr.querySelectorAll("td")[3].textContent
                let representante = tr.querySelectorAll("td")[4].textContent
                // Retornando os tds aos inputs
                document.querySelector("#nome").value = loja
                document.querySelector("#email").value = cnpj
                document.querySelector("#telefone").value = fone
                document.querySelector("#pdv").value = pdv
                document.querySelector("#representante").value = representante
                //Identificador de tr para edição
                tdloja.setAttribute("class", "atu")
                tdcnpj.setAttribute("class", "atu")
                tdtfone.setAttribute("class", "atu")
                tdpdv.setAttribute("class", "atu")
                tdrepresentante.setAttribute("class", "atu")
                tdopções.setAttribute("class", "atu")
                //Trocando os botões de add para edit
                adi.style.display = "none"
                atual.style.display = "block"
                inp6.value=usuario.id
                id = bpegtr.dataset.id

                if(usuario.id){
                   
                        db.lojistas.delete(usuario.id)
                   
                       
                }
            })
            //Criando a Imagem delete
            var imgdel = document.createElement("img")
            imgdel.src = "img/trash3.svg"
            imgdel.alt = "editar usuario"
            remover.appendChild(imgdel)
            //Criando evento de Delete
            imgdel.addEventListener("click", function (event) {
                tabela.innerHTML = `<tr id="men">
                                    <th>loja</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>PDV</th>
                                    <th>representante</th>
                                    <th>Opções</th>
                                    </tr>`
                console.log("deu certo")
                //Criando a captura do id
                tr.setAttribute("data-idCliente", usuario.id)
                let botao = event.target
                let bpegtr = botao.parentElement.parentElement.parentElement
                let idCliente = bpegtr.dataset.idCliente
                //Confirmando e excluindo usuário
                let conf = confirm("Tem certeza que quer Deletar?")
                if (conf) {
                    db.lojistas.delete(usuario.id)
                }
                get()
            })
            //Inserindo opçõe e tr na tabela
            tr.appendChild(tdopções)
            tabela.appendChild(tr)
        }))
}
        //Decarando as variáveis
        const formulario = document.forms[0]
        var inp1 = formulario.elements[0]
        var inp2 = formulario.elements[1]
        var inp3 = formulario.elements[2]
        var inp4 = formulario.elements[3]
        var inp5 = formulario.elements[4]
        var inp6 = formulario.elements[5]
        var mensagem1 = document.getElementById("m1")
        var mensagem2 = document.getElementById("m2")
        var mensagem3 = document.getElementById("m3")
        var mensagem4 = document.getElementById("m4")
        var mensagem5 = document.getElementById("m5")
        const badd = document.getElementById("bot1")
        var adi = document.getElementById("at")
        var atual = document.getElementById("atual")
        const bedt = document.getElementById("bot2")
        const brem = document.getElementById("bot3")
        var tabela = document.getElementById("tabela")
        //Excluindo mensagens da tela
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
        if (inp5.value != "") {
            mensagem5.style.display = "none"
        }
        // Criando função ADD
        badd.addEventListener("click", function (event) {
            event.preventDefault()
            //Limpando a tabela menos cabeçalho
            tabela.innerHTML = `<tr id="men">
                                <th>loja</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>PDV</th>
                                <th>representante</th>
                                <th>Opções</th>
                                </tr>`
    //Introdusindo mensagem de erro na tela
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
    if (inp5.value == "") {
        mensagem5.style.display = "block"
        mensagem5.setAttribute("class", "men")
    } else {
        mensagem5.style.display = "none"
    }
    if ((inp1.value != "") && (inp2.value != "") && (inp3.value != "") && (inp4.value != "") && (inp5.value != "")) {
      //Adicionando Usuários
        const cadastro = {
            loja: inp1.value,
            cnpj: inp2.value,
            fone: inp3.value,
            pdv: inp4.value,
            representante: inp5.value
        }
            db.lojistas.add(cadastro)
           
            adi.style.display = "block"
            atual.style.display = "none"
        // Limpar inpus e dar foco
        inp1.value = ""
        inp2.value = ""
        inp3.value = ""
        inp4.value = ""
        inp5.value = ""
        inp1.focus()
        get()
    }
})