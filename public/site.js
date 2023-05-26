(function() {
    'use strict';

    function initMenu() {
        $('.main-menu').sticky({zIndex: 1});
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
