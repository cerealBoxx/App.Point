var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.noteDetails = kendo.observable({
        init: function () {
            alert('init');
        },
    });
}(app.viewModels));