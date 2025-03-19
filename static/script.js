

function addYear(){
    var d = new Date();
    var h = d.getFullYear();
    console.log(h);
    const E = document.getElementById("copyYear");
    E.innerHTML = ""+h+"";
}

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    const E = document.getElementById("greetings");
    let greeting = "";

    if (h < 5) {
        greeting = "Good night";
    } else if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    E.innerHTML = `${greeting}! I am Jessica`;
}
function validate() {
                const E = document.getElementById("message");
                    if (E.innerHTML == show_more) {
                        E.innerHTML = "<p style=\"red\">validated!<\p>";
                    }
                }

function reveal(){
    const show_more = "I like coffee and cornbread.";
    const button = document.getElementById("showmore");
    const E = document.getElementById("fun show more text");
    if (E.innerHTML == show_more){
        E.innerHTML = "";
        button.textContent = "show more";
    }
    else{
        E.innerHTML = show_more;
        button.textContent = "show less";
    }
}
function show_more_fun(){
    alert("hi");
    const show_more = "<li>anything outdoors really - hiking camping biking</li><li>binging movies i've already watched with my friends who haven't seen it</li><li>cooking for other people</li><li>going to antique shops and flea markets</li><li>snorkeling hehe</li>";
    const button = document.getElementById("showmore_fun");
    const E = document.getElementById("fun_list_id");
    if (E.innerHTML == show_more){
        E.innerHTML = "";
        button.textContent = "show more";
    }
    else{
        E.innerHTML = show_more;
        button.textContent = "show less";
    }
}

window.onload = greetingFunc;
window.onload = addYear;