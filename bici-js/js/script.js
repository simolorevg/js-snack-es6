const bikeArray =[
    {
        nome: 'Cipollini',
        peso: 1
    },
    {
        nome: 'Bianchini',
        peso: 5
    },
    {
        nome:'Lombardo',
        peso:2
    },
    {
        nome: 'Pincopallo',
        peso: 0.5
    }
]
const pesi = bikeArray.map((item)=>{
    return item.peso;
});
let minPeso = Math.min(...pesi);
let resultMessage = document.getElementById('result');
const result = bikeArray.filter((item)=>{
    if(minPeso === item.peso){
        return item.nome;
    }
});
let[object] = result;
console.log(object);
let{nome, peso} = object;
resultMessage.innerHTML =`La bici più leggera è ${nome}, con il peso di ${peso} kg.`;