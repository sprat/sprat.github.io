(function() {
    'use strict';

    var emailLink = document.querySelector('.email a'),
        encodedEmail = emailLink.innerHTML,
        email = atob(encodedEmail);

    emailLink.innerHTML = email;
    emailLink.setAttribute('href', 'mailto:' + email);
}());