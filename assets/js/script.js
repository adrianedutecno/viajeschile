
// cambio de color en la barra de navegación
$(window).scroll(function () {

    if ($('#menuc').offset().top > 400) {

        $('#menuc').removeClass('bg-transparent');
        $('#menuc').addClass('bg-black');

    } else {

        $('#menuc').removeClass('bg-black');
        $('#menuc').addClass('bg-transparent');
    }

});