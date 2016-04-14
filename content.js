browser.runtime.onMessage.addListener(function () {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        let img = images[i];

        img.style.transform = 'scaleX(-1)';
    }
});
