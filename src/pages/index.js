import {listDbIcoClick} from "./listadb.js";

const DivMain = document.getElementById('DivMain');

const ListDbIco = document.getElementById('ListDbIco');
const cadDbIco = document.getElementById('cadDbIco');


ListDbIco.addEventListener('click', () => {
    
    listDbIcoClick()
})

cadDbIco.addEventListener('click', () => {
    DivMain.innerHTML = ''
})