var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.noteDetails = kendo.observable({
        show: function (e) {
            noteUid = e.view.params.uid;
            note = ds.getByUid(noteUid);
            $('#details-content').append(note.title);
        },
    });
}(app.viewModels));