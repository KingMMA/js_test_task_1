const businessInfo = [500, -1000, 1200, -5000, 10000, 20000, -10000, 800, 900, -2000, 500, -50];
let total_loss = 0;
let total_income = 0;

businessInfo.forEach((element) => {if (element > 0) {total_income += element}});
businessInfo.forEach((element) => {if (element < 0) {total_loss += element}});

console.log(`Загальні втрати: ${total_loss}`);
console.log(`Загальний прибуток: ${total_income}`);

businessInfo.forEach((element, index) => console.log(`${index+1} місяць: ${element}`));

