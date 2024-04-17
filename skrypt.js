        var glowna = document.querySelector(".mainpageico")
        glowna.addEventListener('click',function(){
            window.location.replace("index.html")})
        var znajomi = document.querySelector(".friendspageico")
        znajomi.addEventListener('click',function(){
            window.location.replace("friends.html")})
        var videos = document.querySelector(".videospageico")
        videos.addEventListener('click',function(){
            window.location.replace("videos.html")})
        var marketplace = document.querySelector(".marketplaceico")
        marketplace.addEventListener('click',function(){
            window.location.replace("marketplace.html")})
        var games = document.querySelector(".gamespageico")
        games.addEventListener('click',function(){
            window.location.replace("games.html")})
        history.pushState({},'title')

        var checkbox = document.getElementById("czyciemno")

        function ciemno(){
            document.body.style.backgroundColor = 'var(--jasny-1)';
            document.querySelector(".upperhead").style.backgroundColor = 'var(--jasny-4)';
            document.querySelector(".leftmenu").style.backgroundColor = 'var(--jasny-5)';
            document.querySelector(".center").style.backgroundColor = 'var(--jasny-5)';
            
            document.querySelector(".posts").style.backgroundColor = 'var(--jasny-1)';
            document.querySelector(".createstatus").style.backgroundColor = 'var(--jasny-1)';
            document.querySelector(".createpost").style.backgroundColor = 'var(--jasny-1)';
            
            for (let i = 0; i < document.getElementsByClassName("postbox").length; i++) {
                document.getElementsByClassName("postbox")[i].style.backgroundColor = 'var(--jasny-4)';
                document.getElementsByClassName("gora")[i].style.backgroundColor = 'var(--jasny-1)';
        }}
        function jasno(){
            document.body.style.backgroundColor = 'var(--ciemny-1)';
            document.querySelector(".upperhead").style.backgroundColor = 'var(--ciemny-2)';
            document.querySelector(".leftmenu").style.backgroundColor = 'var(--ciemny-2)';
            document.querySelector(".center").style.backgroundColor = 'var(--ciemny-2)';
            
            document.querySelector(".posts").style.backgroundColor = 'var(--ciemny-1)';
            document.querySelector(".createstatus").style.backgroundColor = 'var(--ciemny-2)';
            document.querySelector(".createpost").style.backgroundColor = 'var(--ciemny-2)';

            

            for (let i = 0; i < document.getElementsByClassName("postbox").length; i++) {
                document.getElementsByClassName("postbox")[i].style.backgroundColor = 'var(--ciemny-3)';
                document.getElementsByClassName("gora")[i].style.backgroundColor = 'var(--ciemny-4)';
            }
        }

        
        window.addEventListener('load',function(){
            if(window.localStorage.czyzalogowano == 'tak'){
                let dlugosc = localStorage.nazwa_uzytkownika.length
                var nazwa = localStorage.nazwa_uzytkownika.slice(1,dlugosc-1)
                
                document.querySelector('.nazwa_text').innerHTML = nazwa
            }
        })
    

        window.addEventListener('load', function(){
            if(window.localStorage.getItem('theme') == 'dark'){
                jasno()
            }
            else if(window.localStorage.getItem('theme') == 'light'){
                ciemno()
            }
        })
        
       
        checkbox.addEventListener('change',function(){
            if(window.localStorage.getItem('theme') == 'dark') {
                ciemno()
                window.localStorage.setItem('theme','light')
            }
            else if(window.localStorage.getItem('theme') == 'light'){
                
                jasno()
                window.localStorage.setItem('theme','dark')
            }
        })

        
        window.addEventListener('load', function(){
            if(this.localStorage.getItem('theme')===null){
                localStorage.setItem('theme','dark')
            }
        })

        var wyszukiwanie = document.querySelector('.searchbar_area')
        wyszukiwanie.addEventListener( "keyup", function() {
            
            var wyszukiwanie_value =  this.value.toLowerCase();
            let tytul = document.getElementsByClassName('tytulpost')
            let posty = document.getElementsByClassName('postbox')
            for (let i = 0; i < 35; i++) {
                if (!tytul[i].innerHTML.toLowerCase().includes(wyszukiwanie_value)) {
                    posty[i].style.display = "none";
                  }
                else{
                    posty[i].style.display = 'block'
                }
            }
        })
    
        var loginbutton = document.querySelector('.loginpage')
        loginbutton.addEventListener('click',function(){
            window.location.replace('logowanie.html')
        })


        var scrollbar = document.querySelector('.posty_frame')
        var powrot = document.querySelector('.powrot')
        scrollbar.addEventListener('scroll',function(){
            if(scrollbar.scrollTop>280){
                document.querySelector('.powrot').style.position = 'absolute'
                document.querySelector('.powrot').style.top = '85vh'
                document.querySelector('.powrot').style.visibility = 'visible'
            }
            else{
                document.querySelector('.powrot').style.visibility = 'hidden'
            }
        })
        powrot.addEventListener('click',function(){
            scrollbar.scrollTop = 0
        })

        var createpost = document.querySelector('.createpost_button')
        var createpost_box = document.querySelector('.createpost_box')
        var cont_createpost = document.querySelector('.contener_createpost')

        
        var createstatus = document.querySelector('.createstatus_button')
        var createstatus_box =document.querySelector('.createstatus_box')
        var cont_createstatus = document.querySelector('.contener_createstatus')
        var zdjecialista = ['kubus.jpg','adik.png', 'dawid.png', 'jojo.png','nikus.png','seba.png','sledz.png']
        var marketplacelista = ['rower.png', 'sigma.png', 'bmw.png','rower2.png','hulajnoga.png','krzeslo.png','rower3.png']
        var wyborzdj = document.querySelector('.wyborzdj')
        var selector = '.wybrozdjoptions'
        window.addEventListener('load',function(){
            
            if(window.location.href.substring(document.location.href.lastIndexOf("/")+1, document.location.href.length)!='marketplace.html'){
            for(let i = 0; i < zdjecialista.length;i++){
                
                var listanadzdj = this.document.createElement('li')
                listanadzdj.className='listanadzdj'
                

                var wybrozdjoptions = document.createElement('img')
                wybrozdjoptions.className = 'wybrozdjoptions'
                wybrozdjoptions.style.content = 'url(' + zdjecialista[i] + ')'
                wybrozdjoptions.id = 'wybranezdj'+i
                
                listanadzdj.appendChild(wybrozdjoptions)
                wyborzdj.appendChild(listanadzdj)
                
                
            }
            
            
            for (var item of document.querySelectorAll(".listanadzdj")) {
                item.addEventListener("click", function (evt) {
                    let test6 = document.querySelectorAll('.wybrozdjoptions.wybrane_zdj')
                    if(test6.length<1){

                    if(!evt.target.classList.contains("wybrane_zdj")){
                        evt.target.classList.add("wybrane_zdj")}
                    else{
                        evt.target.classList.remove("wybrane_zdj")
                    }}
                    else if(test6.length){
                        document.querySelectorAll(".wybrozdjoptions").forEach(element => {
                            element.classList.remove("wybrane_zdj")
                        });
                        evt.target.classList.add("wybrane_zdj")
                    }
                }, false);
               }
            
            }
            else{
                for(let i = 0; i < marketplacelista.length;i++){
                
                    var listanadzdj2 = document.createElement('li')
                    listanadzdj2.className='listanadzdj2'
                    
    
                    var wybrozdjoptions2 = document.createElement('img')
                    wybrozdjoptions2.className = 'wybrozdjoptions'
                    wybrozdjoptions2.style.content = 'url(' + marketplacelista[i] + ')'
                    wybrozdjoptions2.id = 'wybranezdj2'+i
                    
                    listanadzdj2.appendChild(wybrozdjoptions2)
                    wyborzdj.appendChild(listanadzdj2)
                    
                    
                }
                
                
                for (var item of document.querySelectorAll(".listanadzdj2")) {
                    item.addEventListener("click", function (evt) {
                        let test6 = document.querySelectorAll('.wybrozdjoptions.wybrane_zdj2')
                        if(test6.length<1){
    
                        if(!evt.target.classList.contains("wybrane_zdj2")){
                            evt.target.classList.add("wybrane_zdj2")}
                        else{
                            evt.target.classList.remove("wybrane_zdj2")
                        }}
                        else if(test6.length){
                            document.querySelectorAll(".wybrozdjoptions").forEach(element => {
                                element.classList.remove("wybrane_zdj2")
                            });
                            evt.target.classList.add("wybrane_zdj2")
                        }
                    }, false);
                   }
                }



        })
        

        createpost.addEventListener('click',function(){
            cont_createpost.style.bottom = "0%"
            
            
        })
        cont_createpost.addEventListener('click',function(event){
            if(cont_createpost!==event.target)return;
            cont_createpost.style.bottom = "-100%"
        })
        createstatus.addEventListener('click',function(){
            cont_createstatus.style.bottom = "0%"
        })
        cont_createstatus.addEventListener('click',function(event){
            if(cont_createstatus!==event.target)return;
            cont_createstatus.style.bottom = "-100%"
        })
        

        var tytulmojego = document.querySelector('#post_title')
        let dlugosc_tytul = document.querySelector('#post_title').value.length

       
        



        
        var createpost_button2 = document.querySelector('.createpost_button2')
        
        var mojeposty = document.querySelector('.wygenerowane_posty')
        
        createpost_button2.addEventListener('click',function(i){
            if(tytulmojego.value.length<61){
            var post = document.createElement('li');
            
            post.style.display = 'inline-block';
            post.className = 'postbox'
            mojeposty.appendChild(post);
            post = mojeposty.insertBefore(post,mojeposty.firstElementChild)
            
            var postgora = document.createElement('section');
            postgora.className = 'gora'
            post.appendChild(postgora);

            var zdjecie = document.createElement('img');
            zdjecie.id = 'pm'+ mojeposty.childElementCount;
            zdjecie.className = 'zdj_post';
            postgora.appendChild(zdjecie);

            var postdol = document.createElement('section');
            postdol.className = 'dol';
            post.appendChild(postdol);
            

            var ikonka = document.createElement('section');
            ikonka.className = 'ikonka';
            postdol.appendChild(ikonka);

            var tytulpost = document.createElement('section');
            tytulpost.className = 'tytulpost';
            tytulpost.id = 'im'+i;
            postdol.appendChild(tytulpost);


            
            


            
                tytulpost.innerHTML = tytulmojego.value
            
            
                cont_createstatus.style.bottom = "-100%"
            function zdjeciepost(wartosc){
                var obraz = document.getElementById('pm'+mojeposty.childElementCount)
                obraz.style.content = wartosc
                }
                if(window.location.href.substring(document.location.href.lastIndexOf("/")+1, document.location.href.length)!='marketplace.html'){
                let wybrane = document.querySelector('.wybrane_zdj').style.content
                zdjeciepost(wybrane)}
                else{
                    let wybrane = document.querySelector('.wybrane_zdj2').style.content
                    zdjeciepost(wybrane)
                }
                
            }else{
                alert('tytuł jest za długi')

            }
        }) 
        


        var ToProfilePage = document.querySelector('.opt1')

        ToProfilePage.addEventListener('click',function(){
            if(window.localStorage.czyzalogowano == 'tak'){
                window.location.replace('profile.html')
            }
            else {
                alert('Brak konta / Nie zalogowano')
            }
        })



        var ToUpdatesPage = document.querySelector('.opt2')
        var updatescont = document.querySelector('.updates_popup')

        ToUpdatesPage.addEventListener('click',function(){
            updatescont.style.top = "0%"

            document.querySelector('.updates').innerHTML = '<a href="https://21awi.github.io/Y2.github.io/">Strona Dawida</a>'
        })
        
        



    
        updatescont.addEventListener('click',function(event){
            if(updatescont!==event.target)return;
            updatescont.style.top = "-100%"
        })


        tytulmojego.addEventListener('keyup',function(){
            document.querySelector('#character_limit').innerHTML = 60 - this.value.length + '/ 60'
        })

        
        function sprawdz(){
        
        if(document.getElementById('current_status1').checked) {
            
            document.querySelector('.ProfPicture').style.border = '6px solid greenyellow'
        }
        else if(document.getElementById('current_status2').checked) {
            
            document.querySelector('.ProfPicture').style.border = '6px solid yellow'
        }
        else if(document.getElementById('current_status3').checked) {
            document.querySelector('.ProfPicture').style.border = '6px solid red'
            
        }
        else if(document.getElementById('current_status4').checked) {
            document.querySelector('.ProfPicture').style.border = '6px solid gray'
            
        }
    }