export function localizardbClick() {
    const DivMain = document.getElementById('DivMain');

    DivMain.innerHTML = `
        <!-- cabeçalho da tela--> 
      <div class="mb-10 flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold text-slate-800">Lista de bancos</h3>
          <p class="text-slate-500">Relação de bancos para consulta</p>
        </div>
        <div class="h-9 flex items-center gap-3 px-3 bg-red-600 text-white rounded-lg cursor-pointer">
          <span class="font-bold">Ações</span>
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
        </svg>
        </div>
        
      </div>

      <!-- Form de busca-->
       <div class="flex mt-5">
          <form class="flex w-full border rounded-md shadow">
            <img class="mx-3" src="./src/assets/Icone-search.svg" alt="" srcset="" />
            <input class="h-10 w-full focus:outline-none" type="text" placeholder="Procurar por chamado"/>
          </form>
      </div>

      <!-- tabela de dados-->
      <div class="mt-5 shadow-md rounded-lg">
        <table class="w-full text-center">
          <thead class="bg-gray-100 font-semibold">
            <tr>
              <td><input class=" rounded" type="checkbox"></td>
              <td>Data</td>
              <td>Chamado</td>
              <td>Servidor</td>
              <td>Banco</td>
              <td>Solicitante</td>
              <td>Pode Excluir?</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody id="bodyTable">
            
          </tbody>
        </table>
      </div>
    ` 
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


