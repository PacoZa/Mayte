$(document).ready(function() {
    // Objeto que almacena las contraseñas y sus destinos
    const PASSWORDS = {
        "may": "home.html",
        "25/06/25": "heart.html",
        "princesa": "juego.html"
    };

    const showPasswordPrompt = () => {
        Swal.fire({
            title: 'Ingresa la contraseña',
            input: 'password',
            inputPlaceholder: 'Escribe aquí la contraseña',
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: 'Acceder',
            showLoaderOnConfirm: true,
            preConfirm: (password) => {
                const destination = PASSWORDS[password];
                if (!destination) {
                    Swal.showValidationMessage('Contraseña incorrecta. Intenta de nuevo.');
                    return false;
                }
                return destination;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const destinationUrl = result.value;
                const urlWithMusic = destinationUrl === 'home.html' ? `${destinationUrl}?play_music=true` : destinationUrl;
                window.location.href = urlWithMusic;
            }
        });
    };

    $('#openAlertBtn').on('click', function() {
        showPasswordPrompt();
    });

});
