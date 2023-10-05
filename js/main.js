var dateEnd = new Date("2025-03-05"),
  dateNow = new Date(),
  date = Math.floor(dateEnd.getTime() - dateNow.getTime() / 1000);

function countTimer() {
  var dateLeft = date,
    dateTemp = 0;

  dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
  dateLeft -= dateTemp * 24 * 60 * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;

  dateTemp = Math.floor(dateLeft / (60 * 60));
  dateLeft -= dateTemp * 60 * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;
  document.querySelector(".hours").innerHTML = dateTemp;

  dateTemp = Math.floor(dateLeft / 60);
  dateLeft -= dateTemp * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;
  document.querySelector(".minutes").innerHTML = ":" + dateTemp;

  if (dateLeft < 10) dateLeft = "0" + dateLeft;
  document.querySelector(".seconds").innerHTML = ":" + dateLeft;

  date--;
}

setInterval(countTimer, 1000);
