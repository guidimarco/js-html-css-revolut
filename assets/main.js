$("document").ready(function() {

    // dropdown-function: on click
    $(".dropdown-item").mouseenter(function() {
        $(this).children(".dropdown-menu").addClass("visible");
    });
    $(".dropdown-item").mouseleave(function() {
        $(this).children(".dropdown-menu").removeClass("visible");
    });
});
