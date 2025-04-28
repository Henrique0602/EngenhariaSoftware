// console .log("Hello world")

// const tarefas = [
//     "Estudar Javascript",
//     "Criar Projeto",
//     "Preparar apresentação",
//     "Revisar codigo"
// ]

// console.table(tarefas)

// const categorias = new Array
// ("Trabalho", "Estudo", "Pessoal","Projetos")

// console.table(categorias)

// const prioridades = Array.of
// ("Baixa","Media","Alta")

// console.table(prioridades)

// const letras = Array.from
// ("Henrique")
// console.table(letras)


const tarefas = [
    "Estudar Javascript",
    "Criar Projeto",
    "Preparar apresentação",
    "Revisar codigo"
]


// console.log(tarefas[0])

// console.log(tarefas[tarefas.length -1])

// tarefas [2] = "PowerPoint"


// tarefas.push("Realizar testes") //Adicionar elementos no final


// tarefas.unshift("Preparar ambiente") //Adicionar elementos na posição 0
// console.log(tarefas)

// tarefas.shift("Realizar testes") //Remover elemento na posição 0

// tarefas.pop("Realizar testes")//Remover elemento na posição final


// // Indice que começa, quantidade de itens que quer modificar, e oque quer inserir (slice)

// // serve para adicionar , remover ou substituir (slice)

// tarefas.slice(1,0,"Realizar testes") // adição
// tarefas.slice(2,2) // remoção
// tarefas.slice(2,1,"Preparar apresentação") // substituir


// tarefas.forEach((el,idx)=> {
    
//     console.log(`${idx + 
//     1}.${el}`)
// })

// const tarefasModificadas = 
// tarefas.map(el => tarefas.toUpperCase())

// console.log(tarefasModificadas)
// tarefasModificadas.push("teste")
// console.log(tarefas)

// const tarefasComA = tarefas.filter(el => el.includes("a"))
// // filter mostra todos da condição
// console.log(tarefasComA)

// const tarefasComA2 = tarefas.find(el => el.includes("a"))
// // find mostra o primeiro da condição e so 1
// console.log(tarefasComA2)

// const tarefasJs = tarefas.findIndex(el => el.includes("Javascript"))
// // findIndex mostra o indice
// console.log(tarefasJs)

// tarefas.splice(tarefasJs,1)
// console.log(tarefas)


// const valorProdutos = [10,67,89,100]
// const somaComprimentos = valorProdutos.reduce((total, t) => total + t,0)

const tarefa ={
    id:1,
    titulo:"Aprender sobre objetos",
    descricao : "Estudar prioridades e métodos",
    concluidas:false,
    prioridade:"Alta",
    dataCricao: new Date()
}

// console.log(tarefa)
// const tarefaEspecial = {
//     " nome da tarefa":"Tarefa com espaço",
//     "data-cricao":"Tarefa com traço"
// }


// const projeto ={
//     nome : "TaskMAster",
//     tarefas:[],
//     adicionarTArefa(titulo,prioridade
//         = "Media"){
//             const novatarefa ={
//                 id: this.tarefas.length +1,
//                 titulo,
//                 prioridade,
//                 concluida: false,
//                 criada: new Date()
//             }

//             this.tarefas.push(novatarefa)
//             console.log(`tarefa "${titulo}"
//             adicionada com sucesso`)
//             return novatarefa
//         },
//         listarTarefas(){
//             console.log(`PROJETO ${this.nome} - Lista de tarefas`)
//             this.tarefas.forEach(t =>
//                 console.log(`- ${t.id}: ${titulo}`)
//             )
//         }
    
// }
// projeto.adicionarTArefa("Estudar JS")
// projeto.adicionarTArefa("Estudar Python")
// projeto.adicionarTArefa("Estudar Storyelling")
// console.log(projeto.listarTarefas())

const prioridades = ["Baixa", "Media", "Alta"]

const [Baixa, ...outrasPrioridades] = prioridades


const tarefas1 = {
    id:1,
    nome:"Estudar js",
    data : new Date()
}

const { id, nome, data} = tarefas1

console.log(id)