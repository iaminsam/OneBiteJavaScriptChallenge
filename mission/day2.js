// Mission 1

function checkAdult(age) {
  if (typeof age !== "number") {
    return console.log("숫자만 입력해주세요.");
  }
  switch (age) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return console.log("미성년자입니다.");
    default:
      return console.log("성인입니다.");
  }
}

checkAdult(20); // 성인입니다.
checkAdult(17); // 미성년자입니다.

// Mission 2

function calculate(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return console.log("숫자만 입력해주세요.");
  }
  switch (operator) {
    case "+":
      return console.log(num1 + num2);
    case "-":
      return console.log(num1 - num2);
    case "*":
      return console.log(num1 * num2);
    case "/":
      return console.log(num1 / num2);
    default:
      return console.log("유효하지 않은 연산자입니다.");
  }
}

calculate(10, 5, "+"); // 15
calculate(10, 5, "-"); // 5
calculate(10, 5, "*"); // 50
calculate(10, 5, "/"); // 2
calculate(10, 5, "%"); // 유효하지 않은 연산자입니다.
