const teamsArray = [
    {
        nome:'Real Madrink',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Sambuca Juniors',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Aston Birra',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Scarsenal',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Spal Letti',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Pro Secco',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    },
    {
        nome: 'Sbronzing Lisbona',
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    }
];
const userInputTeam = prompt('Inserisci la tua squadra del cuore');
teamsArray.push(
    {
        nome: userInputTeam,
        punti: Math.floor((Math.random() * 10) + 1),
        falliSubiti: Math.floor((Math.random() * 10) + 1)
    }
);//immetto nell'array una squadra scelta dall'utente
const resultArray = teamsArray.map((item)=>{
    return item.nome +' falli subiti: '+item.falliSubiti;
});//creo un array con solo nome squadra e falli subiti
console.log(teamsArray);
console.log(resultArray);
console.log(userInputTeam);
const resultMessage = document.getElementById('result');
for(let i = 0; i < resultArray.length; i++){
    let teamList = `<li>${resultArray[i]}</li>`;
    resultMessage.innerHTML += teamList;
}