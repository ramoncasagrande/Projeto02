const listaTarefas = document.getElementById("listaTarefa");
const novaTarefa = document.getElementById("tarefaInput");

function addTarefa() {
    const descricao = novaTarefa.value.trim();
    if (descricao !== "") {

        const maxTexto = descricao.substring(0, 35);

        const li = document.createElement("li");
        li.innerHTML = `
            
            <span>${maxTexto}</span>
            <button class="botaoEditar" onClick="editaTarefa(this)">Editar</button>
            <button class="botaoRemover" onClick="deletaTarefa(this)">Remover</button>
        `;
        listaTarefas.appendChild(li);
        novaTarefa.value = "";
    }
}

function editaTarefa(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const novoTexto = prompt("Editar tarefa:", span.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
        span.textContent = novoTexto.trim();
    }
}

function deletaTarefa(button) {
    const li = button.parentElement;
    listaTarefas.removeChild(li);
}