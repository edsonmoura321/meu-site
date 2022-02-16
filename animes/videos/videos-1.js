    
    const url = window.location.search
    const urlParametro = new URLSearchParams(url);
    var  nome = urlParametro.get('name')
    var  ep = urlParametro.get('ep')
 
    
    var tilte_epp = urlParametro.get('title')

    var id = urlParametro.get('id')
    var api = urlParametro.get('api')

    var N_EPISODIOS = urlParametro.get('')

  















   40
    window.addEventListener('mousedown',  function(x){
        if(x.which == 3){
            window.location.href = '/'
        }

    })

    if(true){
        let arrow_circle_right = window.document.querySelector('.arrow_circle_right-pesquisa')
        let arrow_circle_lef = window.document.querySelector('.arrow_circle_lef-pesquisa')
        let conteudo = window.document.querySelector('.epp')
        let px = 0
    
        arrow_circle_lef.addEventListener('click', function(){
            
           
          
            
            if (px == 0 )
            {
                
                conteudo.style.right = `${0}px`
            }
            else{
                conteudo.style.right = `${px - 250 }px`
              
                px -= 250
            }
            
            
        })
        
        arrow_circle_right.addEventListener('click', function(){
          
            if (conteudo.clientWidth   >= px + window.innerWidth){
             
                        
                conteudo.style.right = `${px + 250}px`
                px += 250
            }
          
                
        })
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Take the user to a different screen here.
        var a = document.querySelector('.controle')
        a.style.display = 'none'
        var v  = document.querySelector('.video')
        v.setAttribute('controls', 'a')

    }   

    var video = document.querySelector('.video');
    var  btn = document.getElementById('bnd');
    var bar =  document.querySelector('.bar')
    var full = document.querySelector('#full')
    var r = true
   
    var btn_menu = document.querySelector('#menu-btn')

    var  conteudo =  document.querySelector('#conteudo')
    btn_menu.addEventListener('click', function(){
        var menu = document.querySelector('#colun-menu')
        menu.classList.toggle('active')
        var v = document.querySelector('#result-ep')
        if(v.classList.contains('active'))
            v.classList.remove('active')
        
        
    })
    
    document.querySelector('#playvi').addEventListener('click', function(){
   
        document.querySelector('#classplay').classList.toggle('active')
        var p =  window.document.getElementById('c-video')
        p.classList.toggle('active')
        document.querySelector('#colun-menu').classList.toggle('active')
   
       
        btn.className = 'pause'
        video.play()
      
    })
    var z = 0
    conteudo.addEventListener('mousemove', function(x){
      
       
        setTimeout(function(){
            if(z == x.pageY + x.pageX){
                document.querySelector('.controle').style.opacity = '0';
            }
           
        }, 5000)
       
        if(z != x.pageY + x.pageX){
                document.querySelector('.controle').style.opacity = '1';
        }
        z = x.pageY + x.pageX
       
        
    })
    var result_ep_btn = document.querySelector('#arrow_drop_down')
    result_ep_btn.addEventListener('click', function(){
        document.querySelector('#result-ep').classList.toggle('active')
        
        
        
    })

    var update = document.querySelector("#update")
    var restore = document.querySelector("#restore")
    restore.onclick = function(){

        video.currentTime -= 15
    }
    update.addEventListener('click', function(){
        video.currentTime +=  15
    })
    full.addEventListener('click', function(){
      
        if(r === true){
            document.querySelector('#conteudo').requestFullscreen()
          
            r = false
        }
        else{
            
            document.exitFullscreen()
            r = true
            
        }
    })
    bar.addEventListener('mouseup', function(e){
       
        var posetagem =  e.pageX * 100 / bar.clientWidth
        var  temp_video =  posetagem / 100  * video.duration 
        video.currentTime = temp_video
        var  temp = video.currentTime / video.duration;
        document.querySelector('.bar').value = temp * 100
        video.play()
      
    })
    bar.addEventListener('mousedown', function(e){
        video.pause()
       
      
    })
    function Assistir_agora(x){
        window.location.href = `/animes/videos/?name=${nome}&ep=${parseInt(ep)+1}&id=${id}&api=${api}&title=${x}`
    }
    
    var verifique = false
    function Cancelar(){
        document.querySelector('#proximo_EP').style.display = "none";
        verifique = true
        


    }
    
    video.addEventListener('timeupdate', function(){
        var  temp = video.currentTime / video.duration;
 
        var title_proximo_ep = ''
        console.log(title_proximo_ep)
        if(verifique === false){
            if (video.currentTime == video.duration){
            
                
                    document.querySelector('#proximo_EP').style.display = "inline";
               
            
               
                    var i = 8
                    setInterval(function(){
                            document.querySelector('#time_proximo_ep').innerHTML = ` <h1>Proximo Episodio em ${i}</h1>`
                            if(i == 0 && verifique == false){
                                window.location.href = `/animes/videos/?name=${nome}&ep=${parseInt(ep)+1}&id=${id}&api=${api}&title=${window.localStorage.getItem('name_e')}`
                            }
                            i-= 1
                            
                            }, 1000)
                }
            }
                    
            
            
           

            
        
        
        
       

        var tempo_agora_ = document.querySelector('.time')
        var tempo_todo_ = document.querySelector('.durantion')
        var tempo_todo =  video.duration / 60
        var tempo_agora = video.currentTime / 60

        tempo_todo = tempo_todo.toFixed(2)
        tempo_todo  = tempo_todo.split('.')
        var date = new Date(null)
        date.setMinutes(tempo_todo[0])
        date.setSeconds(tempo_todo[1])
        var result = date.toISOString().substr(11, 8)
        var min_seg = result.split(':')
        tempo_todo_.textContent = `${min_seg[1]}:${min_seg[2]}`

        tempo_agora = tempo_agora.toFixed(2)
        tempo_agora  = tempo_agora.split('.')
        var date = new Date(null)
        date.setMinutes(tempo_agora[0])
        date.setSeconds(tempo_agora[1])
        var result = date.toISOString().substr(11, 8)
        var min_seg_ = result.split(':')
        tempo_agora_.textContent = `${min_seg_[1]}:${min_seg_[2]}`
        document.querySelector('.bar').value = temp * 100




        
    });
    

    video.addEventListener('click', function(){
        document.querySelector('#classplay').classList.toggle('active')
        if (video.paused){
            var p =  window.document.getElementById('c-video')
            p.classList.toggle('active')
            document.querySelector('#colun-menu').classList.toggle('active')

            btn.className = 'pause';
            video.play()
        }
        else{
            btn.className = 'play';
            document.querySelector('#colun-menu').classList.toggle('active')

            
            var p =  window.document.getElementById('c-video')
            p.classList.toggle('active')
           
            video.pause()
        }

    })


    function play_de_video(){
        document.querySelector('#classplay').classList.toggle('active')
        if (video.paused){
            var p =  window.document.getElementById('c-video')
            document.querySelector('#colun-menu').classList.toggle('active')
            p.classList.toggle('active')
            btn.className = 'pause';
            video.play()
        }
        else{
            btn.className = 'play';
            
            var p =  window.document.getElementById('c-video')
            document.querySelector('#colun-menu').classList.toggle('active')
            p.classList.toggle('active')
           
            video.pause()

        };
    }
    btn.onclick = function(){
        play_de_video()
    };
    video.volume = 0.5
    ///volume
    var barra_volume = document.querySelector('#myvolume')
    var barra_volu = document.getElementById('myvolume')
    var a  = video.volume

    barra_volume.style.background = `linear-gradient(90deg, #44e5ff ${a * 100}%, #FFF ${a * 100}%)`
    barra_volume.addEventListener('mousemove', function(){
        var date_volume = barra_volume.value
        var video = document.querySelector('.video')
        barra_volu.style.background  = `linear-gradient(90deg, #44e5ff ${date_volume}%, #FFF ${date_volume /100}%)`
        if(date_volume == 100){
            date_volume = 1
            video.volume  =  1
            
        }
        else{
             var volume = parseFloat(`0.${date_volume}`)
             video.volume  =  volume
            
        
        
        }

        
    })
   
    if(api == 2){
      
    
        
        fetch(`https://api-python-anime.herokuapp.com/proximo_ep/${id}/anime/${parseInt(ep) + 1}`).then((res) => res.json()).then((date) =>  {
           
                   
            
                
          
         
            try{
                    var titu = tilte_epp
                 }
            catch{
                     var titu = 'indisponível'
                 }
                
            if (titu.length > 14){
                     titu = `${titu.slice(0, 14)}...`
                 }
                document.querySelector('#titulo-ep').innerHTML = `  <h1>
                        Titulo:${titu}
                </h1><p>Episódio ${ep}</p>`
           
            
          
            for (var i = 0;i < date.data_prox.title.length; i++){  
                
                        var proximo_EP = document.querySelector('#proximo_EP')
                        var tilte_ep_ = date.data_prox.title[ep]
                        var tilte_ep_ =  String(tilte_ep_)
                        if(tilte_ep_.length > 14 ){
                            tilte_ep_ = `${tilte_ep_.slice(0, 14)}...`
                            
                        } 
                        
                        for(var p =0; p < date.data_prox.title.length; p++){
                            if (date.data_prox.n[p] == ep){
                                
                            
                            window.localStorage.setItem('name_e', `${String(date.data_prox.title[ep])}`) 
                            proximo_EP.innerHTML = `<div id="time_proximo_ep">
                                                            <h1>Proximo Episodio em 8</h1>
                                                        </div>
                                                        <div class="pai_ep">
                                                            <div class="_img_">
                                                                <img src="${date.data_prox.img[ep]}" alt="">
                                                            </div>
                                                            <div class="title_epp">
                                                                <h1>${tilte_ep_}</h1>
                                                                <p> episodios ${date.data_prox.n[ep]}</p>
                                                            </div>
                                                        </div>
                                                        <div class="btn_ep">
                                                            <button id="Assitir" onclick="Assistir_agora('${String(date.data_prox.title[ep])}')" ><span   class="material-icons">play_arrow</span> <h1>Assitir</h1></button>
                                                            <button id="Cancelar" onclick="Cancelar()" ><h1>cancelar</h1></button>
                                                        </div>`
                            }
                        
                        }


                    var numero_ep = date.data_prox.n[i]
                    var tilte_ep = date.data_prox.title[i]
                    
                    var colun = document.querySelector('.colun-result-ep')
                    
                    
                        
                
                    var tilte_ep =  String(tilte_ep)
                    if(tilte_ep.length > 14 ){
                        tilte_ep = `${tilte_ep.slice(0, 14)}...`
                        
                    }
                    
                
                    colun.innerHTML += ` <div class="div-ep"><a href="
                    /animes/videos/?name=${nome}&ep=${numero_ep}&id=${id}&api=${api}&title=${tilte_epp}">
                        <img class="img-ep-proximo" src="${date.data_prox.img[i]}" alt="">
                        <div class="title-number-ep">
                            <h1>${tilte_ep}</h1>
                            <p>episodio ${numero_ep}</p>
                        </div>
                        </a>
                        </div>`

                        
            }
        
 
  
            for(var i = 0;i < date.data_prox.title.length; i++){
                    numero_ep =  date.data_prox.n[i]
                    var epp = document.querySelector('.conteudo')
                    epp.innerHTML +=
                    ` <div class="img_title"> <a href="/animes/videos/?name=${nome}&ep=${numero_ep}&api=${api}&id=${id}&title=${date.data_prox.title[i]}">
                        <img src="${date.data_prox.img[i]}" alt="" sizes="" srcset="">
                        <div class="title_ep"><p> Episodios ${numero_ep}</p></div>
                        </a>
                    </div>`
                    
                }
            
          
                })
                 
               
               

  
    }
    else{
        async function jika(){
            var page = 1
            if(String(ep).length == 3){
                page = parseInt(String(ep)[0]) + 1
               
            }
         
            await fetch(`https://api.jikan.moe/v3/anime/${id}`).then((res) => res.json()).then((data) => {
                
                fetch(`https://api.jikan.moe/v3/anime/${id}/episodes/${page}`).then((res) => res.json()).then((date) =>  {
                
                var cinco = 5
                
                try{
                   var titu = date.episodes[parseInt(ep) - 1].title
                }
                catch{
                    var titu = 'indisponível'
                }
                if(page > 1){
                    ep -= page * 100  - 100
                   
                    
                }
                if (titu.length > 14){
                    titu = `${titu.slice(0, 14)}...`
                }
                document.querySelector('#titulo-ep').innerHTML = `  <h1>
                        Titulo:${titu}
                </h1><p>Episódio ${ep}</p>`
                try{
                    for (var i = 0; i < cinco; i++){  
                        if(i == 0){
                            var proximo_EP = document.querySelector('#proximo_EP')
                            var tilte_ep_ = date.episodes[i +parseInt(ep)].title
                            var tilte_ep_ =  String(tilte_ep_)
                            if(tilte_ep_.length > 14 ){
                                tilte_ep_ = `${tilte_ep_.slice(0, 14)}...`
                                
                            }   
                            proximo_EP.innerHTML = `<div id="time_proximo_ep">
                                                            <h1>Proximo Episodio em 8</h1>
                                                        </div>
                                                        <div class="pai_ep">
                                                            <div class="_img_">
                                                                <img src="${data.image_url}" alt="">
                                                            </div>
                                                            <div class="title_epp">
                                                                <h1>${tilte_ep_}</h1>
                                                                <p> episodios ${date.episodes[i +parseInt(ep)].episode_id}</p>
                                                            </div>
                                                        </div>
                                                        <div class="btn_ep">
                                                            <button id="Assitir" onclick="Assistir_agora()" ><span   class="material-icons">play_arrow</span> <h1>Assitir</h1></button>
                                                            <button id="Cancelar" onclick="Cancelar()" ><h1>cancelar</h1></button>
                                                        </div>`
                        }
                        
                        var numero_ep = date.episodes[i +parseInt(ep)].episode_id
                        var tilte_ep = date.episodes[i +parseInt(ep)].title
                        
                        var colun = document.querySelector('.colun-result-ep')
                        
                        
                            
                    
                        var tilte_ep =  String(tilte_ep)
                        if(tilte_ep.length > 14 ){
                            tilte_ep = `${tilte_ep.slice(0, 14)}...`
                            
                        }
                        
                    
                        colun.innerHTML += ` <div class="div-ep"><a href="
                        /animes/videos/?name=${nome}&ep=${numero_ep}&id=${id}&api=${api}">
                            <img class="img-ep-proximo" src="${data.image_url}" alt="">
                            <div class="title-number-ep">
                                <h1>${tilte_ep}</h1>
                                <p>episodio ${numero_ep}</p>
                            </div>
                            </a>
                            </div>`

                            
                }
                }
                catch{
                    console.log('erro')
                
                }
                var a = 10
                try{
                    for(var i = 0;i < a; i++){
                        numero_ep = date.episodes[i +parseInt(ep)].episode_id
                        var epp = document.querySelector('.conteudo')
                        epp.innerHTML +=
                        ` <div class="img_title"> <a href="/animes/videos/?name=${data.title}&ep=${numero_ep}&api=${api}&id=${id}&page=${page}">
                            <img src="${data.image_url}" alt="" sizes="" srcset="">
                            <div class="title_ep"><p> Episodios ${numero_ep}</p></div>
                            </a>
                        </div>`
                        
                    }
                }
                catch{
                    console.log('erro')
                }
                    })
                     
                   
                   
                 
                
              

                })
                
                
             

             
        }jika()
    }
 
    fetch(`https://api-python-anime.herokuapp.com/v3/anime/${nome}/episodio/${ep}`
     ).then(dub  =>  dub.json()).then((date_dub) => {
      
        var conteudo = window.document.querySelector('.video')
        
        
        if (date_dub.dublado['hd'].length > 0 || date_dub.dublado['sd'].length > 0){
          
                if (date_dub.dublado['hd'].length >  0){
                    conteudo.src = date_dub.dublado['hd'][0]
                   
                    var pla =  document.querySelector('#playvi')
                    pla.style.display = "flex";
                }
                else{
                    conteudo.src = date_dub.dublado['sd'][0]
                    
                    var pla =  document.querySelector('#playvi')
                    pla.style.display = "flex";
                }
                
              
                
                
        
        }
       
        else{ 

                fetch(`https://api-python-anime.herokuapp.com/v2/anime/${nome}/episodio/${ep}`).then(res => res.json()).then(data => {
        
                
                for (var i = 0;i < data.dublado.length; i++){


                    conteudo.innerHTML += ` 
                    <source src="${data.dublado[i]}" type="video/mp4">
                    
                    
                    `
                    var pla =  document.querySelector('#playvi')
                    pla.style.display = "flex";
                
                }
            
                    
                } ) 
            }
       
       
        })

    
    function dub(){
            fetch(`https://api-python-anime.herokuapp.com/v3/anime/${nome}/episodio/${ep}`
            ).then(dub  =>  dub.json()).then((date_dub) => {
           
               var time_video_ =video.currentTime
               var conteudo = window.document.querySelector('.video')
               
               
               if (date_dub.dublado['hd'].length > 0 || date_dub.dublado['sd'].length > 0){
                 
                       if (date_dub.dublado['hd'].length >  0){
                           conteudo.src = date_dub.dublado['hd'][0]
                          
                           var pla =  document.querySelector('#playvi')
                           pla.style.display = "flex";
                           if(time_video_ > 0){
                            document.querySelector("#classplay").classList.toggle('active')
                           }
                       }
                       else{
                           conteudo.src = date_dub.dublado['sd'][0]
                           
                           var pla =  document.querySelector('#playvi')
                           pla.style.display = "flex";
                           if(time_video_ > 0){
                            document.querySelector("#classplay").classList.toggle('active')
                           }
                       }
                       
                     
                       
                       
               
               }
              
               else{ 
       
                       fetch(`https://api-python-anime.herokuapp.com/v2/anime/${nome}/episodio/${ep}`).then(res => res.json()).then(data => {
                
                       
                       for (var i = 0;i < data.dublado.length; i++){
       
       
                           conteudo.innerHTML += ` 
                           <source src="${data.dublado[i]}" type="video/mp4">
                           
                           
                           `
                           var pla =  document.querySelector('#playvi')
                           pla.style.display = "flex";
                       
                       }
                   
                           
                       } ) 
                   }
              
              
               })
       
    
        }
    function legend(){
        fetch(`https://api-python-anime.herokuapp.com/v3/anime/${nome}/episodio/${ep}`
        ).then(dub  =>  dub.json()).then((date_dub) => {
         
          
           var time_video_ =video.currentTime
    

           var conteudo = window.document.querySelector('.video')
          
        
           if (date_dub.legendado['hd'].length > 0 || date_dub.legendado['sd'].length > 0){
                
                   if (date_dub.legendado['hd'].length >  0){
                       conteudo.src = date_dub.legendado['hd'][0]
                     
                       var pla =  document.querySelector('#playvi')
                       
                       pla.style.display = "flex";
                       if(time_video_ > 0){
                        document.querySelector("#classplay").classList.toggle('active')
                       }

                   }
                   else{
                       conteudo.src = date_dub.legendado['sd'][0]
                       if(time_video_ > 0){
                        document.querySelector("#classplay").classList.toggle('active')
                       }
                       var pla =  document.querySelector('#playvi')
                       pla.style.display = "flex";
                      
                   }
                   
                 
                   
                   
           
           }
           
          
           else{ 
   
                   fetch(`https://api-python-anime.herokuapp.com/v2/anime/${nome}/episodio/${ep}`).then(res => res.json()).then(data => {
                  
                   
                   for (var i = 0;i < data.legendado.length; i++){
   
   
                       conteudo.src = data.legendado[i]
                      
                       
                       
                       
                       var pla =  document.querySelector('#playvi')
                       pla.style.display = "flex";
                       document.querySelector("#classplay").classList.toggle('active')
                   
                   }
               
                       
                   } ) 
               }
          
          
    })
}

    
    

    
         
      
     
