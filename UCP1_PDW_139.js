function updateDate() {
    var dateElement = document.getElementById("currentdate");
    var currentDate = new Date();
  
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    var dateString = currentDate.toLocaleString('en-US', options);
    dateElement.innerHTML = dateString;
  }
  

  function updateTime() {
    var timeElement = document.getElementById("currenttime");
    var currentTime = new Date();
  
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
  
    var timeString = currentTime.toLocaleString('en-US', options);
    timeElement.innerHTML = timeString;
  }

  function updateGreeting() {
    var greetingElement = document.getElementById("greeting");
    var currentHour = new Date().getHours();
    var greeting = "";
  
    if (currentHour < 10) {
        greeting = "Selamat Pagi, Sarah!⛅";
    } else if (currentHour < 15) {
      greeting = "Selamat Siang, Sarah!🌞";
    } else if (currentHour < 18) {
        greeting = "Selamat Sore, Sarah!⛅";
    } else if (currentHour < 24) {
        greeting = "Selamat Malam, Sarah!🌜";
    } else if (currentHour < 3){
      greeting = "Selamat Malam, Sarah!🌜";
    } else {
      greeting = "Welcome, Sarah!🙌";
    }
  
    greetingElement.innerHTML = greeting;
  }

  window.onload = function() {
    updateDate();
    updateTime();
    updateGreeting();
  };