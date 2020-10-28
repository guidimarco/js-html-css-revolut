$("document").ready(function() {

    // DROPDOWN-FUNCTION
    // mouse enter --> dropdown visible
    $(".dropdown-item").mouseenter(function() {
        $(this).children(".dropdown-menu").addClass("visible");
    });
    // mouse leave --> dropdown not-visible
    $(".dropdown-item").mouseleave(function() {
        $(this).children(".dropdown-menu").removeClass("visible");
    });

    // HAMBURGER-FUNCTION
    // on click --> on/off
    $(".hamburger-menu i").click(function() {
        // icon hamburger-cross: on-off
        $(".hamburger-menu i").toggleClass("visible");
        // // header-menu --> visible
        // $(".header-menu").toggleClass("visible");
    });
});
