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
function zdjeciepost(wartosc, i){
    

        var obraz = document.getElementById('p'+ i )
        obraz.style.content = 'url(' + wartosc + ')';
}

var chooser = randomNoRepeats(['adik.png', 'dawid.png', 'jojo.png','nikus.png','seba.png','sledz.png']);
for (let i = 0; i < 35; i++) {
zdjeciepost(chooser(), i)}

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








