window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("conNav").style.padding = "20px 50px";
        document.getElementById("conNavImage").style.width = "50px";
    } else {
        document.getElementById("conNav").style.padding = "25px 50px";
        document.getElementById("conNavImage").style.width = "90px";
    }
    document.getElementById("conNavX").style.width = "0%";
}

const openExtendedNav = () => {
    document.getElementById("conNavX").style.width = `100%`;
}

const closeExtendedNav = () => {
    document.getElementById("conNavX").style.width = "0%";
}




document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".con-goals-card");

    containers.forEach(function (container) {
        container.addEventListener("mouseover", function () {
            var imgHolder = container.querySelector(".con-goals-card-img");
            if (imgHolder) {
                imgHolder.style.transform = "scale(1.2)";
            }
        });

        container.addEventListener("mouseout", function () {
            var imgHolder = container.querySelector(".con-goals-card-img");
            if (imgHolder) {
                imgHolder.style.transform = "scale(1)";
            }
        });
    });
});