window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll(".quote p").forEach(function (e) {
        e.innerText = '"' + e.innerText+ '"';
    });
});