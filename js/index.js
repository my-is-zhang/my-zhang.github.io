$(function () {
    setInterval(function () {
        function getColor() {
            var r = parseInt(Math.random() * 256);
            var g = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        };
        $('div,h1').css('color', getColor);
    }, 500)
})