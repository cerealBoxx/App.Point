var ds = {};
var appMain = appMain || {};
var notes = {};
(function (scope) {
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        appMain.everlive = new Everlive("cZswy0ZulYmXBaML");

        notes = [
            {

                title: "Hello world !",
                content: "Lorem ipsum ala bala",
                date: "1/1/2001",
                time: '',
                imageData: '',
                alarm: true
                },
        ];

        // Build the data source for the items
        ds = new kendo.data.DataSource({
            data: notes
        });
        
        new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat',
            initial: 'views/main.html'
        });
    }, false);
}());