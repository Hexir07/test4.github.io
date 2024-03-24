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
  var chooser = randomNoRepeats(['adik.png', 'dawid.png', 'jojo.png','nikus.png','seba.png','sledz.png']);
  var caseoh = (['caseoh1.png','caseoh2.png','caseoh3.png','caseoh4.png','caseoh5.png',])
  function galeria(wartosc, i, k){
    
    console.log(wartosc)
    var zdjeciegaleria = document.getElementById('g'+i+'z'+k)
    zdjeciegaleria.style.content = 'url(' + wartosc + ')';
}
for (let j = 0; j < 35; j++) {
    for (let k = 0; k < 5; k++) {
        
        if(j !== 24){
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
    var chooser_komentarzy = randomNoRepeats(['mega post!','spoko','test1','test2','test3'])
    for (let j = 0; j < 35; j++) {
        for (let k = 0; k < 3; k++) {
            komentarzpost(chooser_komentarzy(), j , k)
        }
    }
    function tytulpost(wartosc, i){
    
        var tytul = document.getElementById('i'+ i )
        tytul.innerHTML = wartosc
    }
    
    var choosertytul = randomNoRepeats(['tytul1','tytul2','tutel3','tytul4','maciek']);
    for (let i = 0; i < 35; i++) {
    tytulpost(choosertytul(), i)}