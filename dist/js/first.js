$("#start_btn").click(function(){
    window.location.replace("menu.php");
});
$('.close').on('click', function(){
    $('.modal').css({'display':'none'});
});
$('#random_btn').click(function() {
    $('#random_modal').css({'display':'block'});
})
$('#credits_btn').click(function() {
    $('#credits_modal').css({'display':'block'});
})

$('#aboutus_btn').click(function() {
    $('#aboutus_modal').css({'display':'block'});
})
var random= document.getElementById("random_modal");
var creditsModal = document.getElementById("credits_modal");
var aboutusModal = document.getElementById("aboutus_modal");
window.onclick = function(event) {
    if (event.target == random) {
        random.style.display = "none";
    }
    else if (event.target == creditsModal) {
        creditsModal.style.display = "none";
    }
    else if (event.target == aboutusModal) {
        aboutusModal.style.display = "none";
    }
}




