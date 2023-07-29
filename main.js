let computador_opt = document.getElementById('computador')
let amigo_opt = document.getElementById('amigo')
let opcao = ''
const x = 'X'
const o = 'O'
let clicou=false
let vez=0
if(amigo_opt.checked == true){
    opcao = 'amigo'
}else{
    opcao = 'pc'
}
let botoes = document.getElementsByClassName('btn')
botoes = [...botoes]

let btn_clicados =[]



//Gerar Numeros aleatorios

let random = (inicio,fim)=> (Math.random() * fim + 1) + inicio

botoes.map((element)=>{
    
    element.addEventListener('click',(evt)=>{
    let quadro = evt.target
       if(opcao=='amigo'){
            if(btn_clicados.includes(quadro)){
                return     
            }
            if(vez == 0){
                quadro.textContent = converter_vez(vez)
                quadro.style.color = 'red'
                vez = 1
            }else{
                quadro.textContent = converter_vez(vez)
                quadro.style.color = 'blue'
                vez = 0
            }
            btn_clicados.push(quadro)
       }else{

       }
    })
})

converter_vez = (vez) => vez == 0?'X':'O'







