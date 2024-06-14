document.addEventListener('DOMContentLoaded', function() {
    // Create the <link> element for canonical URL
    var canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://suaghemiennam.com/';

    // Insert the <link> element right after the <body> tag
    document.body.insertAdjacentElement('afterbegin', canonicalLink);
});
