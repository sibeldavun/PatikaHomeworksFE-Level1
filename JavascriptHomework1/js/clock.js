function getDayOfTheWeek(dayIndex) {
    switch (dayIndex) {
      case 0:
        return "Pazar";
      case 1:
        return "Pazartesi";
      case 2:
        return "Salı";
      case 3:
        return "Çarşamba";
      case 4:
        return "Perşembe";
      case 5:
        return "Cuma";
      case 6:
        return "Cumartesi";
    }
  }
  
  function showTime() {
    const date = new Date();

    var day = getDayOfTheWeek(date.getDay());
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

  
    const time = hours + ":" + minutes + ":" + seconds + " " + day;

    var element = document.getElementById("myClock");

    element.innerText = time;
  
    setTimeout(showTime, 1000);
  }
