//Write yore solution in this file 
function writeCards(names, happy = "happy"){
    let card =[];
    for (let r = 0; r < names.length; r++){
        card.push(`Thank you, ${names[r]}, for the wonderful ${happy} gift!`);
    }

return card;
}
function countDown(number){


    for (let index  = number; index >=0 ; index--) {
        console.log(index)
        
    }
}
