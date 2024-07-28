const btn_search_side= document.getElementById('btn-search-side')
const container_main = document.getElementById('main')

export function TelaHome(){
    container_main.innerHTML=`

                <div class="container mt-5 ">
                    <h1 class="mb-4">DbIndex - Sua Central de Consultas de Bancos Restaurados</h1>
                    <p>O <strong>DbIndex</strong> é uma plataforma projetada para facilitar a consulta e gerenciamento de dados de banco de dados da equipe de tecnologia.</p>
            
                    <h2 class="mt-4">Principais Funcionalidades:</h2>
                    <ul>
                        <li><strong>Navegue</strong></li> 
                        <li><strong>Consulte</strong></li>                        
                        <li><strong>Adicione acessos</strong></li>
                        <li><strong>Modifique Caminhos</strong></li>
                        <li><strong>Exclua registros</strong></li>
                    </ul>
            
                    <p>Com o <strong>DbIndex</strong>, você tem o poder de explorar e manipular seus dados de banco de dados com a máxima eficiência.  plataforma proporciona uma experiência de usuário fluida e profissional, tornando a administração de dados mais simples e produtiva.</p>
                    <p>Experimente o <strong>DbIndex</strong> e transforme a forma como você interage com seus dados!</p>
                    <p>&copy; Copyright 2024 Leonardo da Silva Batista. Todos os direitos reservados.</p>
                </div>
          
    
    
    `
}
