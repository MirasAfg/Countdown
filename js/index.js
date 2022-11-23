const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

//начинаем дату отчета 

let countDownDate = new Date(2022,10,20,18,7,0).getTime();


function getCountDownTime(){
    //Получить текущее время 
    const now = new Date().getTime();

    // найти разницу времени 

    const distance = countDownDate - now 

    //1c ==1000mc
    //1m ==60mc
    //1h ==60m
    //1d == 24h

    // Создаем переменные в милисекундах 
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    
    // Подсчет для дней, часов , минут и секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay)/oneHour);
    let minutes = Math.floor((distance % oneHour)/oneMinute);
    let seconds = Math.floor((distance % oneMinute)/1000);

    // Создаем массив с переменными 
    const values = [days, hours, minutes, seconds]
    console.log(values);


    //Добавляем значение переменных на страницы

    items.forEach(function(item, index){
        item.textContent = values[index];
    })

    if ( distance < 0 ) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class ='expired'>ПРОДАЖИ НАЧАЛИСЬ</h4>"
        
    }

}
// Обновление счетчика каждую секунду
let countdown = setInterval(getCountDownTime, 1000);

// Инциалицация текущего времени 
getCountDownTime(); 
