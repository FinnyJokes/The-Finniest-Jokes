function getDateTime() {
        var now     = new Date();
        var year    = now.getFullYear();
        var month   = now.getMonth()+1;
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds();
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }
        var dateTime = month+'/'+day+'/'+year+' '+hour+':'+minute+':'+second;
         return dateTime;
    }

    // realtime clock
    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("digital-clock").innerHTML = currentTime;
    }, 1000);

// alert in english
function display0() {
   alert("WASSUP!!!! This SHOULD brighten your day! (No promises tho!)");
   alert("BTW Have fun reading");
}

//alert in spanish
function display1() {
     alert("¿Qué pasa? ¡Esto debería alegrarte el día! (Aunque no hay promesas)");
     alert("Por cierto, ¡diviértete leyendo!");
}