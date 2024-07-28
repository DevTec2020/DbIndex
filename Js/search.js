const btn_search_side= document.getElementById('btn-search-side')
const container_main = document.getElementById('main')

export function SearchDB(){
    container_main.innerHTML=`
                    <div class="container-fluid">
                <h2><strong>Consultar Banco</strong></h2>
                <div class="form-group ps-4 div-filtro">
                    <label for="">Buscar Por:</label><br>
                    <select class="form-select-sm" id="">
                        <option value="">Selecione</option>
                        <option value="">Chamado</option>
                        <option value="">Servidor</option>
                        <option value="">Cliente</option>
                        <option value="">Solicitante</option>

                    </select>
                    <input type="text" class="form-control-sm" required>
                    <span><i class="bi bi-search btn-pointer fs-4"></i></span>
                </div><br>
                <div class="form-group ps-4 div-dados">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Solicitante</th>
                                <th scope="col">Chamado</th>
                                <th scope="col">Servidor</th>
                                <th scope="col">Banco</th>
                                <th scope="col">Data</th>
                                <th scope="col">Pode Excluir?</th>
                                <th scope="col">Nova Data</th>
                                <th scope="col">Validade</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">1</th>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                            </tr>
                            <tr>
                                <th scope="col">2</th>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                                <td>teste</td>
                            </tr>
                            <tr>
                                <th scope="col">3</th>
                                <td>teste</td>
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
            </div>
    
    
    `
}
