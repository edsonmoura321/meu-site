document.cookie = "googtrans=/en/pt; expires=Thu, 18 Dec 2220 12:00:00 UTC"
function minha_list(x){ 
  
    var a = x

    var lista = localStorage.getItem('lista')



    if(lista != null){
        lista = lista.split(',')
        var anime_id = false
        for (var i = 0; i < lista.length; i++){
                if(lista[i] == a){
                  
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


document.body.style.overflow = 'hidden';
// popular
if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-popular')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-popular')
    let conteudo = window.document.querySelector('#conteudo')

    let px = 0
    arrow_circle_lef.addEventListener('click', function(){
      
        conteudo.classList.add('active')
        
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
    
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150 + 150}px`
        px += 150
    }
            
    })

    
} 
        


//acation
if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-actio')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-actio')
    let conteudo = window.document.querySelector('#actio')
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
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150}px`
        px += 150
    }
            
    })

}
//aventura
if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-aventura')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-aventura')
    let conteudo = window.document.querySelector('#aventura')
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
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150}px`
        px += 150
    }
            
    })

}
//Comedia
if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-Comedia')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-Comedia')
    let conteudo = window.document.querySelector('#Comedia')
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
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150}px`
        px += 150
    }
            
    })

}
if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-Drama')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-Drama')
    let conteudo = window.document.querySelector('#Drama')
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
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150}px`
        px += 150
    }
            
    })

}




if(true){
    let arrow_circle_right = window.document.querySelector('.arrow_circle_right-Romance')
    let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-Romance')
    let conteudo = window.document.querySelector('#Romance')
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
    if (conteudo.clientWidth  - window.innerWidth > px){
                
        conteudo.style.right = `${px + 150}px`
        px += 150
    }
            
    })

}




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
                    if(i > 5){
                        break
                    }
                }
            })
            
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
                    if(i > 5){
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
var url_favoritos = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
async function favorito(data){
    
   
    var rando = Math.floor(Math.random() * (10 - 1)) + 1    
    fetch(`https://api.jikan.moe/v3/anime/${data.top[rando].mal_id}`).then((rese) => rese.json()).then((date) => {
  
            prin.innerHTML += `<div class="G"> <img src="${date.image_url}" alt=""><h1 class="title">${date.title}</h1></div>`
           

            
            detalhes.innerHTML +=   `<div id="N_EP"> <h1>Episodios</h1>  <h1 class="ep">${date.episodes}</h1></div>`
            prin.innerHTML += `<h1 class="pontos"> ★★★ ${date.score} pontos</h1>`
            var synopsis = date.synopsis
            if (synopsis.length > 500){
                synopsis = synopsis.slice(0, 500)
            }
         
            sobre.innerHTML += `<div class="syno" > <p classa"notranslate">${synopsis}</p> </div>`
        
             fetch(`https://api-python-anime.herokuapp.com/anime/${date.title}`).then(js => js.json()).then(data_gif => {
               
                var distaque  = window.document.getElementById('distaque')
                distaque.style.backgroundImage = `url(${data_gif.link[0]})`
            })  
                    
            
            
            
            btn.innerHTML += `<a href="animes/?id=${date.mal_id}" class="link"><div><button id="bnd"><span   class="material-icons">play_arrow</span><h1>Assistir</h1></button></div></a>`
           
            /*var genero = window.document.getElementById('genero')
            for( var genre = 0; genre < date.genres.length; genre++){
                
                genero.innerHTML += `<p>${date.genres[genre].name}</p>`
            }
        })  */
            })



        
       
       
       
       
        }
async function bypopularity(){      
    var data = fetch(url_favoritos).then((res) => res.json()).then((data) => {
        var data_ = data
        for (var nu = 0; nu < data.top.length; nu++){
            
            
            if(nu > 25){
                break
            }
          
            var title_  = data.top[nu].title
            var numero_ep_ = data.top[nu].episodes
            var anime_img = data.top[nu].image_url
            var anime_mainid = data.top[nu].mal_id
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
                    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    for (var i = 0; i < tamanho; i++) {
                        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                    }
                    return stringAleatoria
            }
            var clas = geraStringAleatoria(8)
            function geraStringAleatoria(tamanho) {
                var stringAleatoria = '';
                var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                for (var i = 0; i < tamanho; i++) {
                    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                }
                return stringAleatoria
            }
            var clas_ = geraStringAleatoria(8)
        
           
            page.innerHTML += `<div class="img-content">  <a  class="${clas}"href="animes/?id=${anime_mainid}"  onmouseover="info(this)"  onmouseout="saiu(this)">  <div id="info_anime_" class="${clas_}"><p>${title_}</p> <p  style="margin-top: 0;">episodios ${numero_ep_}</p></div> <img  src="${anime_img}" alt=""></a></div>`
            
        }
       
        return data_
    })
    return data
    

}
function saiu(x){
        clasname = x.children[0].classList[0]
        clasname =  document.querySelector(`.${clasname}`)
        clasname.style.backgroundColor = '#111'
        clasname.style.display = 'none'
    

}
function info(x){
        clasname = x.children[0].classList[0]
        clasname =  document.querySelector(`.${clasname}`)
        img__ = x.children[1]


        
      
        clasname.style.display = "flex";
        clasname.style.backgroundColor = '#111'
        clasname.style.width  = "180px";
        clasname.style.height = "150px"
        clasname.style.position = "absolute"
     
        clasname.style.marginLeft = `${img__.clientWidth + 30}px`
        clasname.style.opacity = "0.98"
        
        clasname.style.top = '23px'
        clasname.style.zIndex  = '1'
        clasname.style.flexDirection = "column";
        clasname.style.marginBottom = '0' 
}   
async function genero(){
    var nub_genro = ['1' , '2', '4', '8', '22']
    var  div_genero = ['actio', 'aventura', 'Comedia', 'Drama', 'Romance']
    for (var n = 0; n < nub_genro.length; n++){
        await fetch(`https://api.jikan.moe/v3/genre/anime/${nub_genro[n]}/1`).then((genero) => genero.json()).then((genr) => {
                var drama = window.document.querySelector(`#${div_genero[n]}`)
            
                for (var i = 0; i <genr.anime.length - 75; i++){  
                    let img = genr.anime[i].image_url
                    var id = genr.anime[i].mal_id
                    var title =  genr.anime[i].title
                    var episodes__ =  genr.anime[i].episodes
                    function geraStringAleatoria(tamanho) {
                        var stringAleatoria = '';
                        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                        for (var i = 0; i < tamanho; i++) {
                            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                        }
                        return stringAleatoria
                     }
                    var clas = geraStringAleatoria(8)
                    function geraStringAleatoria(tamanho) {
                        var stringAleatoria = '';
                        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                        for (var i = 0; i < tamanho; i++) {
                            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                        }
                        return stringAleatoria
                     }
                    var clas_ = geraStringAleatoria(8)
                    
                    drama.innerHTML += `<div class="img-content">  <a  class="${clas}"href="animes/?id=${id}"  onmouseover="info(this)"  onmouseout="saiu(this)">  <div id="info_anime_" class="${clas_}"><p>${title}</p> <p  style="margin-top: 0;">episodios ${episodes__}</p></div> <img  src="${img}" alt=""></a></div>`
                }
              
            
            })
        }
      
        var loader = window.document.querySelector('#loader').classList.add('active')
      
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        document.querySelector('#lista-toda').style.display = "inline";
        

}


async function get_page(){
    const by = await bypopularity()
    await  favorito(by)
    await genero()
}
get_page()




