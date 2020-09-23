<?php session_start(); ?>
<?php include_once "includes/dbh.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/menu.css">
    <script src="dist/js/jquery.js"></script>
    <title>Words for you and me</title>
</head>
<body id="menu_body">
<a href="index.php"><button class=all_btn name=back id=back_btn type=submit><</button></a>
<div id="menu_div">
    <a href="quotes.php">
        <div id="cate1">
            <p id="cate1_p">လုံးဝလက်မလျှော့ လိုက်ပါနဲ့</p>
        </div>
    </a>
    <a href="#">
        <div id="cate1">
            <p id="cate1_p">Coming Soon</p>
        </div>
    </a>
    <a href="#">
        <div id="cate1">
            <p id="cate1_p">Coming Soon</p>
        </div>
    </a>
    <a href="#">
        <div id="cate1">
            <p id="cate1_p">Coming Soon</p>
        </div>
    </a>
    <a href="#">
        <div id="cate1">
            <p id="cate1_p">Coming Soon</p>
        </div>
    </a>
    <a href="#">
        <div id="cate1">
            <p id="cate1_p">Coming Soon</p>
        </div>
    </a>
</div>

<?php
    $_SESSION['qnum']=1;
?>
<script src="dist/js/first.js"></script>
</body>
</html>