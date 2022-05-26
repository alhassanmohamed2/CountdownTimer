const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    days = document.querySelectorAll(".days"),
    hours = document.querySelectorAll(".hours"),
    mintes = document.querySelectorAll(".minutes"),
    seconds = document.querySelectorAll(".seconds");
var countDown, now, distance;
var x;
var eless = document.querySelectorAll(".ppp .center h1 ");

exam = ["may 31, 2022 13:00:00", "jun 05, 2022 13:00:00", "jun 07, 2022 13:00:00",
    "jun 16, 2022 13:00:00", "jun 19, 2022 13:00:00", "jun 21, 2022 13:00:00", "jun 28, 2022 13:00:00"
];
var subjects = ["مفاعلات ومعجلات", "تحليل نظم", "إلكترونيات 2", "شبكات عصبية", "ذكاء اصطناعى متقدم", "فيزياء الليزر", "مشروع التخرج"];

for (var i = 0; i < 7; i++) {
    eless[i].innerHTML = subjects[i];
}

function timer() {

    x = setInterval(function() {

        for (var i = 0; i < 7; i++) {
            countDown = new Date(exam[i]).getTime();
            now = new Date().getTime();
            distance = countDown - now;
            var d = Math.floor(distance / (day));
            var h = Math.floor((distance % (day)) / (hour));
            var m = Math.floor((distance % (hour)) / (minute));
            var s = Math.floor((distance % (minute)) / second);
            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                days[i].innerText = "E",
                    hours[i].innerText = "N",
                    mintes[i].innerText = "D",
                    seconds[i].innerText = "🎉";
            } else {
                days[i].innerText = d,
                    hours[i].innerText = h,
                    mintes[i].innerText = m,
                    seconds[i].innerText = s;
            }
        }
    }, 0);

}

timer(0);