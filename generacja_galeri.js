var posty_frame = document.querySelector(".posty_frame")
var test_lista = document.createElement('ul')
test_lista.className = 'lista_postow'

var powrot = document.createElement('section')
posty_frame.appendChild(test_lista)

                for (let i = 0; i < 35; i++) {
                    var post = document.createElement('section');
                    post.style.display = 'inline-block';
                    post.className = 'postbox'
                    post.id = 'r'+i;
                    test_lista.appendChild(post)[i];
                    
                    
        
                    var postgora = document.createElement('section');
                    postgora.className = 'gora'
                    post.appendChild(postgora);
        
                    var galeria2 = document.createElement('section');
                    galeria2.id = 'g'+i;
                    galeria2.className = 'galeria';
                    postgora.appendChild(galeria2);

                    var slide_tyl = document.createElement('section')
                    slide_tyl.className = 'slide_tyl'
                    slide_tyl.innerHTML = "<"
                    slide_tyl.id = 'st'+i
                    slide_tyl.setAttribute("onclick","slide2()")
                    postgora.appendChild(slide_tyl)

                    var slide_przod = document.createElement('section')
                    slide_przod.className = 'slide_przod'
                    slide_przod.innerHTML = ">"
                    slide_przod.id = 'sp'+i
                    slide_przod.setAttribute("onclick","slide1()")
                    
                    postgora.appendChild(slide_przod)
                    for (let z = 0; z < 5; z++) {
                    
                        
                        var zdjecie_galeria = document.createElement('img');
                        zdjecie_galeria.className= 'zdjeciegaleria';
                        zdjecie_galeria.id = 'g'+ i + 'z'+ z;

                        


                        galeria2.appendChild(zdjecie_galeria)[i]
                    }
                    
                        document.querySelector('#g'+i+'z0').classList.add('widoczne_zdjecie')
                    
                    

                    var postdol = document.createElement('section');
                    postdol.className = 'dol';
                    post.appendChild(postdol);
                    

                    var ikonka = document.createElement('section');
                    ikonka.className = 'ikonka';
                    postdol.appendChild(ikonka);
        
                    var tytulpost = document.createElement('section');
                    tytulpost.className = 'tytulpost';
                    tytulpost.id = 'i'+i;
                    postdol.appendChild(tytulpost);
        
                    var kontener_komentarzy = document.createElement('section')
                    kontener_komentarzy.className = 'kontener_komentarzy'
                    postdol.appendChild(kontener_komentarzy)

                    for (let k = 0; k < 3; k++) {
                        var komentarze = document.createElement('section');
                        komentarze.className= 'komentarzepost';
                        komentarze.id = 'p'+ i + 'k'+ k;
                        kontener_komentarzy.appendChild(komentarze)[i]
   
                    }  
                    
        
                    
                    
                }
                powrot.className = 'powrot'
                powrot.innerHTML = 'Powrót na góre'
                posty_frame.appendChild(powrot)
                