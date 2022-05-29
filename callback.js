function welcomeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = 'Tom Hanks';

function greetMorning(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name)
}
welcomeGuest(actorName, greetMorning);
welcomeGuest(actorName, greetEvening);
