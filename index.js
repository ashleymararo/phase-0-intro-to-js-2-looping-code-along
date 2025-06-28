function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

writeCards(["Benson"], "surprise")

function countDown(number){
    while (number >= 0) {
    console.log(number);
    number--;
    }
}

countDown(20)
