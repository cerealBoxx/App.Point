var ds = {};
var app = app || {};
var notes = {};
(function (scope) {
    document.addEventListener('deviceready', function (scope) {
        navigator.splashscreen.hide();
       scope.everlive = new Everlive("cZswy0ZulYmXBaML");
        console.log(scope.everlive);
       scope.mobileApp = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            skin: 'flat',
            initial: 'views/main.html'
        });

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
        //ds = new kendo.data.DataSource({
          //  data: notes
        //});
        
        
    }, false);
}(app));