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

function prompt(name) {
  if (name == "default" {
    user('root');
    loc('~');
    localStorage.setItem('prompt', localStorage.getItem('username')+":"+localStorage.getItem('location')+"$");
  }
  else {
    localStorage.setItem('prompt', args);
  }
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}

function help() {
  block_log("There are several funcitons that you can use here!");
  block_log("'clock' or 'time' will return the current time");
  block_log("'google' or 'g' will send you to google homepage. Or you can add text and search right from here!")
  block_log("'user' + your name will change the default username from root to your name")
  block_log("'locl' + a location will change the default ~ to whatever you typed.")
  block_log("You can fully customize your prompt by typing 'prompt' + whatever you like")
  block_log("You can always switch back by typing 'prompt default'")
}
