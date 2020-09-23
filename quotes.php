<?php session_start(); ?>
<?php include_once "includes/dbh.php"; ?>
<?php include "header.php";?>

<div id="all"><div id="main">
    <form  id="myform" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <select name="input_val" id="input_val" size="1">
            <?php 
                $getid="SELECT * FROM dgu ORDER BY dgu_id ASC;";
                $numid=mysqli_query($conn,$getid);
                while($row = mysqli_fetch_array($numid))
                {
                echo '<option class=op value="'.$row["dgu_id"].'">'.$row["dgu_id"].'</option>';
                }
            ?>
        </select>
        <button name="enter" id="enter_btn" type="submit" onclick="myFunction()">Enter</button>
    </form>

    <button name="english" id="eng_btn" type="submit" class="effect04">English</button>
    <button name="myanmar" id="myan_btn" type="submit">Myanmar</button><br>
    <?php
            if(isset($_POST['enter'])) {
                $_SESSION['qnum']=$_POST['input_val'];
            }
            if(isset($_POST['next'])) {
                $_SESSION['qnum']++;
            }
            if(isset($_POST['back'])) {
                $_SESSION['qnum']--;
            }
                $sql="SELECT * FROM dgu WHERE dgu_id=$_SESSION[qnum];";
                $result=mysqli_query($conn,$sql); #connection to database
                $resultCheck=mysqli_num_rows($result); #checking data is available or not
                // print_r($_SESSION['qnum']);
                
                if($resultCheck>0){
                    while($row=mysqli_fetch_assoc($result)){
                        echo "<p id=np>".$_SESSION['qnum']."</p>";
                        echo "<p id=pages>Page ".$_SESSION['qnum']." of 73</p>";
                        echo "<br><div id=data_place><p id=eng_data>".$row['eng_data']."</p><br><p id=myan_data>".$row['myan_data']."</p></div><br><p id=person_data>-".$row['person']."</p><br>";
                        
                    }
                }
                echo "</div><div id=btn_sp>
                        <table id=table_im>
                            <tr>
                                <td id=back_td>
                                    <form method=post>
                                        <button class=all_btn name=back id=back_btn type=submit><</button>
                                    </form>
                                </td>
                                <td>
                                    <button class=all_btn name=Home id=home_btn type=submit>H</button>
                                </td>
                                <td id=next_td>
                                    <form method=post>
                                        <button class=all_btn name=next id=next_btn type=submit>></button>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>"; 
            
            
        
        
    ?>
</div>
<p id="qlen"></p>
<p id="elen"></p>
<script src="dist/js/moti.js"></script>
<?php include "footer.php";?>