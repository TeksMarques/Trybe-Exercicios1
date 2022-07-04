function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoCalen() {
    let diasDoMes = document.querySelector('#days');

    for (index = 0; index < decemberDaysList.length; index += 1) {

        let dia = decemberDaysList[index];
        let diaNum = document.createElement('li');
        diaNum.innerText = dia;

        if (dia === 24 || dia === 31) {
            diaNum.className = 'day holiday'
            diasDoMes.appendChild(diaNum)
        } else if (dia === 4 || dia === 11 || dia === 18) {
            diaNum.className = 'day friday'
            diasDoMes.appendChild(diaNum)
        } else if (dia === 25) {
            diaNum.className = 'day holiday friday'
            diasDoMes.appendChild(diaNum)
        } else {
            diaNum.className = 'day'
            diasDoMes.appendChild(diaNum)
        }
    }
}
diasDoCalen()

function botaoFeriado(nomeBotao) {
    let buttonContainer = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    novoBotao.id = 'btn-holiday'
    novoBotao.innerHTML = nomeBotao
    buttonContainer.appendChild(novoBotao);
}

botaoFeriado('Feriados')

function fundoFeriados() {
    let btnFeriado = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    btnFeriado.addEventListener('click', function () {
        for (let index = 0; index < feriados.length; index += 1) {
            if (feriados[index].style.backgroundColor === setNewColor) {
                feriados[index].style.backgroundColor = backgroundColor;
            } else {
                feriados[index].style.backgroundColor = setNewColor;
            }
        }
    });
}

fundoFeriados();

function botaoSexta(nomeBotao) {
    let buttonContainer = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    novoBotao.id = 'btn-friday'
    novoBotao.innerHTML = nomeBotao
    buttonContainer.appendChild(novoBotao);
}

botaoSexta('Sexta-feira')

function textoSexta(sextaArray) {
    let sextaBotao = document.querySelector('#btn-friday');
    let sextas = document.getElementsByClassName('friday');
    let novoTexto = 'Sextou o/'

    sextaBotao.addEventListener('click', function () {
        for (let index = 0; index < sextas.length; index += 1) {
            if (sextas[index].innerHTML !== novoTexto) {
                sextas[index].innerHTML = novoTexto
            } else {
                sextas[index].innerHTML = sextaArray[index]
            }
        }
    })
}

let sextasDezembro = [4, 11, 18, 25]
textoSexta(sextasDezembro)

function diaMouseOver() {
    let dias = document.querySelector('#days')
    dias.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600'
    })
}

function diaMouseOut() {
    let dias = document.querySelector('#days')
    dias.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px'
        event.target.style.fontWeight = '300'
    })
}

diaMouseOver()
diaMouseOut()

function novaTarefa(tarefas) {
    let tarefasContainer = document.querySelector('.my-tasks');
    let tarefasNome = document.createElement('span');
    tarefasNome.innerHTML = tarefas;
    tarefasContainer.appendChild(tarefasNome);
}

novaTarefa('Projeto');

function novaTafDiv(cor) {
    let tafContainer = document.querySelector('.my-tasks');
    let novaTaf = document.createElement('div');
    novaTaf.className = 'task';
    novaTaf.style.backgroundColor = cor;
    tafContainer.appendChild(novaTaf)
}

novaTafDiv('pink')

function selecionarTarefaClass() {
    let selecionarTarefa = document.getElementsByClassName('task selected');
    let minhasTarefas = document.querySelector('.task');
    minhasTarefas.addEventListener('click', function (event) {
        if (selecionarTarefa.length === 0) {
            event.target.className = 'task selected'
        } else {
            event.target.className = 'task'
        }
    })
}

selecionarTarefaClass()

function corFundoTarefa(){
    let selecionarTarefa = document.getElementsByClassName('task selected');
    let dias = document.querySelector('#days');
    let tafDiv = document.querySelector('.task');
    let tafCor = tafDiv.style.backgroundColor;

    dias.addEventListener('click', function(event){
        let eventTargetCor = event.target.style.color;
        if(selecionarTarefa.length > 0 && eventTargetCor !== tafCor){
            let color = selecionarTarefa[0].style.backgroundColor;
            event.target.style.color = color
        }else if(eventTargetCor === tafCor){
            event.target.style.color = 'rgb(119,119,119)';
        }            
    })
}

corFundoTarefa()





