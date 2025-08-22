//Cadastro de usuario
let nome=prompt("Digite seu nome:")
let idade=parseInt(prompt("Digite sua idade:"))

//Verifica a idade do usuario
if (idade < 13) {
   alert(`Você não tem idade suficiente,não é possivel realizar o cadastro.`)
}else if (idade >= 13) {

  //perguntar a senha
let senha=prompt("Digite sua senha:")
alert(`Cadastro criado com sucesso!`)

  //Login
let confNome=prompt("Digite seu nome novamente:")
let confSenha=prompt("Digite sua senha novamente:")

//Verifica se a senha e o nome estão corretos
if (confNome === nome && confSenha === senha) {
   alert(`Login realizado com sucesso! Bem-vindo, ${nome}.`)
}else {
   alert(`Nome ou senha incorretos. Tente novamente.`)
}
}