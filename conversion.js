/*eslint-env browser*/

//length conversion
var length = function (feet, meter) {
    document.getElementById("length_result").innerHTML =
        feet + " ft = " + meter + " m";
};

document.getElementById("m_to_f").onclick = function () {
    var m = document.getElementById("length_convert").value;
    //validity check
    if (isNaN(m))
        alert ("Please enter a number");
    //toFixed limits result to 2 decimal places
    else length((m * 3.28084).toFixed(2), m);
          
};

document.getElementById("f_to_m").onclick = function () {
    var f = document.getElementById("length_convert").value;
    //validity check
    if (isNaN(f))
        {alert ("Please enter a number");}
    //toFixed limits result to 2 decimal places
    else length(f, (f * 0.3048).toFixed(2));

};


//speed conversion
var speed = function (mph, kmh) {
    document.getElementById("speed_result").innerHTML =
        mph + " mph = " + kmh + " km/h";
};

document.getElementById("k_to_miles").onclick = function () {
    var k = document.getElementById("speed_convert").value;
    //validity check
    if (isNaN(k))
        alert ("Please enter a number");
    //toFixed limits result to 2 decimal places
    else speed((k * 0.621371).toFixed(2), k);
};

document.getElementById("miles_to_k").onclick = function () {
    var miles = document.getElementById("speed_convert").value;
    //validity check
    if (isNaN(miles))
        alert ("Please enter a number");
    //toFixed limits result to 2 decimal places
    else speed(miles, (miles * 1.60934).toFixed(2));
};


//force conversion
var force = function (pound, newton) {
    document.getElementById("force_result").innerHTML =
        pound + " lbf = " + newton + " N";
};

document.getElementById("n_to_lbf").onclick = function () {
    var n = document.getElementById("force_convert").value;
    //validity check
    if (isNaN(n))
        alert ("Please enter a number");
    //toFixed limits result to 2 decimal places
    else force((n * 0.224809).toFixed(2), n);
};

document.getElementById("lbf_to_n").onclick = function () {
    var lbf = document.getElementById("force_convert").value;
    //validity check
    if (isNaN(lbf))
        alert ("Please enter a number");
    //toFixed limits result to 2 decimal places
    else force(lbf, (lbf * 4.44822).toFixed(2));
};