// Mission 1

function checkAdult(age) {
  if (typeof age !== "number") {
    return console.log("숫자만 입력해주세요.");
  }
  if (age >= 18) {
    return console.log("성인입니다.");
  }
  return console.log("미성년자입니다.");
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
