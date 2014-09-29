var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.show = function(){
        $("#note-details-container").append(note.title);
        $("#note-details-container").append(note.content);
        $("#note-details-container").append(note.alarm);
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