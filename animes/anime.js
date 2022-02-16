document.cookie = "googtrans=/en/pt; expires=Thu, 18 Dec 2220 12:00:00 UTC"


function minha_list(x){ 
  
    var a = x

    var lista = localStorage.getItem('lista')



    if(lista != null){
        lista = lista.split(',')
        var anime_id = false
        for (var i = 0; i < lista.length; i++){
                if(lista[i] == a){
                    c
                    anime_id = true
        }
        }
        if(anime_id == false){
        lista.join('')
        localStorage.setItem('lista', `${lista},${a}`)
        
    }
                
    }
    else{
    localStorage.setItem('lista', `${a}`)
    }
}
const url = window.location.search
const urlParametro = new URLSearchParams(url);
var id_ = urlParametro.get('id')







if(true){
    let search = window.document.getElementById('pes')
    let result = window.document.getElementById('result')
    
    search.addEventListener('keydown', e =>{
        result.innerHTML = ''
       
        if (e.keyCode == 13){
            
            fetch(`https://api.jikan.moe/v3/search/anime?q=${search.value}`).then((searc) => searc.json()).then((data_search) =>{
               
                for (let  i = 0; i < data_search.results.length; i++){
                    let img = data_search.results[i].image_url
                    result.innerHTML += `<a href="/animes/?id=${data_search.results[i].mal_id}&api=1" ><img src="${img}" alt=""></a>`
                    if(i > 7){
                        break
                    }
                }
            })
            
        }
    })

}

if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-pesquisa')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-pesquisa')
    let conteudo = window.document.querySelector('#result')
    let px = 0

    arrow_circle_lef.addEventListener('click', function(){
        
      
        
        if (px == 0 )
        {
            
            conteudo.style.right = `${0}px`
        }
        else{
            conteudo.style.right = `${px - 150 }px`
           
            px -= 150
        }
        
        
    })

    arrow_circle_right.addEventListener('click', function(){
        conteudo.classList.add('active')
        if (conteudo.clientWidth   >= px + window.innerWidth  - 150){
                    
            conteudo.style.right = `${px + 150}px`
            px += 150
        }
                
        })

}




if(true){
    let search = window.document.getElementById('pes')
    let lupa = window.document.getElementById('lupa1')
    let result = window.document.getElementById('result')
    
    lupa.addEventListener('click', function(){
        result.innerHTML = ''
        
        if (true){
            
            fetch(`https://api.jikan.moe/v3/search/anime?q=${search.value}`).then((searc) => searc.json()).then((data_search) =>{
            
                for (var i = 0; i < data_search.results.length; i++){
                    var img = data_search.results[i].image_url
                    result.innerHTML += `<a href="/animes/?id=${data_search.results[i].mal_id}&api=1"><img src="${img}" alt=""></a>`
                    if(i > 7){
                        break
                    }
                }
            })
            
        }
    })

}




























var lupa = window.document.getElementById('lupa')
lupa.addEventListener('click', function(){
         var pesquisa = window.document.getElementById('pesquisa')
         pesquisa.classList.toggle('active')
     })



var page = window.document.getElementById("conteudo")
var prin = window.document.getElementById('title-img')
var sobre = window.document.getElementById('sobre')
var btn = window.document.getElementById('buttons')
var detalhes = window.document.getElementById('detalhes')

