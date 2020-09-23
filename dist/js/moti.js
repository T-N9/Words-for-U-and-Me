var np=$('#np').html();
if(np==1){
    $('#back_btn').hide();
}
else if(np==73){
    $('#next_btn').hide();
}
var myan_q_len=$("#myan_data").html();
var myan_f_len=myan_q_len.length;
document.getElementById("qlen").innerHTML = myan_f_len;
var eng_q_len=$("#eng_data").html();
var eng_f_len=eng_q_len.length;
document.getElementById("elen").innerHTML = eng_f_len;
if(myan_f_len>40 && myan_f_len<=55){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '4%',
        'height': '160px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid red'
    }); 
}
else if(myan_f_len>280){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '1%',
        'height': '330px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
    $("#myan_data").css({
        'font-size':'180%'
    })
    $("#eng_data").css({
        'font-size':'180%'
    })
}
else if(myan_f_len>260){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '0%',
        'height': '300px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
    $("#myan_data").css({
        'font-size':'180%'
    })
    $("#eng_data").css({
        'font-size':'170%'
    })
}
else if(myan_f_len>250){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '0%',
        'height': '300px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
    $("#myan_data").css({
        'font-size':'180%'
    })
    $("#eng_data").css({
        'font-size':'170%'
    })
}
else if(myan_f_len>220){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '1%',
        'height': '310px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
}
else if(myan_f_len>210){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '0%',
        'height': '330px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
}
else if(eng_f_len>260){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '0%',
        'height': '330px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
    $("#eng_data").css({
        'font-size':'180%'
    });
}
else if(myan_f_len>200){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '0%',
        'height': '330px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
}
else if(myan_f_len>150){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '3%',
        'height': '290px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
}
else if(myan_f_len>100){
    $("#data_place").css({
        'display': 'block',
        'margin-top': '3%',
        'height': '270px',
        'border':'0.0001px solid rgba(0,0,0,0)'
        // 'border':'1px solid yellow'
    }); 
}
$("#next_btn").click(function(){
    window.location.replace("quotes.php");
});
$("#enter_btn").click(function(){
    window.location.replace("quotes.php");
});
$("#home_btn").click(function(){
    window.location.replace("index.php");
});
$("#myan_btn").css({
    'display':'none'
});
$("#eng_data").css({
    'display':'none'
});
// $("#myan_data").css({
//     'font-size':'210%'
// });
// $("#person_data").css({
//     'font-size':'210%'
// });
// function forMobileLanscape(lanscape_view){
// 	if(lanscape_view.matches){
//         if(myan_f_len>90 && myan_f_len<=100){
//             $("#data_place").css({
//                 'margin-top':'1%'
//             })
//             $("#myan_data").css({
//                 'font-size':'190%'
//             })
//         }

