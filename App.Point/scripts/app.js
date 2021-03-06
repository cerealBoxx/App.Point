var ds = ds || {};
var tempDs = tempDs || {};
var notes = {};
var everlive = {};
var app = app || {};
var kendoMobileApp = kendoMobileApp || {};

(function () {
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        everlive = new Everlive("cZswy0ZulYmXBaML");
        ds = new kendo.data.DataSource({
            type: 'everlive',
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
        kendoMobileApp = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            initial: 'views/main.html'
        });
        document.addEventListener("offline", function () {
            kendoMobileApp.navigate('views/offline.html');
        }, false);
        document.addEventListener("online", function () {
            kendoMobileApp.navigate('views/main.html');
        }, false);
    }, false);
}());