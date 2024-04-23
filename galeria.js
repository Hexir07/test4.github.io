var home = document.querySelector(".homebutton")
home.addEventListener('click',function(){
    window.location.replace("index.html")
})



var profile = document.querySelector(".profile")
profile.addEventListener('click',function(){
    document.querySelector(".profil_click").style.top = "0%"
    document.querySelector(".profil_click").style.visibility = "visible";

    
    
})
var profile_click = document.querySelector(".profil_click")
profile_click.addEventListener('click',function(event){
    if (profile_click !== event.target) return;
    document.querySelector(".profil_click").style.top = "-100%"
    document.querySelector(".profil_click").style.visibility = "hidden";
},false)

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
  var chooser = randomNoRepeats(['bruh.jpg','bestia.png','hmm.jpg','kubus.jpg','adik.png', 'dawid.png', 'jojo.png','nikus.png','seba.png','sledz.png']);
  var caseoh = (['caseoh1.png','caseoh2.png','caseoh3.png','caseoh4.png','caseoh5.png',])
  function galeria(wartosc, i, k){
    
    
    var zdjeciegaleria = document.getElementById('g'+i+'z'+k)
    zdjeciegaleria.style.content = 'url(' + wartosc + ')';
}
for (let j = 0; j < 35; j++) {
    for (let k = 0; k < 5; k++) {
        
        if(j != 24){
            galeria(chooser(), j , k)
        }
        else{
            galeria(caseoh[k],24,k)
        }
    }

}
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
        function komentarzpost(wartosc, i, k){
        

            var komenatrz = document.getElementById('p'+ i +'k' + k)
            komenatrz.innerHTML = wartosc
    }
    var chooser_komentarzy = randomNoRepeats(['gilu choc zrob stronke','skibidi','mega post!','spoko','test1','test2','test3'])
    for (let j = 0; j < 35; j++) {
        for (let k = 0; k < 3; k++) {
            komentarzpost(chooser_komentarzy(), j , k)
        }
    }
    function tytulpost(wartosc, i){
    
        var tytul = document.getElementById('i'+ i )
        tytul.innerHTML = wartosc
    }
    
    var choosertytul = randomNoRepeats(['oceni pani spoko logowanko???','abc','testowe4','nowy post','tytul1','tytul2','tutel3','tytul4','maciek']);
    for (let i = 0; i < 35; i++) {
    tytulpost(choosertytul(), i)}





    var slide_tyl = document.querySelectorAll('.slide_tyl')
    var slide_przod = document.querySelectorAll('.slide_przod')
   

    slide_przod.forEach(Element =>{
        Element.addEventListener('click',function(){
            let galeria3 = Element.parentElement.childNodes[0]
            
                if(galeria3.childNodes[0].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[0].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[1].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[1].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[1].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[2].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[2].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[2].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[3].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[3].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[3].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[4].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[4].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[4].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[0].classList.add('widoczne_zdjecie')
                }
                
            
        })
    })
    slide_tyl.forEach(Element=>{
        Element.addEventListener('click',function(){
            let galeria3 = Element.parentElement.childNodes[0]
            
                if(galeria3.childNodes[0].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[0].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[4].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[4].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[4].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[3].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[3].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[3].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[2].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[2].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[2].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[1].classList.add('widoczne_zdjecie')
                }
                else if(galeria3.childNodes[1].classList.contains('widoczne_zdjecie')){
                    galeria3.childNodes[1].classList.remove('widoczne_zdjecie')
                    galeria3.childNodes[0].classList.add('widoczne_zdjecie')
                }
                
            
        })
    })

