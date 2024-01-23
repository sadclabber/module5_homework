let str = prompt('Введите число');
let num = +str;
if (typeof num === 'number') {
  let check = num % 2; 
  if (check === 0) {
    console.log('Четное');
  } else if (check > 0) {
    console.log('Нечетное');
  } else {
    console.log ('Упс, кажется, вы ошиблись');
  }
} else {
  console.log ('Упс, кажется, вы ошиблись');
}