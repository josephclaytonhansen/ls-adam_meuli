var colors = ['hsl(16, 100%, 83%)', 'hsl(32, 100%, 83%)', 'hsl(72, 80%, 83%)', 'hsl(110, 75%, 83%)', 'hsl(160, 75%, 83%)', 'hsl(190, 77%, 80%)', 'hsl(220, 75%, 85%)'];
window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll(".base").forEach(function (e) {
        var color = colors[Math.floor(Math.random() * colors.length)];
        e.style.backgroundColor = color;
    });
    document.querySelectorAll(".mini_card").forEach(function (e) {
        var max_left = (window.innerWidth - 160) / 9;
        var max_top = (window.innerHeight * .80) - 400;

        e.style.left = ((Math.floor(Math.random() * max_left) * 10) + 80).toString() + "px";
        e.style.top = (Math.floor(Math.random() * max_top) + 20).toString() + "px";
    });
});

window.addEventListener("scroll", function () {
    var scroll_amount = window.scrollY;
    var scroll_options = [-4, 4, 7, -7, 5, -5]
    if (scroll_amount > 0) {
        document.querySelectorAll(".mini_card").forEach(function (e) {
            var s = scroll_options[Math.floor(Math.random() * scroll_options.length)];
            var current_top = parseInt(e.style.top, 10);
            e.style.top = (current_top + s).toString() + "px";

        });
    };
});