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
exam = [
    ["jun 19, 2021 12:30:00", "jun 21, 2021 12:30:00", "jun 23, 2021 12:30:00",
        "jun 26, 2021 12:30:00", "jun 28, 2021 12:30:00", "jun 30, 2021 12:30:00"
    ],
    ["jun 12, 2021 12:30:00", "jun 14, 2021 12:30:00", "jun 16, 2021 12:30:00",
        "jun 19, 2021 12:30:00", "jun 26, 2021 12:30:00", "jun 30, 2021 12:30:00"
    ]
];
 var subjects = [["Graph Theory", "Logical Programming", "Computer Graphics", "Electronics", "Quantum mechanics", "Plasma Physics"],
 [
     "Biophysical photography","Biophysical measurements","Zoology","Botany","Electronics","Plasma Physics"
     
     ]
 
 
 
 
 ];
var images = ["table.png","table_biopyhs.PNG"]
function timer(btt) {

   x = setInterval(function() {
        
        for (var i = 0; i < 6; i++) {
            countDown = new Date(exam[btt][i]).getTime();
            now = new Date().getTime();
            distance = countDown - now;
            var d = Math.floor(distance / (day));
            var h = Math.floor((distance % (day)) / (hour));
            var m = Math.floor((distance % (hour)) / (minute));
            var s = Math.floor((distance % (minute)) / second);
            if(d <= 0 && h<=0 &&  m<=0 && s<=0){
                days[i].innerText = "E",
                hours[i].innerText = "N",
                mintes[i].innerText = "D",
                seconds[i].innerText = "🎉";
            }else{
            days[i].innerText = d,
                hours[i].innerText = h,
                mintes[i].innerText = m,
                seconds[i].innerText = s;
            }
        }
    }, 0);

}

function nav(sty){
    document.querySelector("nav").innerHTML = sty;
}

function act(image,subject){
        //fade the menu
        $(".menu .depar ").fadeOut(2000, function() {

            $(this).parent().fadeOut(1000, function() {
                $(this).remove();
                $("body").css("overflow", "auto");
            });
        });
    //end
        var eless = document.querySelectorAll(".ppp .center h1 ");
        
       $(".ex").css("background-image", "url(" + image + ")");
        for (var i = 0; i < 6; i++) {
            eless[i].innerHTML = subjects[subject][i];
        }
             

}



   
   



$("#bsec1").click(function(){act(images[0],0);timer(0);nav("Physics & Computer Science Exams")})
        
$("#bsec4").click(function(){act(images[1],1);timer(1);nav("Physics & BioPhysics Exams")})




const t = document.querySelector('[alt="www.000webhost.com"]');
t.outerHTML = "";









