<?php session_start(); ?>
<?php include_once "includes/dbh.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/first.css">
    <script src="dist/js/jquery.js"></script>
    <title>Words for you and me</title>
</head>

<body id="first_body">
<div id="welcome_div">
    <h2>Words for U & Me</h2>
    <div id="left_div">
        <p id="motto">Stay hydrated<br id="if">for your body.<br>Stay motivated<br id="if">for your mind.</p>
    </div>
    <div id="right_div">
        <a href="menu.php"><button class="w_btn" name="category" id="cate_btn">Choose Category</button></a><br>
        <button class="w_btn" name="random" id="random_btn" type="submit">Quote for Now</button><br>
        <button class="w_btn" name="credits" id="credits_btn" type="submit">Credits</button>
        <button class="w_btn" name="aboutus" id="aboutus_btn" type="submit"><p id="abt">About Us</p></button>
    </div>
    <p id="description">Words for you and me &copy; 2020<br><br>
    <p id="dev">Developed by <span id="fom">Find a way Or Make one</span></p></p>
</div>
<p id="descriptionM">Words for you and me &copy; 2020<br><br>
<p id="devM">Developed by <span id="fomM">Find a way Or Make one</span></p></p>
<?php
    $_SESSION['qnum']=1;
?>
<div class="modal" id="random_modal">
    <div class="modal-content">
        <span class="close">&times;</span><br><br>
        <?php
            $random_quote=mt_rand(1,73);
            $sql="SELECT * FROM dgu WHERE dgu_id=$random_quote;";
                $result=mysqli_query($conn,$sql); #connection to database
                $resultCheck=mysqli_num_rows($result); #checking data is available or not
                // print_r($_SESSION['qnum']);
                
                if($resultCheck>0){
                    while($row=mysqli_fetch_assoc($result)){
                        echo "<div id=data_place><p id=myan_data>".$row['myan_data']."</p></div><br><p id=person_data>-".$row['person']."</p><br>";
        
                    }
                }
        ?>
        <!-- <p>Some text in the Modal..</p> -->
    </div>
</div>
<div class="modal" id="credits_modal">
    <div class="modal-content">
        <span class="close">&times;</span><br><br>
        <h3>Credits</h3>
        <p id="credits_p"><span class="credits_attr">Web Development- </span><br id="litt">Find a way or Make One(<b>FOM<b>)<br>
        <span class="credits_attr">Books- </span><br id="litt">လုံးဝလက်မလျှော့လိုက်ပါနဲ့ by <a class="authors" href="https://www.facebook.com/aung.sithar" target="_blank">အောင်စည်သာ<a><br>
        <span class="credits_attr">Bg Image- </span><a class="authors" href="https://www.pixel4k.com/small-memory-4k-60763.html" target="_blank">pixel4k</a>
        <h3>ကျေးဇူးတင်လွှာ</h3>
        <p id="credits_p">လုံးဝလက်မလျှော့လိုက်ပါနဲ့ စာအုပ်မှ dataများကို websiteတွင် ထည့်သွင်းအသုံးပြုခွင့်ပေးသော<br id="litt">ဆရာ အောင်စည်သာ ကို ကျေးဇူးအထူးတင်ရှိပါသည်။</p>
    </p>
    </div>
</div>
<div class="modal" id="aboutus_modal">
    <div class="modal-content">
        <span class="close">&times;</span><br><br>
        <h3>About Us</h3>
        <p id="aboutus_p"><b>Words for you and me<b> website သည် နယ်ပယ်အရပ်ရပ်တွင် နာမည်ကြီးထင်ရှားသော လူပုဂ္ဂိုလ်တို့၏ အဆိုအမိန့်များကို မြန်မာဘာသာဖြင့်လည်းကောင်း
    Englishဘာသာဖြင့်လည်းကောင်း စုစည်းတင်ပြထားသော နေရာတစ်နေရာဖြစ်ပါသည်။</p>
    </div>
</div>

<script src="dist/js/first.js"></script>
</body>
</html>