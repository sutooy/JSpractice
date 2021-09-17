// * input -> janken("rock")
// * output -> rock against paper - you lose
// * input -> janken("nuclear")
// * output -> nuclear is not part of the game!
// * input -> janken(1)
// * input -> please input rock, paper, or scissors only


var number = Math.floor(Math.random() * 2)
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
computerDecision(number)
console.log (computerDecision(number))

// console.log (computerDecision(1))

function humanDecision(input) {
    if (input + computerDecision(number) === 'rockpepper') {
      return "lose";
    }
    if (input + computerDecision(number) === 'rockrock') {
        return "draw";
      }
    if (input + computerDecision(number) === 'rockscissor') {
        return "win";
    }
    if (input + computerDecision(number) === 'pepperpepper') {
        return "draw";
    }
    if (input + computerDecision(number) === 'pepperrock') {
          return "win";
    }
    if (input + computerDecision(number) === 'pepperscissor') {
          return "lose";
    }
    if (input + computerDecision(number) === 'scissorpepper') {
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
    else {'is not part of the game!'}
};

// testCase

// humanDecision ('rock')
console.log (humanDecision ('nuclear'))