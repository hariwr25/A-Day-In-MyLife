function updateDateTime() {
    var currentDate = new Date();
    console.log(currentDate);
    var greeting = "";
    var hours = currentDate.getHours();

    if (hours < 12) {
      greeting = "Halo, Selamat Pagi Hari";
    } else if (hours < 18) {
      greeting = "Halo, Selamat Siang Hari";
    } else {
      greeting = "Halo, Selamat Malam Hari";
    }

    var salutationElement = document.getElementById("salutation");
    salutationElement.innerText = greeting;

    var dateTimeElement = document.getElementById("date-time");
    dateTimeElement.innerText = currentDate.toLocaleString();
  }

  setInterval(updateDateTime, 1000);
