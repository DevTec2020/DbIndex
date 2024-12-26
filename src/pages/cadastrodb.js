export function cadastrardbClick() {
    const DivMain = document.getElementById('DivMain');
    

    DivMain.innerHTML = `
      <div class="flex justify-center">
        <form>
          <div class="flex flex-wrap gap-2 justify-center">
            <div class="w-full flex justify-center gap-4 mb-10">
              <svg class="w-10 h-10 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
              <h1 class="text-4xl">Cadastrar Banco Restaurado</h1>
            </div>

            <div class="md:w-2/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Data
              </label>
              <input id="inputData" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-red-500 focus:bg-white" type="date">
            </div>
  
            <div class="md:w-2/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Chamado
              </label>
              <input id="inputChamado" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-red-500 focus:bg-white" type="text" required>
            </div>

            <div class="md:w-2/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Solicitante
              </label>
              <input id="inputSolicitante" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-red-500 focus:bg-white" type="text" required>
            </div>
            
          </div>


          <div class="flex flex-wrap gap-2 justify-center">
            <div class="md:w-1/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Servidor SQL
              </label>
              <input id="inputServidorSql" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-red-500 focus:bg-white" type="text" required>
            </div>
  
            <div class="md:w-1/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Caminho do Banco
              </label>
              <input id="inputBanco" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-red-500 focus:bg-white" type="text" required>
            </div>
          </div>

  
          <div class="flex flex-wrap gap-2 justify-center">
            <div class="md:w-1/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Validade exclusão
              </label>
              <select id="validaExclusão" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-red-500 focus:bg-white" type="text" required>
                <option selected>Selecione</option>
                <option value="15">15 dias</option>
                <option value="30">30 dias</option>
              </select>
            </div>
  
            <div class="md:w-1/4">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Pode excluir?
              </label>
              <select id="podeExcluir" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-red-500 focus:bg-white" type="text" required>
                <option selected>Selecione</option>
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </select>
            </div>
          </div>
  
          <div class="flex mt-5 justify-center">
            <button class="text-white bg-red-600 p-3 rounded md:w-2/4">Enviar</button>
          </div>
        </form>
      </div>
      `


      document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
      
        // coleta os valores digitados no form
        const data = document.querySelector('#inputData').value;
        const chamado = document.querySelector('#inputChamado').value;
        const solicitante = document.querySelector('#inputSolicitante').value;
        const servidor = document.querySelector('#inputServidorSql').value;
        const banco = document.querySelector('#inputBanco').value;
        const validadeExclusao = document.querySelector("#validaExclusão").value;
        const podeExcluir = document.querySelector("#podeExcluir").value;
      
        // Cria um objeto com os dados do formulário
        fetch('./src/data/db.json').restores.push({
          "data": data,
          "chamado": chamado,
          "servidor": servidor,
          "banco": banco,
          "solicitante": solicitante,
          "validadeExclusao": validadeExclusao,
          "podeExcluir": podeExcluir,
          "status": "Ativo",
        });

      
        console.log(novoRegistro)

        

        // Limpa o formulário
        document.querySelector("form").reset();
        
      });
      

}