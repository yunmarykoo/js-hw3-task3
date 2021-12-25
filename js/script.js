var day = +prompt('Введите день вашего рождения');
var month = +prompt('Введите месяц вашего рождения');

if (day >= 20 && day <= 16 && month === 1 || month === 2){
    alert('Вы козерог');
} else if (day >= 17 && day <= 11 && month === 2 || month === 3){
    alert('Вы водолей')
} else if (day >= 12 && day <= 18 && month === 3 || month === 4){
    alert('Вы рыбы');
} else if (day >= 19 && day <= 13 && month === 4 || month === 5){
    alert('Вы овен');
} else if (day >= 14 && day <= 21 && month === 5 || month === 6){
    alert ('Вы телец');
} else if (day >= 22 && day <= 20 && month === 6 || month === 7){
    alert('Вы близнецы');
} else if (day >= 21 && day <= 10 && month === 7 || month === 8){
    alert('Вы рак'); 
} else if (day >= 11 && day <= 16 && month === 8 || month === 9){
    alert('Вы лев'); 
} else if (day >= 17 && day <= 30 && month === 9 || month === 10){
    alert('Вы дева'); 
} else if (day >= 31 && day <= 23 && month === 10 || month === 11){
    alert('Вы весы'); 
} else if (day >= 24 && day <= 29 && month === 11 ){
    alert('Вы скорпион'); 
} else if (day >= 30 && day <= 17 && month === 11 || month === 12){
    alert('Вы змееносец'); 
} else if (day >= 17 && day <= 19 && month === 12 || month === 1){
    alert('Вы рак'); 
} 