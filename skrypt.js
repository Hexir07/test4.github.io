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
                ciemno()
            }
            else if(window.localStorage.getItem('theme') == 'light'){
                jasno()
            }
        })
        
       
        checkbox.addEventListener('change',function(){
            if(window.localStorage.getItem('theme') == 'dark') {
                jasno()
                window.localStorage.setItem('theme','light')
            }
            else if(window.localStorage.getItem('theme') == 'light'){
                
                ciemno()
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

