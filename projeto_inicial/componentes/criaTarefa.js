import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
import {carregaTarefa} from './carregaTarefa.js'
    

export const handleNovoItem = (event) => {
    event.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
       valor,
       dataFormatada 
    }

    const tarefasAtualizadas = [... tarefas , dados]

    const criaTarefa = Tarefa(dados);

    lista.appendChild(criaTarefa);

    localStorage.setItem("tarefas" , JSON.stringify(tarefasAtualizadas) );

    input.value = " ";
    carregaTarefa();

}
export const Tarefa = ({valor , dataFormatada}) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    return tarefa;
}

