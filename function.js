function evenify(number){
    if(number % 2 == 0){
        console.log(number, ': is even');
    }
    else{
        console.log(number*number, ': is odd');
    }
}
function evenify_all(num){
for (let i = 0; i < num.length; i++) {
    const number = num[i];
    evenify(number);
}
}
num = [2, 3, 4, 6, 10, 20];
evenify_all(num);

friend_age = [20, 38, 28, 26, 29];
evenify_all(friend_age);