export function localizardbClick() {
    const DivMain = document.getElementById('DivMain');

    DivMain.innerHTML = `
        <!-- cabeçalho da tela--> 
      <div class="mb-10">
        <h3 class="text-lg font-semibold text-slate-800">Lista de bancos</h3>
        <p class="text-slate-500">Relação de bancos para consulta</p>
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
          <tbody>
            <tr>
              <th><input type="checkbox"></th>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
            <tr>
              <th><input type="checkbox"></th>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
            <tr>
              <th><input type="checkbox"></th>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
          </tbody>
        </table>
      </div>
    ` 
}


