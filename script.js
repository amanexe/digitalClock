function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = mins;
  document.getElementById("sec").innerHTML = secs;
  document.getElementById("ampm").innerHTML = ampm;
}
setInterval(updateTime, 1000);

updateTime();
