var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};
(function (scope) {
    scope.main = kendo.observable({
        noteSelected: function (e) {
            kendoMobileApp.navigate('views/add-note.html');
        },
    });
}(app.viewModels));