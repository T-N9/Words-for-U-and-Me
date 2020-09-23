<?php
    $dbServername="sql208.epizy.com";
    $dbUsername="epiz_25851046";
    $dbPassword="ITlzzQLJyX7";
    $dbName="epiz_25851046_wordsumedb";
    
    $conn=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($conn,'utf8');