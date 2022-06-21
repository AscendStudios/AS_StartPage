// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

function user(name) {
  localStorage.setItem('username', name);
  localStorage.setItem('prompt', localStorage.getItem('username')+":"+localStorage.getItem('location')+"$");
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}

function loc(name) {
  localStorage.setItem('location', name);
  localStorage.setItem('prompt', localStorage.getItem('username')+":"+localStorage.getItem('location')+"$");
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}

function prompt(args) {
  if (args == "default" || args == undefined) {
    user('root');
    loc('~');
    localStorage.setItem('prompt', localStorage.getItem('username')+":"+localStorage.getItem('location')+"$");
  }
  else {
    localStorage.setItem('prompt', args);
  }
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}
