var ds = ds || {};
var notes = {};
var everlive = {};
var app = app || {};

(function () {
    
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        everlive = new Everlive("cZswy0ZulYmXBaML");
        ds = new kendo.data.DataSource({
            transport: {
                read: {
                    url: 'https://api.everlive.com/v1/cZswy0ZulYmXBaML/Notes',
                    dataType: "jsonp"
                },
            },
            schema: {
                data: "Result"
            }
        });
        app.mobileApp = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat',
            initial: 'views/main.html'
        });
    }, false);
}());