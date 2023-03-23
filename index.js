// Code your solutions in this file
function countDown(){
    for(let i = 10; i >= 0; i--){
        console.log(i)
    }
}

function writeCards(names, event){
    let messages = []
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ` + names[i] + `, for the wonderful ` + event + ` gift!`)
    }
    return messages
}