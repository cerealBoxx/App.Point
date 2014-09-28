var app = app || {};
app.viewmodels = app.viewmodels || {};
var appMain = appMain || {};
var imageData = '';
var ds = ds || {};
(function (scope) {
    'use strict';
    scope.addNote = kendo.observable({
        title: '',
        content: '',
        date: '',
        time: '',
        alarmOn: false,
        addImage: function () {
            var success = function (data) {
                //$("#user-images").append('-Uploading to DB-');
                
                //encoded image data, put it in <img src=imageData> to display
                imageData = "data:image/jpeg;base64, " + data;     
                var img = $('<img>'); 
                img.attr('src', imageData);
                $("#user-images").append(img);
                //$("#user-images").append('-Uploaded-');
            };

            var error = function () {
                navigator.notification.alert("Unfortunately we could not add the image");
            };
            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };
            //$("#user-images").append('-Calling getPicture-');
            navigator.camera.getPicture(success, error, config);
        },
        addContact: function () {
            $("#user-images").append('contact added ');
        },
        save: function () {
            var note = {
                title: this.get('title'),
                content: this.get('content'),
                date: this.get('date'),
                time: this.get('time'),
                alarm: this.get('alarmOn'),
                imageData: imageData
            };
            ds.push(note);
            console.log(ds);
        },
    });
}(app.viewmodels));