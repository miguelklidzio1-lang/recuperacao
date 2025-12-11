let lista = [];
let id = 1;

function add() {
    let input = document.getElementById("inputItem");
    let conteudo = input.value;

    if (conteudo.trim() === "") {
        return;
    }

    lista.push({ id: id, nome: conteudo });
    id++;

    mostrar();
    input.value = "";
}

function mostrar() {
    let ul = document.getElementById("compras");
    ul.innerHTML = "";

    for (let item of lista) {
        let li = document.createElement("li");
        li.className = "listaItem";

        let span = document.createElement("span");
        span.innerText = item.nome;

        let edit = document.createElement("button");
        edit.innerText = "Editar";
        edit.className = "edit";

        edit.onclick = function () {
            let input2 = document.createElement("input");
            input2.value = item.nome;
            input2.className = "inputEdit";

            li.replaceChild(input2, span);
                mostrar();
            };
        };

        let exc = document.createElement("button");
        exc.innerText = "Excluir";
        exc.className = "exc";

        exc.onclick = function () {
            lista = lista.filter(x => x.id !== item.id);
            mostrar();
        };

        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(exc);
        ul.appendChild(li);
    }
}

