var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};
(function (scope) {
    scope.main = kendo.observable({
        noteSelected: function (e) {
            alert(e.data.uid);
            kendoMobileApp.navigate('views/note-details.html');
        },
    });
}(app.viewModels));