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
        var emailLink = document.querySelector('a.email'),
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


/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74713858-1', 'auto');
ga('send', 'pageview');