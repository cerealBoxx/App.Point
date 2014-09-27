var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.addNote = kendo.observable({
        save: function () {
            //TODO create json from add-note.html(#user-content)
            //TODO push json to database


            function loadPhotos() {
                everlive.Files.get().then(function (data) {
                    var files = [];
                    data.result.forEach(function (image) {
                        files.push(image.Uri);
                    });
                    $("#images").kendoMobileListView({
                        dataSource: files,
                        template: "<img src='#: data #'>"
                    });
                });
            }
            loadPhotos();

            everlive.Files.create({
                Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                ContentType: "image/jpeg",
                base64: data
            }).then(loadPhotos);
            console.log("note added");
        },
        addImage: function () {
            var success = function (data) {
                console.log('wtf');
                $("#user-images")
                    .data("kendoMobileListView")
                    .prepend(["data:image/jpeg;base64," + data]);

            };
            var error = function () {
                navigator.notification.alert("Unfortunately we could not add the image");
            };
            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };
            navigator.camera.getPicture(success, error, config);
        },
        addContact: function () {
            console.log("contact added");
        },
    });
}(app.viewmodels));