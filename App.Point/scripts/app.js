var app = (function(){

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        everlive = new Everlive("cZswy0ZulYmXBaML");
        
        ds = new kendo.data.DataSource({
            data: [
                {

                    title: "Hello world !",
                    content: "Lorem ipsum ala bala",
                    date: "1/1/2001",
                    time: '',
                    imageData: '',
                    alarm: true
                },
        ]
        });
                
        var onBackKeyDown = function(e) {
        e.preventDefault();

        navigator.notification.confirm('Do you really want to exit?', function (confirmed) {
            var exit = function () {
                navigator.app.exitApp();
            };

            if (confirmed === true || confirmed === 1) {
                // Stop EQATEC analytics monitor on app exit
                if (analytics.isAnalytics()) {
                    analytics.Stop();
                }
                AppHelper.logout().then(exit, exit);
            }
        }, 'Exit', ['OK', 'Cancel']);
    };

        var onDeviceReady = function () {
            // Handle "backbutton" event
            document.addEventListener('backbutton', onBackKeyDown, false);

            navigator.splashscreen.hide();

            if (analytics.isAnalytics()) {
                analytics.Start();
            }

            // Initialize AppFeedback
            if (app.isKeySet(appSettings.feedback.apiKey)) {
                try {
                    feedback.initialize(appSettings.feedback.apiKey);
                } catch (err) {
                    console.log('Something went wrong:');
                    console.log(err);
                }
            } else {
                console.log('Telerik AppFeedback API key is not set. You cannot use feedback service.');
            }
        };
        
        document.addEventListener('deviceready', onDeviceReady, false);

        new kendo.mobile.Application(document.body, {
            transition: 'slide'
        });

        var AppHelper = {

            resolvePictureUrl: function (id) {
                if (id && id !== emptyGuid) {
                    return el.Files.getDownloadUrl(id);
                } else {
                    return '';
                }
            },

            // Date formatter. Return date in d.m.yyyy format
            formatDate: function (dateString) {
                return kendo.toString(new Date(dateString), 'MMM d, yyyy');
            },
        };
    }, false);
}());