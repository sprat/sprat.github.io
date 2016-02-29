(function() {
    'use strict';

    function initEmailLinks() {
        var emailLink = document.querySelector('a.email'),
            encodedEmail = emailLink.innerHTML,
            email = atob(encodedEmail);

        emailLink.innerHTML = email;
        emailLink.setAttribute('href', 'mailto:' + email);
    }

    function initDiaporamas() {
        $('.diaporama').fotorama({
            width: '100%',
            allowfullscreen: true,
            nav: 'thumbs',
            loop: true
        });
    }

    initEmailLinks();
    initDiaporamas();
}());