if(true){
    async function apijikan(){
        document.querySelector('.generos_').innerHTML +=  `<h1>generos</h1>`
        var ep_title = fetch(`https://api.jikan.moe/v3/anime/${id_}`).then((rese) => rese.json()).then((date)  => {
        
          
    
                
                for(var i = 0; i < date.genres.length; i ++){
                    document.querySelector('.generos_').innerHTML += `<p>${date.genres[i].name}<p>`
                }
              
                var  title_principal  =  date.title
                var img_pricipal = date.image_url
                document.title = title_principal
                prin.innerHTML += `<div class="G"> <img src="${img_pricipal}" alt=""><h1 class="title">${title_principal}</h1></div>`
               
                var N_EPISODIOS = date.episodes
                if (N_EPISODIOS == null){
                    N_EPISODIOS = 'indisponível'
                }
                detalhes.innerHTML +=   `<div id="N_EP"> <h1>Episodios</h1>  <h1 class="ep">${N_EPISODIOS}</h1></div>`
                prin.innerHTML += `<h1 class="pontos"> ★★★ ${date.score} pontos</h1>`
                var synopsis = date.synopsis
                if (synopsis.length > 500)
                    synopsis = synopsis.slice(0, 500)
            
                sobre.innerHTML += `<div class="syno" > <p>${synopsis}</p> </div>`
            
        
         
           
           
                return {N_EPISODIOS, title_principal, img_pricipal}
            })
        return ep_title
           
    }
    async function get_gif(title_principal){
        try{
            fetch(`https://api-python-anime.herokuapp.com/anime/${title_principal}`).then(js => js.json()).then(data_gif => {
                
                var distaque  = window.document.getElementById('distaque')
                distaque.style.backgroundImage = `url(${data_gif.link[0]})`
            })
        return 'ok '}
        catch{
            return 'erro'
        }
       
    }
    async function characters(){
            fetch(`https://api.jikan.moe/v3/anime/${id_}/characters_staff`).then(datanews => datanews.json()).then(data_perso => {

                
               
                var i_ = 4
         
                for (var i = 0; i < i_; i++){
                    var img =  data_perso.characters[i].image_url
                    var nome_perso =  data_perso.characters[i].name
                    var typo =  data_perso.characters[i].role
                    var voice_name = data_perso.characters[i].voice_actors[0].name
                    var img_voice = data_perso.characters[i].voice_actors[0].image_url
                    var lig = data_perso.characters[i].voice_actors[0].language
                    var div_per = document.querySelector('#Dubladores')
                    div_per.innerHTML+=
                                ` <div class="voice_dub">
                                <div class="Perso">
                                    <div class="info_voice">
                                        <h1>${nome_perso}</h1>
                                        <p>${typo}</p>

                                    </div>
                                    <img src="${img}" alt="">
                                </div>
                                <div class="dub">
                                    <div class="info_dub">
                                        <h1>${voice_name}</h1>
                                        <p>${lig}</p>
                                    </div>
                                    <img src="${img_voice}" alt="">
                                </div>
                                </div>`
                }
            })
            
        }
    async function get_img_ep(N_EPISODIOS, title_principal){
         
            
                var a = fetch(`https://api-python-anime.herokuapp.com/get_img_ep/${id_}/anime/${N_EPISODIOS}`).then(data_ep => data_ep.json()).then(data_ep  => {
                if(data_ep.data_ep.img_ep.length >  0 && data_ep.data_ep.syno.length > 0){
                   
                    for (var n = 0; n < data_ep.data_ep.img_ep.length; n++){
                        
                        
                        
                        try{
                        var anime_img =  data_ep.data_ep.img_ep[n]
                        }
                        catch{
                            anime_img = 'https://img1.ak.crunchyroll.com/i/spire1-tmb/0bcaa34d54ffaaf92debcc5f84ad7d9a1521938730_large.jpg'
                        }
                        

                        
                        var anime_number = data_ep.data_ep.title[n]
                        if (anime_number == null){
                            anime_number = 'INDINIVEL'
                        }
                        try{
                           anime_number =  anime_number.split(' ')
                           anime_number = anime_number[1]
                        }
                        catch{
                            console.log('a')
                        }
                        var title_ep = data_ep.data_ep.syno[n]
                    
                        function geraStringAleatoria(tamanho) {
                                var stringAleatoria = '';
                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                for (var i = 0; i < tamanho; i++) {
                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                }
                                return stringAleatoria
                        }
                        const id1 = geraStringAleatoria(8)
                        function geraStringAleatoria(tamanho) {
                                var stringAleatoria = '';
                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                for (var i = 0; i < tamanho; i++) {
                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                }
                                return stringAleatoria
                        }
                        const id = geraStringAleatoria(8)
                        function geraStringAleatoria(tamanho) {
                                var stringAleatoria = '';
                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                for (var i = 0; i < tamanho; i++) {
                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                }
                                return stringAleatoria
                        }
                        var clas = geraStringAleatoria(8)
                    
                        var page = window.document.getElementById("conteudo")
                        
                        page.innerHTML += `<div class="img-content"> <div class="title-ep-img"><a onclick="get_title()" href="/animes/videos/?name=${title_principal}&ep=${anime_number}&id=${id_}&api=2&title=${title_ep}" class="cont"> <div class="bnd"> </div><div class="img"><img src="${anime_img}" alt=""></div></a> <div class="number-ep"> <h1>${title_ep}</h1><p>Episodio ${anime_number}</p></div></div></div>`
                        
                        
                    
                        
                    
                    
                    
                    
                        
                    }
                   
                    
                    var loader = window.document.querySelector('#loader').classList.add('active')
                    var a  = document.querySelector('#lista-toda')
                    a.style.display = "inline";

                    var page_ = N_EPISODIOS 
                    window.addEventListener('scroll', () =>{
                        const scroll = document.documentElement.scrollHeight - window.innerHeight;
                        const wincro = window.scrollY;
                       
                        if(Math.ceil(wincro) === scroll){
                           
                            page_ -= 40
                            if(page_ > 0){
                                
                                
                                if(window.document.getElementById("loader_ep") == null){
                                    var page = window.document.getElementById("conteudo")
                                        page.innerHTML += ` <div id="loader_ep">
                                                    <div class="loader_ep"></div>
                                                </div>`
                                    
                                }
                                else{
                                 
                                    console.log('erro')
                                }
                               
                               
                                
                                fetch(`https://api-python-anime.herokuapp.com//get_img_ep/${id_}/anime/${page_}`).then((rest) => rest.json()).then(data_epp =>{
                                    
                                   
                                    
                                  
                                    for (var n = 0; n < data_epp.data_ep.img_ep.length; n++){
                            
                            
                                    
                                        try{
                                        var anime_img = data_epp.data_ep.img_ep[n]
                                        }
                                        catch{
                                            anime_img = img_pricipal
                                        }
                                        
                        
                                        
                                        var anime_number = data_epp.data_ep.title[n]
                                        if (anime_number == null){
                                            anime_number = 'INDINIVEL'
                                        }
                                        var title_ep = data_epp.data_ep.syno[n]
                                    
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        const id1 = geraStringAleatoria(8)
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        const id = geraStringAleatoria(8)
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        var clas = geraStringAleatoria(8)
                                        var page = window.document.getElementById("conteudo")
                        
                                        
                                        page.innerHTML += `<div class="img-content"> <div class="title-ep-img"><a href="/animes/videos/?name=${title_principal}&ep=${String(anime_number).split(' ')[1]}&id=${id_}&api=2" class="cont"> <div class="bnd"> </div><div class="img"><img src="${anime_img}" alt=""></div></a> <div class="number-ep"> <h1>${title_ep}</h1><p>${anime_number}</p></div></div></div>`
                                        
                                        
                                    
                                        
                                    
                                    
                                    
                                    
                                        
                                    }
                                   
                                    window.document.getElementById("loader_ep").remove()
                                    
                                   
                                })
                                
                        }
                        
                    }} )
                   
                   return 'ok' }
                   else{
                       return 'erro'

                   }


            }) 
            return a
        }
    async function episodes_get_erro(img_pricipal, title_principal){
                    fetch(`https://api.jikan.moe/v3/anime/${id_}/episodes`).then((res) => res.json()).then((data) => {
                        for (var nu = 0; nu < data.episodes.length; nu++){
                            
                            
                            
                            try{
                            var anime_img = data.data[nu].attributes.thumbnail.original
                            }
                            catch{
                                anime_img = img_pricipal
                            }
                            

                            
                            var anime_number = data.episodes[nu].episode_id
                            if (anime_number == null){
                                anime_number = 'INDINIVEL'
                            }
                            var title_ep = data.episodes[nu].title
                        
                            function geraStringAleatoria(tamanho) {
                                    var stringAleatoria = '';
                                    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                    for (var i = 0; i < tamanho; i++) {
                                        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                    }
                                    return stringAleatoria
                            }
                            const id1 = geraStringAleatoria(8)
                            function geraStringAleatoria(tamanho) {
                                    var stringAleatoria = '';
                                    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                    for (var i = 0; i < tamanho; i++) {
                                        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                    }
                                    return stringAleatoria
                            }
                            const id = geraStringAleatoria(8)
                            function geraStringAleatoria(tamanho) {
                                    var stringAleatoria = '';
                                    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                    for (var i = 0; i < tamanho; i++) {
                                        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                    }
                                    return stringAleatoria
                            }
                            var clas = geraStringAleatoria(8)
                        
                            var page = window.document.getElementById("conteudo")
                            
                            page.innerHTML += `<div class="img-content"> <div class="title-ep-img"><a onclick="get_title()" href="/animes/videos/?name=${title_principal}&ep=${anime_number}&id=${id_}&api=1&page=1" class="cont"> <div class="bnd"> </div><div class="img"><img src="${anime_img}" alt=""></div></a> <div class="number-ep"> <h1>${title_ep}</h1><p>episodio ${anime_number}</p></div></div></div>`
                            
                            
                        
                            
                        
                        
                        
                        
                            
                        }
                        var loader = window.document.querySelector('#loader').classList.add('active')
                        var a  = document.querySelector('#lista-toda')
                        a.style.display = "inline";




                        window.addEventListener('scroll', () =>{
                            const scroll = document.documentElement.scrollHeight - window.innerHeight;
                            const wincro = window.scrollY;
                        
                            if(Math.ceil(wincro) === scroll){
                                
                                
                                fetch(`https://api.jikan.moe/v3/anime/${id_}/episodes/${c + 1}`).then((rest) => rest.json()).then((data) =>{
                                    if(window.document.getElementById("loader_ep") == null){
                                        var page = window.document.getElementById("conteudo")
                                            page.innerHTML += ` <div id="loader_ep">
                                                        <div class="loader_ep"></div>
                                                    </div>`
                                        
                                    }
                                    else{
                                    
                                        console.log('ta na tela')
                                    }
                                    c += 1
                                    for (var nu = 0; nu < data.episodes.length; nu++){
                            
                            
                            
                                        try{
                                        var anime_img = data.data[nu].attributes.thumbnail.original
                                        }
                                        catch{
                                            anime_img = img_pricipal
                                        }
                                        
                        
                                        
                                        var anime_number = data.episodes[nu].episode_id
                                        if (anime_number == null){
                                            anime_number = 'INDINIVEL'
                                        }
                                        var title_ep = data.episodes[nu].title
                                    
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        const id1 = geraStringAleatoria(8)
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        const id = geraStringAleatoria(8)
                                        function geraStringAleatoria(tamanho) {
                                                var stringAleatoria = '';
                                                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                for (var i = 0; i < tamanho; i++) {
                                                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                                                }
                                                return stringAleatoria
                                        }
                                        var clas = geraStringAleatoria(8)
                                    
                        
                                        var page = window.document.getElementById("conteudo")
                                        page.innerHTML += `<div class="img-content"> <div class="title-ep-img"><a href="/animes/videos/?name=${title_principal}&ep=${anime_number}&id=${id_}&api=1&page=${c}" class="cont"> <div class="bnd"> </div><div class="img"><img src="${anime_img}" alt=""></div></a> <div class="number-ep"> <h1>${title_ep}</h1><p>episodio ${anime_number}</p></div></div></div>`
                                        
                                        
                                    
                                        
                                    
                                    
                                    
                                    
                                        
                                    }
                                    window.document.getElementById("loader_ep").remove()

                                
                                })
                            }
                            
                        } )
                  } ) }
           
                 

    async function get_page(){
        var ep = await apijikan()
        await  characters()
        await get_gif(ep.title_principal)
        var get_img = await get_img_ep(ep.N_EPISODIOS, ep.title_principal)
       
        if(get_img  != 'ok'){
            await episodes_get_erro(ep.img_pricipal, ep.title_principal)
        }
       
   
    } get_page();
}
     
            
           
           
        
   

   
   
 



