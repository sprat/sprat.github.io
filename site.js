(function() {
    'use strict';

    function initMenu() {
        $('.main-menu').sticky();
    }

    function rot13(s) {
        return s.replace(/[a-zA-Z]/g, function (c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }

    function initEmailLinks() {
        var emailLink = document.querySelector('a[itemprop="email"]'),
            encodedEmail = emailLink.innerHTML,
            email = rot13(encodedEmail);

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

    initMenu();
    initEmailLinks();
    initDiaporamas();
}());