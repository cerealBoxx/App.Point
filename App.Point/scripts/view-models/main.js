var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.main = kendo.observable({
        noteSelected: function (e) {          
            kendoMobileApp.navigate('views/note-details.html?uid=' + e.data.uid);
        },
    });
}(app.viewModels));