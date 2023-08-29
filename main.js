let computador_opt = document.getElementById('computador')
let amigo_opt = document.getElementById('amigo')
let sl1=0,sl2=0,sl3=0,sc1=0,sc2=0,sc3=0,sdp=0,sds=0
const x = 'X'
const o = 'O'
let clicou=false,game_over=false
let opcao='amigo'
let ponto_x_document = document.getElementById('ponto-jogador-1')
let ponto_o_document = document.getElementById('ponto-jogador-2')
let btn_novo= document.getElementById('novo-jogo-button')
let ponto_x=0,ponto_o=0, vez=0
let btns = document.getElementsByClassName('btn')
btns = [...btns]

let btn_clicados =[], matriz=[],l1=[],l2=[],l3=[],btn_clicados_computador=[],matriz_botoes=[], botoes_vencedores=[],coordenadas=[]



//opcoes de muda de escolha

amigo_click =()=> opcao='amigo'
pc_click = ()=> opcao = 'pc'


renovar = function(){
    matriz=[]
    vez=0
    btns.map((el)=>{
        el.style.color = '#fff';
        clicou=false
        el.textContent ='1'
    })

    btn_clicados.splice(0,btn_clicados.length)
}



let verifica = ()=>{
    matriz = [[num(btns[0].textContent),num(btns[1].textContent),num(btns[2].textContent)],
              [num(btns[3].textContent),num(btns[4].textContent),num(btns[5].textContent)],
              [num(btns[6].textContent),num(btns[7].textContent),num(btns[8].textContent)]]

    sl1 = 0
    sl2 = 0
    sl3 = 0
    sc1 = 0
    sc2 = 0
    sc3 = 0
    sdp = 0
    sds = 0

    matriz.map((linhas,i)=>{
        linhas.map((colunas,j)=>{
            if(i==0){
                sl1+=matriz[0][j]
            }else if(i==1){
                sl2+=matriz[1][j]
            }else if(i==2){
                sl3 += matriz[2][j]
            }

            if(j==0){
              sc1 += matriz[i][0]
            }else if(j==1){
              sc2 += matriz[i][1]  
             }else if(j==2){
              sc3 += matriz[i][2]      
            }

            if(i==j){
                sdp += matriz[i][j]
            }
        })
    })

    if(sl1==3|| sl2==3||sl3==3||sc1==3||sc2==3||sc3==3||sdp==3||sds==3){
    if(sl1==3){
        pintar('sl1')
    }
        return "X"
    }else if(sl1==6|| sl2==6||sl3==6||sc1==6||sc2==6||sc3==6||sdp==6||sds==6){
        return "O"
    }else if((sl1 + sl2+sl3)==13){
    return "-1"
    }
    else{
        return "7"
    }
}



let tem_espacos = (linha,coluna)=>matriz[linha,coluna]==7?false:true
matriz_botoes = [[btns[0],btns[1],btns[2]],
                [btns[3],btns[4],btns[5]],
                [btns[6],btns[7],btns[8]]]

//novo jogo

novo_jogo = function(escolha){
    renovar()
    btns.map((element)=>{
        element.addEventListener('click',(evt)=>{
        let quadro = evt.target
        if(btn_clicados.includes(quadro))
            return     
        
        if(vez == 0){
            quadro.textContent = converter_vez(vez)
            quadro.style.color = 'red'
            if(opcao=="pc"){
                vez=0
                matriz_botoes.map((l,i)=>{
                    l.map((c,j)=>{
                        if(num(matriz_botoes[i][j].textContent)== 7){
                            coordenadas.push(matriz_botoes[i][j])
                        }
                    })
                })
                let pos = random(0,coordenadas.length-1)
                coordenadas[pos].style.backgroundColor = 'pink'
                //coordenadas.slice(0,coordenadas.length-1)
                
            }else{
                vez=1
            }
        }else{
            quadro.textContent = converter_vez(vez)
            quadro.style.color = 'blue'
            vez = 0
        }
        btn_clicados.push(quadro)
        matriz_botoes = [[btns[0],btns[1],btns[2]],
                    [btns[3],btns[4],btns[5]],
                    [btns[6],btns[7],btns[8]]]
    

        if(verifica()== 'X'){
            alert('X ganhou')
            ponto_x++
            ponto_x_document.innerHTML = ponto_x
        }else if(verifica()=='O'){
            alert('O ganhou')
            ponto_o++
            ponto_o_document.innerHTML = ponto_o
        }else if(verifica()=='-1'){
            alert('Empate!')
        }
        })
    })
}
//Gerar Numeros aleatorios

let random = (inicio,fim)=> (Math.random() * fim + 1) + inicio
let  converter_vez = vez => vez == 0?'X':'O'
let num = (texto)=>{
    if(texto == "X"){
        return 1
    }else if(texto=="O"){
        return 2
    }else{
        return 7
    }
}
clic = ()=>{
    alert(coordenadas)
    alert(`${sl1}--${sl2}--${sl3}\n${sc1}--${sc2}--${sc3}`)
}

btn_novo.addEventListener('click',()=>{
    novo_jogo('amigo')
})

novo_jogo('amigo')

pintar = (lado)=>{
   btns[0].style.backgroundColor='blue'
} 