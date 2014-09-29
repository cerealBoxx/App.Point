var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.show = function(){
        $("#note-details-container").append("<p>note.title</p>");
        $("#note-details-container").append("<p>note.content</p>");
        
        var img = $('<img>');
                img.attr('src', note.imageData);
               
        $("#note-details-container").append(img);
        
        
    };
    scope.noteDetails = kendo.observable({
        init: function () {
            alert('init');
        },
    });
}(app.viewModels));