// }
// }
// var lanscape_view=window.matchMedia("(max-width:780.98px)");
// forMobileLanscape(lanscape_view);
// lanscape_view.addListener(forMobileLanscape);
function forMobile(mobile_view) {
    if (mobile_view.matches) { // If media query matches
        if(eng_f_len>40 && eng_f_len<=50){
            $("#eng_data").css({
                'font-size':'27px'
            });
        }
        if(eng_f_len>50 && eng_f_len<=60){
            $("#eng_data").css({
                'font-size':'25px'
            });
        }
        if(eng_f_len>60 && eng_f_len<=70){
            $("#eng_data").css({
                'font-size':'26px'
            });
        }
        if(eng_f_len>70 && eng_f_len<=80){
            $("#eng_data").css({
                'font-size':'23px'
            });
        }
        if(eng_f_len>80 && eng_f_len<=90){
            $("#eng_data").css({
                'font-size':'24px'
            });
        }
        if(eng_f_len>90 && eng_f_len<=100){
            $("#eng_data").css({
                'font-size':'27px'
            });
        }
        if(eng_f_len>100 && eng_f_len<=110){
            $("#eng_data").css({
                'font-size':'24px'
            });
        }
        if(eng_f_len>120 && eng_f_len<=130){
            $("#eng_data").css({
                
                'font-size':'24px'
                
            });
        }
        if(eng_f_len>130 && eng_f_len<=140){
            $("#eng_data").css({
                'font-size':'22px'
            });
        }

        if(eng_f_len>140 && eng_f_len<=150){
            $("#eng_data").css({
                
                'font-size':'22px'
                
            });
        }
        if(eng_f_len>150 && eng_f_len<=160){
            $("#eng_data").css({
                
                'font-size':'22px'
                
            });
        }
        if(eng_f_len>180 && eng_f_len<=190){
            $("#eng_data").css({
                
                'font-size':'20px'
                
            });
        }
        if(eng_f_len>200 && eng_f_len<=210){
            $("#eng_data").css({
                
                'font-size':'19px'
                
            });
        }
        if(eng_f_len>210 && eng_f_len<=220){
            $("#eng_data").css({
                
                'font-size':'19px'
                
            });
        }
        if(eng_f_len>250 && eng_f_len<=260){
            $("#eng_data").css({
                
                'font-size':'17px'
                
            });
        }
        if(eng_f_len>260 && eng_f_len<=270){
            $("#data_place").css({
                'height':'64%'
            });
            $("#eng_data").css({
                
                'font-size':'17px'
                
            });
        }
        if(eng_f_len>280 && eng_f_len<=290){
            $("#eng_data").css({
                
                'font-size':'17px'
                
            });
        }
        ///////////////////////////////////////////////////////////////////////////////
        if(myan_f_len>30 && myan_f_len<=40){
            $("#data_place").css({
                'height':'250px'
            });
        }
        if(myan_f_len>50 && myan_f_len<=60){
            $("#data_place").css({
                'height':'250px'
            });
            $("#myan_data").css({
                'font-size':'27px'
            });
        }
        if(myan_f_len>60 && myan_f_len<=70){
            $("#data_place").css({
                'height':'250px'
            });
            
        }
        if(myan_f_len>90 && myan_f_len<=100){
            $("#data_place").css({
                'height':'250px'
            });
            
        }
        if(myan_f_len>100 && myan_f_len<=110){
            $("#data_place").css({
                'height':'290px'
            });
            
        }
        if(myan_f_len>110 && myan_f_len<=120){
            $("#data_place").css({
                'height':'62%'
            });
            $("#myan_data").css({
                'font-size':'25px'
            });
        }
        if(myan_f_len>120 && myan_f_len<=130){
            $("#data_place").css({
                'height':'62%'
            });
            $("#myan_data").css({
                'font-size':'25px'
            });
        }
        if(myan_f_len>130 && myan_f_len<=140){
            $("#data_place").css({
                'margin-top':'1%',
                'height':'64%'
            });
            $("#myan_data").css({
                'font-size':'25px'
            });
        }
        if(myan_f_len>150 && myan_f_len<=160){
            $("#data_place").css({
                'height':'64%'
            });
        }
        if(myan_f_len>160 && myan_f_len<=170){
            $("#myan_data").css({
                'font-size':'23px'
            });
        }
        if(myan_f_len>170 && myan_f_len<=180){
            $("#data_place").css({
                'margin-top':'0%',
                'height':'65%'
            });
            $("#myan_data").css({
                'font-size':'23px'
            });
        }
        if(myan_f_len>190 && myan_f_len<=200){
            $("#data_place").css({
                'margin-top':'0%',
                'height':'65%'
            });
            $("#myan_data").css({
                
                'font-size':'22px'
               
            });
        }
        if(myan_f_len>200 && myan_f_len<=210){
            $("#data_place").css({
                'height':'62%'
            });
            $("#myan_data").css({
                
                'font-size':'20px'
                
            });
        }
        if(myan_f_len>210 && myan_f_len<=220){
            $("#data_place").css({
                'height':'62%'
            });
            $("#myan_data").css({
                
                'font-size':'20px'
                
            });
        }
        if(myan_f_len>220 && myan_f_len<=230){
            $("#data_place").css({
                'margin-top':'0%',
                'height':'65%'
            });
            $("#myan_data").css({
                
                'font-size':'20px'
                
            });
        }
        if(myan_f_len>250 && myan_f_len<=260){
            $("#data_place").css({
                'margin-top':'0'
            });
            $("#myan_data").css({
                'font-size':'18px'
            });
        }
        if(myan_f_len>260 && myan_f_len<=270){
            $("#data_place").css({
                'margin-top':'0',
                'height':'64%'
            });
            $("#myan_data").css({
                
                'font-size':'18px'
                
            });
            
        }
        if(myan_f_len>280 && myan_f_len<=290){
            $("#data_place").css({
                'margin-top':'0',
                'height':'64%'
            });
            $("#myan_data").css({
                'font-size':'18px'
            });
        }
        if(myan_f_len>=70 && myan_f_len<=95){
            $("#data_place").css({
                'height':'45%'
            });
        }
        // if(myan_f_len>120)
        if(myan_f_len>130){
            // $("#eng_data").css({
                
            //     'font-size':'26px'
                
            // });
        }
        
            // $("#eng_data").css({
                
            //     'font-size':'22px'
                
            // });
         
        // $("#data_place").css({
        //     'display': 'block',
        //     'margin-top': '4%',
        //     'height': '320px',
        //     // 'border':'0.0001px solid rgba(0,0,0,0)'
        //     'border':'1px solid cyan'
        // });
        
        // $("#eng_data").css({
        //     'font-size':'30px',
        //     'text-align': 'left'
        // });
        // $("#myan_data").css({
        //     'font-size':'150%',
        //     'text-align': 'left'
        // });
        
    } 
  }
var mobile_view=window.matchMedia("(max-width: 575.98px)");
forMobile(mobile_view);
mobile_view.addListener(forMobile);
$("#eng_btn").click(function(){
    $("#eng_btn").hide();
    $("#myan_btn").show();
    $("#eng_data").show();
    // $("#eng_data").css({
    //     'font-size':'250%'
    // });
    $("#myan_data").hide();
});
$("#myan_btn").click(function(){
    $("#eng_btn").show();
    $("#myan_btn").hide();
    $("#myan_data").show();
    
    $("#eng_data").hide();
});

