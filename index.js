// // Code your solutions in this file


// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl!`);
//         debugger;
//     }

//     return gifts;
// }  

// wrapGifts(gifts);

function writeCards(names, eventName){
    const messages = [];

    for (let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        messages.push(message);
    }

    return messages;
}

const names = ['Baruch', 'Brianna', 'jabez'];
const eventName = 'birthday';
const messages =writeCards(names, eventName);
console.log(messages);

writeCards(['Brianna', 'jabez', 'Baruch'], 'Birthday');


function countDown(num){
    for (let i = num; i >= 0; i--){
        console.log(i);
    }
}
countDown(10)


