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
let ponto_x=0,ponto_o=0
let vez=0
let btns = document.getElementsByClassName('btn')
btns = [...btns]

let btn_clicados =[], matriz=[],l1=[],l2=[],l3=[]

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
    // for(let i=0;i<3;i++){
    //     for(let j=0;j<3;j++){
    //         if(i==0){
    //             sl1 = matriz[0][0]+ matriz[0][1] + matriz[0][2]
    //             alert('snsns')
    //         }
    //         else if(i==1){
    //             sl2 = matriz[i][0]+ matriz[i][1] + matriz[i][2]
    //             alert(sl2)
    //         }else if(i==2){
    //             sl3 = matriz[2][0]+ matriz[2][1] + matriz[2][2]
    //         }

    //         

    //         
            
    //     }
    // }

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
//novo jogo



novo_jogo = function(escolha){
    renovar()
    btns.map((element)=>{
        element.addEventListener('click',(evt)=>{
        let quadro = evt.target
           if(escolha=='amigo'){
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
converter_vez = vez => vez == 0?'X':'O'
num = (texto)=>{
    if(texto == "X"){
        return 1
    }else if(texto=="O"){
        return 2
    }else{
        return 7
    }
}

ganhar = ()=>{
}

perder = ()=>{
}

empate = ()=>{
}

clic = ()=>{
    alert(matriz)
    alert(`${sl1}--${sl2}--${sl3}\n${sc1}--${sc2}--${sc3}`)
}

btn_novo.addEventListener('click',()=>{
    novo_jogo('amigo')
})

novo_jogo('amigo')