document.querySelector(".spin").addEventListener("click", function() {

    var x = 1000; //min value
    var y = 9999; //max value
    var deg = Math.floor(Math.random() * (x-y)) + y;

    document.querySelector(".box").style.transform = "rotate(" + deg +"deg)" 
});
