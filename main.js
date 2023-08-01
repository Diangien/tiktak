let computador_opt = document.getElementById('computador')
let amigo_opt = document.getElementById('amigo')
let opcao = ''
let sl1=0,sl2=0,sl3=0,sc1=0,sc2=0,sc3=0,sdp=0,sds=0
const x = 'X'
const o = 'O'
let clicou=false,game_over=false
let vez=0
if(amigo_opt.checked == true){
    opcao = 'amigo'
}else{
    opcao = 'pc'
}
let btns = document.getElementsByClassName('btn')
btns = [...btns]

let btn_clicados =[], matriz=[],l1=[],l2=[],l3=[]


//novo jogo

novo_jogo = function(escolha){
    btns.map((element)=>{
   
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
}
//Gerar Numeros aleatorios

let random = (inicio,fim)=> (Math.random() * fim + 1) + inicio



converter_vez = (vez) => vez == 0?'X':'O'
num = (texto)=>{
    if(texto == "X"){
        return 3
    }else if(texto=="O"){
        return 5
    }else{
        return 7
    }
}

let verifica = ()=>{
    matriz = [[num(btns[0]),num(btns[1]),num(btns[2])],[num(btns[3]),num(btns[4]),num(btns[5])],[num(btns[6]),num(btns[7]),num(btns[8])]]

    for(let i=0;i<3;i++){
        for(let j=0;i<3;j++){
            if(i==0){
                sl1 = matriz[i][0]+ matriz[i][1] + matriz[i][2]
            }else if(i==2){
                sl2 = matriz[i][0]+ matriz[i][1] + matriz[i][2]
            }else if(i==3){
                sl3 = matriz[i][0]+ matriz[i][1] + matriz[i][2]
            }

            if(j==0){
                sc1 = matriz[0][j]+ matriz[1][j] + matriz[2][j]
            }else if(j==2){
                sc2 = matriz[0][j]+ matriz[1][j] + matriz[2][j]
            }else if(j==3){
                sc3 = matriz[0][j]+ matriz[1][j] + matriz[2][j]
            }

            if(i==j){
                sdp += matriz[i][j]
            }
            
        }
    }

     if(sl1==6|| sl2==6||sl3==6||sc1==6||sc2==6||sc3==6||sdp==6){
         return "X"
     }else if(sl1==15|| sl2==15||sl3==15||sc1==15||sc2==15||sc3==15||sdp==15){
         return "O"
     }else{
         return "1"
     }

    
}

//  let tempo = setInterval(()=>{

//      if(verifica() == "X"){
//          alert('X ganhou')
//          clearInterval(tempo)
//      }else if(verifica() == "O"){
//          alert('O ganhou')
//              clearInterval(tempo)
//      }else if(verifica() == "1"){
//              alert('Empate')
//              clearInterval(tempo)
//      }
   
        
//      }
//  ,1*60*1000)


novo_jogo(opcao)

alert(sl1)

