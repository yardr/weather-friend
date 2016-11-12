$(document).ready(function() {
    $("#myBtn").click(function(){
        $("#myModal").modal();
        $(".element").typed({
            strings: ["Hello friend!", "Please leave your comment below"],
            typeSpeed: 30,
            backDelay: 500
        });
    });
    })