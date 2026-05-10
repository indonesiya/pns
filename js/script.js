/** AD PLACE */
$("#adbanner").appendTo(".adbanner");

// Set the overflow property on the body element to prevent scrolling
document.body.style.overflow = "hidden";
// Use a timer to enable scrolling after 5 seconds
setTimeout(function () {
    document.body.style.overflow = "auto";
}, 5000); // 5000 milliseconds = 5 seconds

/* BACK TO TOP */
const btn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

/* BLANK TARGET */
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');