user=prompt ('adınızı giriniz')
if (user !=null) {
    document.querySelector('#myName').innerHTML+= user
}
else {
    alert('adınızı girmediniz')
    window.location.reload()
}
function times () {
    let date = new Date ()
    let hours = date.getHours()
    let minute =date.getMinutes()
    let seconds =date.getSeconds() 
    let zone = "am"
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    if (hours>12) {

        zone="pm"
    }

   hours = (hours < 10) ? "0" + hours : hours;
   minute = (minute < 10) ? "0" + minute : minute;
   seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = gunler[date.getDay()] + hours + ':' + minute + ":" + seconds + ":" + zone

    document.getElementById("myClock").innerText = time; 
    var t = setTimeout( times, 1000);

}

times();