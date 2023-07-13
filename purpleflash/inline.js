function getFormatted() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var seconds = currentDate.getSeconds()
  hours = (hours < 10 ? '0' : '') + hours;
  minutes = (minutes < 10 ? '0' : '') + minutes;
  day = (day < 10 ? '0' : '') + day;
  month = (month < 10 ? '0' : '') + month;
  seconds = (seconds < 10 ? '0' : '') + seconds;
  var formattedDate = hours + ':' + minutes + ":" + seconds + ' ' + day + '.' + month + '.' + year;
  return formattedDate;
}

setInterval(function () {
  document.getElementById("clock").innerHTML = getFormatted() + " | <font style=opacity:50%>Icons by Icons8</font>"
}, 1000)

window.onload = function () {
  document.getElementById("clock").innerHTML = getFormatted()
  lbef = document.getElementById("links").innerHTML
  window.onkeydown = function () {
    document.getElementById("search-input").focus()
  }
  search_input = document.getElementById("search-input")
  document.getElementById("search-input").onchange = function () {
    if (search_input.value != undefined && search_input.value != "" && search_input.value != ".?") {
      if (search_input.value.split(".")[0] == "yt") {
        window.open("https://www.youtube.com/results?search_query=" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "sp") {
        window.open("https://open.spotify.com/search/" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "gh") {
        window.open("https://github.com/search?q=" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "yi") {
        window.open("https://pypi.org/search/?q=" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "tl") {
        window.open("https://www.tldrlegal.com/search?query=" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "cd") {
        window.open("https://pypi.org/search/?q=" + encodeURI(search_input.value.split(".")[1]));
        window.open("https://github.com/search?q=" + encodeURI(search_input.value.split(".")[1]));
        window.open("https://www.google.com/search?q=" + encodeURI(search_input.value.split(".")[1]));
      }
      else if (search_input.value.split(".")[0] == "*") {
        window.open("https://www.youtube.com/results?search_query=" + encodeURI(search_input.value.split(".")[1]))
        window.open("https://open.spotify.com/search/" + encodeURI(search_input.value.split(".")[1]))
        window.open("https://github.com/search?q=" + encodeURI(search_input.value.split(".")[1]))
        window.open("https://pypi.org/search/?q=" + encodeURI(search_input.value.split(".")[1]))
        window.open("https://www.tldrlegal.com/search?query=" + encodeURI(search_input.value.split(".")[1]))
      }
      else if (search_input.value.split(".")[0] == "w") {
        window.open("https://" + search_input.value.replace("https://", "").replace("w.", ""))
      }
      else {
        window.open("https://www.google.com/search?q=" + encodeURI(search_input.value))
      }
    }
  }
  document.getElementById("search-input").onkeyup = function () {
    if (document.getElementById("search-input").value.includes(".") || document.getElementById("search-input").value.includes("? ")) {
      document.getElementById("links").innerHTML = "yt: YouTube<br>sp: Spotify<br>gh: GitHub<br>yi: PyPi<br>tl: TLDR Legal<br>cd: Coding<br>*: Any<br>w: Open URL"
    }
    else {
      document.getElementById("links").innerHTML = lbef
    }
  }
}
