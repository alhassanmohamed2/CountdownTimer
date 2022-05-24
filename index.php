<?php
  $host = 'localhost';
    $user='id15589985_alhassan';
    $password= '[ZA5#jZYMk^|&YR@';
    $dbname ='id15589985_hassan';
    $connection = mysqli_connect($host,$user,$password,$dbname);
    if(mysqli_connect_errno()){
        $msg ="Database connection failed";
        $msg .= mysqli_connect_error();
        $msg .= "(" . mysqli_connect_errno() . ")";
        exit($msg);
    }

    $sql = "INSERT INTO visitors(time) VALUES (CURRENT_TIME())";
	mysqli_query($connection, $sql);
	$sql2="SELECT * FROM visitors ORDER BY id DESC LIMIT 1";
    $no_visitors=mysqli_query($connection, $sql2);
    $number=mysqli_fetch_assoc($no_visitors);

 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=yes">
    <link rel="stylesheet" href="style.css?v=<?php echo time() ?>">
    <link rel="icon" type="image/png" href="icon.png"/>

   <!-- <link rel="stylesheet" href="bootstrap.min.css"> -->
    <title>Faculty Exams</title>
</head>

<body>
<nav>
       
    </nav>
    <section class="menu">
        <div class="ani"></div>
        <div class="depar" >
             <button id="bsec5" class="bsec" >
                        Physics 

                    </button>
            <button id="bsec1" class="bsec">
                        Physics & C.S.
                    </button>
            <button id="bsec2" class="bsec" >
                        Physics & Maths

                    </button>
            <button id="bsec3" class="bsec" >
                        Physics & Chemistry

                    </button>
            <button id="bsec4" class="bsec" >
                        Physics & Biophysics

                    </button>
                           

        </div>
    </section>
    <section class="over-load">
        <div class="end"></div>
        <div class="n"></div>
    </section>
    <div class="ppp">
        <div class="center">
            <h1></h1>
            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div class="center">

            <h1></h1>

            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div class="center">

            <h1></h1>

            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div class="center">

            <h1></h1>

            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div class="center">

            <h1></h1>

            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div class="center">

            <h1></h1>

            <ul>
                <li><span class="days"></span>days</li>
                <li><span class="hours"></span>Hours</li>
                <li><span class="minutes"></span>Minutes</li>
                <li><span class="seconds"></span>Seconds</li>
            </ul>
        </div>
    </div>

               <div class="ex"></div>

      <p class="vis">No. Of Visitors = <?= $number['id'] ?></p>

    
</body>
<script src="jquery-3.5.1.min.js?v= <?= time(); ?>"></script>
<script src="script.js?v=<?= time(); ?>"></script>

</html>