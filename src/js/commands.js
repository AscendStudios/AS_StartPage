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
  localStorage.setItem('username', name)
  name = name || 'root';
  let location = localStorage.getItem('location') || '~';
  localStorage.setItem('prompt', name + ":" + location+ "$");
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}

function loc(name) {
  localStorage.setItem('location', name);
  let uname = localStorage.getItem('username') || 'root';
  name = name || '~'
  localStorage.setItem('prompt', uname + ":"+ name + "$");
  document.getElementById("input_title").innerText = localStorage.getItem('prompt');
}

function prompt(name) {
  if (name == "default") {
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
  block_log("- time: -> Shows time");
  block_log("- google + string: -> Will search Google");
  block_log("- user + your name -> Update username");
  block_log("- loc + location -> update ~ to location");
  block_log("- prompt + string -> update the prompt ");
  block_log("- You can always switch back by typing 'prompt default'");
}
