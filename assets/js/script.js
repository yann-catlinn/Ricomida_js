$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $("h3").on("dblclick", function() {
        $(this).css({
            color: "red",
        });
    });
    $(".card-title").on("click", function() {
        $(".card").toggle();
    });
});

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});