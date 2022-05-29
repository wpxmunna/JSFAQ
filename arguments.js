function getFullName(firstName, lastName){
    let fullName = '';
    for(let i = 0; i<arguments.length; i++){
        const partName = arguments[i];
        fullName = fullName + ' ' + partName;
    }
    return fullName;
}
const name = getFullName('Hanif', 'Enterprise', 'Poribohon', 'Limited');
console.log(name);