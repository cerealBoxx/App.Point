var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.addNote = kendo.observable({
        save: function () {
            //TODO create json from add-note.html(#user-content)
            //TODO push json to database
            console.log("note added");
        },
        addImage: function () {
            navigator.camera.getPicture(success, error, config);
        },
        addContact: function () {
            console.log("contact added");
        },
    });
}(app.viewmodels));



var success = function (data) {
    $("#images")
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