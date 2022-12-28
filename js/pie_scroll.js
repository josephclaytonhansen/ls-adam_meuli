window.addEventListener("scroll", function () {
    var scroll_amount = window.scrollY;
    var height = window.innerHeight;
    var scroll_p = (scroll_amount / height) * 100;
    console.log(scroll_p)



    //start scrolling the pie at 40% 

        if (scroll_p > 44 && scroll_p < 310) {
            document.getElementById("pie_container").style.top = scroll_amount - 452 + "px";
        };

        if (scroll_p > 205){
            document.getElementById("pie_number").innerText = "2";
        };

        if (scroll_p < 205){
            document.getElementById("pie_number").innerText = "1";
        };

});