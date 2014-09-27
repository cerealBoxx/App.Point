var dataSource = dataSource || {};
(function () {
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        dataSource = new kendo.data.DataSource({
            data: [
                {
                    title: "Jane Doe",
                    content: "Lorem ipsum ala bala"
                },
                {
                    title: "Gosho",
                    content: "Lorem ipsum"
                }
        ]
        });
        new kendo.mobile.Application(document.body, {
            transition: 'slide'
        });
    }, false);
}());