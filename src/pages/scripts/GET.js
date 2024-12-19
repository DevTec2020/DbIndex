// Listando dados do json para a planilha

export function getDados(){
    let bodyTable = document.querySelector("#bodyTable")

        // Acessando o Json com o fetch
        fetch('./src/data/db.json')
        .then((response) => response.json())
        .then((dados) => {
          // Percorre o array do json e cria os li
          dados.restores.forEach((restore) => {
            bodyTable.innerHTML += `
            <tr class="hover:bg-gray-200 hover:cursor-default">
              <th><input type="checkbox"></th>
              <td>${restore.data}</td>
              <td>${restore.chamado}</td>
              <td>${restore.servidor}</td>
              <td>${restore.banco}</td>              
              <td>${restore.solicitante}</td>
              <td>${restore.podeExcluir}</td>
              <td>${restore.status}</td>
            </tr>
            `
          })
        })
        .catch((error) => {
          console.log("Erro ao carregar os dados:", error)
        })
}