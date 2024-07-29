import {SearchDB} from './search.js'
import {TelaHome} from './home.js'
import {TelaCadastroDb} from './cadastroDb.js'
import {TelaUser} from './user.js'

const btn_canvas_header = document.getElementById('btn-canvas-header')
const btn_sair_header = document.getElementById('btn-sair-header')
const tela_home_side = document.getElementById('btn-home-side')
const tela_search_side= document.getElementById('btn-search-side')
const tela_cadastro_side= document.getElementById('btn-addDb-side')
const tela_user_side= document.getElementById('btn-person-side')
const container_main = document.getElementById('main')


    btn_sair_header.addEventListener('click',()=>{
        alert('Pagina de login está em desenvolvimento')
    })

    btn_canvas_header.addEventListener('click',()=>{
        alert('Offcanvas está em desenvolvimento')
    })

    tela_search_side.addEventListener('click',()=>{
        container_main.innerHTML='';
        SearchDB()
    })

    tela_home_side.addEventListener('click',()=>{
        container_main.innerHTML='';
        TelaHome()
    })
    
    tela_cadastro_side.addEventListener('click',()=>{
        container_main.innerHTML='';
        TelaCadastroDb()
    })
    
    tela_user_side.addEventListener('click',()=>{
        container_main.innerHTML='';
        TelaUser()
    })

