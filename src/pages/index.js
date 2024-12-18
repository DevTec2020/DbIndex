import { homeClick } from "./home.js";
import { cadastrardbClick } from "./cadastrodb.js";
import { localizardbClick } from "./localizardb.js";
import { perfilClick } from "./perfil.js";

const DivMain = document.getElementById('DivMain');

const homeIco = document.getElementById('homeIco');
const cadastrodbIco = document.getElementById('cadastrodbIco');
const localizardbIco = document.getElementById('localizardbIco');
const perfilIco = document.getElementById('perfilIco');
const sairIco = document.getElementById('sairIco');


homeIco.addEventListener('click', () => {
    DivMain.innerHTML = ''
    homeClick()
})

cadastrodbIco.addEventListener('click', () => {
    DivMain.innerHTML = ''
    cadastrardbClick()
    
})

localizardbIco.addEventListener('click', () => {
    localizardbClick()
})

perfilIco.addEventListener('click', () => {
    DivMain.innerHTML = ''
    perfilClick()
})

sairIco.addEventListener('click', () => {
    confirm("Realmente deseja sair do sistema ?")
    
})