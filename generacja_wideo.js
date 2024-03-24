var posty_frame = document.querySelector(".posty_frame")
var test_lista = document.createElement('ul')
test_lista.className = 'lista_postow'

var powrot = document.createElement('section')


posty_frame.appendChild(test_lista)

                for (let i = 0; i < 35; i++) {


                    var post = document.createElement('li');
                    post.style.display = 'inline-block';
                    post.className = 'postbox'
                    post.id = 'r'+i;
                    test_lista.appendChild(post)[i];
                    
                    
        
                    var postgora = document.createElement('section');
                    postgora.className = 'gora'
                    post.appendChild(postgora);
        
                    var wideo = document.createElement('video');
                    wideo.id = 'v'+i;
                    wideo.className = 'film';
                    wideo.controls = true;
                    postgora.appendChild(wideo);
                    var source = document.createElement('source')
                    source.className = 'sourcewideo'
                    source.id = 's'+i;
                    wideo.appendChild(source)
        
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
             document.getElementById('i0').innerHTML = 'seba'   
             document.getElementById('i1').innerHTML = 'h' 