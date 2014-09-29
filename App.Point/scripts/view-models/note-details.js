var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.show = function(e){
        noteUid = e.view.params.uid;
        note = ds.getByUid(noteUid);
        $('#details-content').append(note.title);
    };
    scope.noteDetails = kendo.observable({
        init: function () {
            alert('init');
        },
    });
}(app.viewModels));