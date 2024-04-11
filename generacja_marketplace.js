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
        
                    var zdjecie = document.createElement('img');
                    zdjecie.id = 'p2'+i;
                    zdjecie.className = 'zdj_post';
                    postgora.appendChild(zdjecie);
        
                    var postdol = document.createElement('section');
                    postdol.className = 'dol';
                    post.appendChild(postdol);
                    

                    var ikonka = document.createElement('section');
                    ikonka.className = 'ikonka';
                    postdol.appendChild(ikonka);
        
                    var tytulogl2 = document.createElement('section');
                    tytulogl2.className = 'tytulpost';
                    tytulogl2.id = 'o'+i;
                    postdol.appendChild(tytulogl2);
        
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
function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

function tytulogl(wartosc2, i){

    var tytul2 = document.getElementById('o'+ i )
    tytul2.innerHTML = wartosc2
}
var ofery = ['Sprzedam','Do odebrania za darmo','mitsubishi sigma','bmw m3 2018','rower(za darmo)','550zl','2000zl']
var choosertytul = randomNoRepeats(ofery);
for (let i = 0; i < 35; i++) {
tytulogl(choosertytul(), i)
}
function zdjeciepost(wartosc, i){
    

  var obraz = document.getElementById('p2'+ i )
  obraz.style.content = 'url(' + wartosc + ')';
}

var chooser = randomNoRepeats(['rower.png', 'sigma.png', 'bmw.png','rower2.png','hulajnoga.png','krzeslo.png','rower3.png']);
for (let i = 0; i < 35; i++) {
zdjeciepost(chooser(), i)}