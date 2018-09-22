export function validateCardNumber(number) {
  const regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number))
    return false;

  return luhnCheck(number);
}

function luhnCheck(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    let intVal = parseInt(val.substr(i, 1), 10);
    if (i % 2 === 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return (sum % 10) === 0;
}
