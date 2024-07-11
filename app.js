let pesquisa = document.getElementById('pesquisa');
let cidade = document.getElementById('cidade');
let temperatura = document.getElementById('temperatura');
let descricao = document.querySelector('.descricao');
let nuvens = document.getElementById('nuvens');
let umidade = document.getElementById('umidade');
let vento = document.getElementById('vento');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit' , (event) =>  {
    event.preventDefault();
    if(pesquisa.value != ''){
        pesquisarClima();
    }
})

let id ='92bbc1a4922c09ede5b78263386b1b66'
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const pesquisarClima = () => {
    fetch(url + '&q=' + pesquisa.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            cidade.querySelector('figcaption').innerText = data.name;
            cidade.querySelector('img').src= 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png'

            temperatura.querySelector('img').src= 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'
            temperatura.querySelector('figcaption span').innerText = data.main.temp
            descricao.innerText = data.weather[0].description;
            nuvens.innerText = data.clouds.all;
            umidade.innerText = data.main.humidity;
            vento.innerText = data.wind.speed;
        }else{
            main.classList.add('erro');
            setTimeout(() => {
                main.classList.remove('erro');
            }, 1000);

        }
        pesquisa.value = ''; 
    })
}
const initApp = () => {
    pesquisa.value = 'São Paulo';
    pesquisarClima();
}
initApp();
