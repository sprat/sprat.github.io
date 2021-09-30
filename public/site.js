(function() {
    'use strict';

    function initMenu() {
        $('.main-menu').sticky();
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
    initDiaporamas();
}());
