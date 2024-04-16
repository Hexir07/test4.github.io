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
        var zdjecialista = ['adik.png', 'dawid.png', 'jojo.png','nikus.png','seba.png','sledz.png']
        var wyborzdj = document.querySelector('.wyborzdj')
        var selector = '.wybrozdjoptions'
        window.addEventListener('load',function(){
            
            
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
            if(tytulmojego.length<61){
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
            
            
            
            function zdjeciepost(wartosc){
                var obraz = document.getElementById('pm'+mojeposty.childElementCount)
                obraz.style.content = wartosc
                }
        
                let wybrane = document.querySelector('.wybrane_zdj').style.content
                zdjeciepost(wybrane)
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