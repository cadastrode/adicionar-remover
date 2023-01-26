var db = new Dexie("lojistas");

//DB com tabela única "amigos" com chave primária "id" e
// índices nas propriedades "nome" e "idade"
db.version(4).stores({
  lojistas: `
    ++id, nome, email, telefone, pdv`,
});

class Cadastro{
  constructor(id,nome,email,telefone, pdv){
    this.id=id
    this.nome= nome
    this.email= email
    this.telefone= telefone
    this.pdv= pdv
  }
  delete(pk){
    db.lojistas.delete(pk)
  }

  getAll(){
    return db.lojistas.toArray()
  }
  save(){
    db.lojistas.add(this)
  }

  update(){
    db.lojistas.put(this)
  }

}

db.lojistas.where("pdv").equals("035473").toArray()
   .then(array => console.log(array))

  
