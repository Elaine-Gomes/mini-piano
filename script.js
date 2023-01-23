const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volume = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector('.keys-checkbox input');

//array que armazenas todas as chaves,que representam os tons
let allKeys=[],
audio = new Audio('tunes/a.wav');

//faz o audio tocar 
const playTune = (key)=>{
       audio.src = `tunes/${key}.wav`
       audio.play();
       clickedKey(key);
}

// adiciona a classe active 
const clickedKey =(key)=>{
    const dataKey = document.querySelector(`[data-key="${key}"]`);
    dataKey.classList.add('active');

    setTimeout(()=>{
        dataKey.classList.remove('active'); 
    },150)  
}

//chama a função playTune passando o valor da chave de dados como um argumento
pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key)
    key.addEventListener('click',()=>{playTune(key.dataset.key)})
})

//mostra e esconde as chaves das teclas do piano
const showHidekeys = ()=>{
    pianoKeys.forEach(key =>key.classList.toggle('hide'));
}

////controla o volume
const handleVolume = (e)=>{
    audio.volume = e.target.value;
}

//se as teclas corresponder as chaves ,chama a função playTunes
const pressedKey = (e)=>{
     if(allKeys.includes(e.key)) playTune(e.key); 
}

//eventos
document.addEventListener('keydown',pressedKey);
volume.addEventListener('input',handleVolume);
keysCheckbox.addEventListener('click',showHidekeys);