var app = app || {};
app.viewmodels = app.viewmodels || {};
var appMain = appMain || {};



(function (scope) {
    'use strict';
    scope.addNote = kendo.observable({
        save: function () {
            //TODO create json from add-note.html(#user-content)
            //TODO push json to database
            $("#user-images").append('note saved ');
        },
        addImage: function () {

            var success = function (data) {
                $("#user-images").append('-Uploading to DB-');
                appMain.everlive.Files.create({
                    Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                    ContentType: "image/jpeg",
                    base64: data
                }).then(loadPhotos);
                $("#user-images").append('-Uploaded-');
            };

            var error = function () {
                navigator.notification.alert("Unfortunately we could not add the image");
            };
            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };
            $("#user-images").append('-Calling getPicture-');
            navigator.camera.getPicture(success, error, config);
        },
        addContact: function () {
            loadPhotos();
            $("#user-images").append('contact added ');
        }
    });

    function loadPhotos() {
        $("#user-images").append('-Loading images from Db-');
        appMain.everlive.Files.get().then(function (data) {
            var files = [];
            data.result.forEach(function (image) {
                files.push(image.Uri);
            });
            $("#user-images").kendoMobileListView({
                dataSource: files,
                template: "<img src='#: data #'>"
            });
            $("#user-images").append('-Loaded-');
        });
    }
}(app.viewmodels));