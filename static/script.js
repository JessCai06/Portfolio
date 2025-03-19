

function addYear(){
    console.log("add year");
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
function validate(){
    const E = document.getElementById("name_input_contact");
    const B = document.getElementById("email_input_contact");
    if (E.value != "" && B.value!="")
    {
        const M = document.getElementById("validate_message");
        M.innerHTML= "Your form was sucessfully submitted ";
    }
    else{
        const M = document.getElementById("validate_message");
        M.innerHTML= "Please fix your form";
    }
    console.log("this is E"+E.innerHTML.value);
}

function show_more_fun(){
    console.log("I promise this function exists");
    const show_more = "<li>anything outdoors really - hiking camping biking</li><li>binging movies i've already watched with my friends who haven't seen it</li><li>cooking for other people</li><li>going to antique shops and flea markets</li><li>snorkeling hehe</li>";
    const button = document.getElementById("showmore_fun");
    const E = document.getElementById("fun_list_id");
    if (E!= null && E.innerHTML == show_more){
        E.innerHTML = "";
        button.textContent = "show more";
    }
    else if (E!= null){
        E.innerHTML = show_more;
        button.textContent = "show less";
    }
}

window.onload = function () {
    greetingFunc();
    addYear();
    show_more_fun();
};