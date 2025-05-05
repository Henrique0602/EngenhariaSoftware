const titulo = document.querySelector('h1')
titulo.textContent = "Um titulo qualquer"

const div = document.querySelector('#cointainer')
div.innerHTML = "<h2>Paragrafo Html</h2>"

const imagem = document.querySelector('img')

imagem.setAttribute('src', 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740')

imagem.setAttribute('width', '200')
imagem.setAttribute('height', '200')
imagem.setAttribute('alt', 'Avatar Profile')

const caixa = document.querySelector('.box')

caixa.style.backgroundColor = 'green'
caixa.style.width = '200px'
caixa.style.height = '200px'


const botao = document.getElementById('toggleVisibilidade')

botao.addEventListener('click', () => {
    caixa.classList.toggle('oculta')
})

const novoItem = document.createElement('li')
novoItem.textContent = 'Novo Item'
document.querySelector('ul').appendChild(novoItem)

localStorage.setItem('nome', 'Henrique')
localStorage.setItem('linguagem', 'JS')
const linguagem = localStorage.getItem('linguagem')


//localStorage.removeItem('nome')
// localStorage.clear()

const usuario = {
    nome: 'Daniel',
    idade: 35
}

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'))

console.log(usuarioRecuperado)

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const renderizarTarefas = () => {
    const lista = document.getElementById("lista-tarefas")

    lista.innerHTML = ""

    tarefas.forEach((t, i) => {
        const li = document.createElement('li')
        li.textContent = t
        lista.appendChild(li)
    })
}

renderizarTarefas()

document.getElementById("form-tarefa").onsubmit = function (e) {
    e.preventDefault();
    const input = document.getElementById("input-tarefa");
    tarefas.push(input.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    input.value = "";
    renderizarTarefas();
  };

  document.getElementById("btn-limpar").onclick = () =>{
    tarefas = []
    localStorage.removeItem('tarefas')
    renderizarTarefas()
  }