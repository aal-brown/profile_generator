const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerObject = {
  question1: {question: "What's your name? Nicknames are also acceptable\n", answer: ""},
  question2: {question: "What's an activity you like doing?\n", answer: ""},
  question3: {question: "What do you listen to while doing that?\n", answer: ""},
  question4: {question: "Which meal is your favourite (eg: dinner, brunch, etc.\n)", answer: ""},
  question5: {question: "What's your favourite thing to eat for that meal?\n", answer: ""},
  question6: {question: "Which sport is your absolute favourite?\n", answer: ""},
  question7: {question: "What is your superpower? In a few words, tell us what you are amazing at!\n", answer: ""},
}


rl.question(answerObject.question1.question, (answer1) => {
  answerObject.question1.answer = answer1;
  rl.question(answerObject.question2.question, (answer2) => {
    answerObject.question2.answer = answer2;
    rl.question(answerObject.question3.question, (answer3) => {
      answerObject.question3.answer = answer3;
      rl.question(answerObject.question4.question, (answer4) => {
        answerObject.question4.answer = answer4;
        rl.question(answerObject.question5.question, (answer5) => {
          answerObject.question5.answer = answer5;
          rl.question(answerObject.question6.question, (answer6) => {
            answerObject.question6.answer = answer6;
            rl.question(answerObject.question7.question, (answer7) => {
              answerObject.question7.answer = answer7;
              
              
              console.log("Thank you for your valuable feedback.");

              console.log(`${answerObject.question1.answer} loves listening to ${answerObject.question3.answer} while ${answerObject.question2.answer}, devouring ${answerObject.question5.answer} for ${answerObject.question4.answer}, prefers ${answerObject.question6.answer} over any other sport, and is amazing at ${answerObject.question7.answer}.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});