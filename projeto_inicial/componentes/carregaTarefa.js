import { criaData } from "./criaData.js";


export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || 
    [];

    lista.innerHTML = " ";
    tarefasCadastradas.forEach((tarefa) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        const diff = data.diff(dia);

        if(diff === 0 ){
            lista.appendChild(criaData(dia))
        }
        
    })


}