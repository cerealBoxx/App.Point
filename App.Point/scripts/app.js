var ds = ds || {};
var appMain = appMain || {};
(function (scope) {
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        appMain.everlive = new Everlive("cZswy0ZulYmXBaML");
        console.log(appMain.everlive)
        ds = new kendo.data.DataSource({
            data: [
                {
                    title: "Hello world !",
                    content: "Lorem ipsum ala bala",
                    date: "1/1/2001"
                },
                {
                    title: "Some title here",
                    content: "Lorem ipsum ala bala",
                    date: "1/1/1991"
                }
        ]
        });
        
        new kendo.mobile.Application(document.body, {
            transition: 'slide'
        });
        
        
        
    }, false);
}());