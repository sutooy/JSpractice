// * input -> janken("rock")
// * output -> rock against paper - you lose
// * input -> janken("nuclear")
// * output -> nuclear is not part of the game!
// * input -> janken(1)
// * input -> please input rock, paper, or scissors only


var number = Math.floor(Math.random() * 3)
function computerDecision (number) {
    if (number === 0) {
      return "rock";
    }
    if (number === 1) {
      return "scissor";
    }
    if (number === 2) {
      return "papper";
  }
};
// computerDecision(number)
console.log (computerDecision(number))

// console.log (computerDecision(1))

function humanDecision(input) {
 
    if (input + computerDecision(number) === 'rockpapper') {
      return "lose";
    }
    if (input + computerDecision(number) === 'rockrock') {
        return "draw";
      }
    if (input + computerDecision(number) === 'rockscissor') {
        return "win";
    }
    if (input + computerDecision(number) === 'pepperpapper') {
        return "draw";
    }
    if (input + computerDecision(number) === 'pepperrock') {
          return "win";
    }
    if (input + computerDecision(number) === 'pepperscissor') {
          return "lose";
    }
    if (input + computerDecision(number) === 'scissorpapper') {
        return "win";
    }
    if (input + computerDecision(number) === 'scissorrock') {
          return "lose";
    }
    if (input + computerDecision(number) === 'scissorscissor') {
          return "draw";
    }
    if (input + computerDecision(number) === 'undefined') {
        return 'is not part of the game!';
      }
      if (input !== 'rock' || input !== 'scissor' || input !== 'papper' ) {
        return "is not part of the game!";
      }
    else {'is not part of the game!'}
};

// testCase

// humanDecision ('rock')
console.log (humanDecision ('nuclear'));
console.log (humanDecision ('kaki'));
console.log (humanDecision ('rock'));
console.log (humanDecision ('pepper'))
console.log (humanDecision ('scissor'))