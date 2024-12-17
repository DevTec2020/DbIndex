export function localizardbClick() {
    const DivMain = document.getElementById('DivMain');

    DivMain.innerHTML = `
        <!-- cabeçalho da tela--> 
        <div>
          <h3 class="text-lg font-semibold text-slate-800">Lista de bancos</h3>
          <p class="text-slate-500">Relação de bancos para consulta</p>
        </div>

        <!-- Form de busca-->
         <div class="flex mt-5 justify-end">
            <form class="flex w-80 shadow">
              <img class="mx-3" src="./src/assets/Icone-search.svg" alt="" srcset="" />
              <input class="h-12 w-full text-center" type="text" placeholder="Digite o número do chamado "/>
            </form>
        </div>

        <!-- tabela de dados-->
        <div class="mt-5 shadow-md rounded-lg">
          <table class="w-full text-center">
            <thead class="bg-gray-300">
              <tr>
                <th>#</th>
                <th>Chamado</th>
                <th>Solicitante</th>
                <th>Caminho do Banco</th>
                <th>Pode Excluir?</th>
                <th>Data</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
              </tr>
              <tr>
                <th>2</th>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
              </tr>
              <tr>
                <th>3</th>
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


