var ds = ds || {};
(function () {
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
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
        
        var everlive = new Everlive("cZswy0ZulYmXBaML");
        
    }, false);
}());