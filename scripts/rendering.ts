const titleElement = <HTMLElement>document.querySelector("div.question h1.title")
const optionElements = [
    <HTMLElement>document.querySelector("ul.options li#option1"),
    <HTMLElement>document.querySelector("ul.options li#option2"),
    <HTMLElement>document.querySelector("ul.options li#option3"),
    <HTMLElement>document.querySelector("ul.options li#option4"),
]

const optionTextElements = [
    <HTMLElement>document.querySelector("ul.options li#option1 p.optionText"),
    <HTMLElement>document.querySelector("ul.options li#option2 p.optionText"),
    <HTMLElement>document.querySelector("ul.options li#option3 p.optionText"),
    <HTMLElement>document.querySelector("ul.options li#option4 p.optionText"),
]

const bottomItems = [
    <HTMLElement>document.querySelector("div.bottom ul.pontuations li.wrong p.value"),
    <HTMLElement>document.querySelector("div.bottom ul.pontuations li.stop p.value"),
    <HTMLElement>document.querySelector("div.bottom ul.pontuations li.right p.value"),
]


function rightAnswer(){
    for(var elm of optionElements){
        elm.removeEventListener("click", rightAnswer)
        elm.removeEventListener("click", wrongAnswer)
    }
    playAudio("correto")
    setTimeout(()=>{
        pontuation+=2;
        if(questionIds.length == 0){
            alert("MAOE! Acabou de ganhar 1 porco e 2 bode!!")
            location.reload()
        }else{
            playAudio("question"+(questionIds[0]+1))
            renderQuestion(questionList[questionIds.shift()!])
        }
    },1000)
}
function wrongAnswer(){
    playAudio("errou")
    if(pontuation == 0){
        alert("Errado! Não ganhou nada!")
        location.reload()
    }else{
        alert("Errado! Ganhou "+ (pontuation-1) +" mil reais!")
        location.reload()
    }
}

function renderQuestion(question:Question){
    titleElement.innerText = question.title;
    for(var i = 0; i< 4; i++){
        optionTextElements[i].innerText = question.options[i]
        if(i+1 == question.rightAnswer || question.rightAnswer == null){
            optionElements[i].addEventListener("click", rightAnswer)
        }else{
            optionElements[i].addEventListener("click", wrongAnswer)
        }
    }

    if(pontuation > 1) bottomItems[0].innerText = (pontuation-1) + " MIL"
    if(pontuation > 0) bottomItems[1].innerText = pontuation + " MIL"
    bottomItems[2].innerText = (pontuation+1) + " MIL"
    
    if(pontuation == (questionList.length-1)*2){
        bottomItems[2].innerText = "1 PORCO E 2 BODE"
    }
}

function playAudio(name:string){
    (<HTMLAudioElement>document.querySelector("audio."+name)).play()
}