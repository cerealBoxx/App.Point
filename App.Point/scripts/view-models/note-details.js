var app = app || {};
app.viewModels = app.viewModels || {};
var kendoMobileApp = kendoMobileApp || {};

(function (scope) {
    scope.show = function (e) {
        noteUid = e.view.params.uid;
        note = ds.getByUid(noteUid);
        $("#details-content").empty();

        var $title = $('<p>');
        $title.text(note.title);
        $title.addClass('title');
        var $content = $('<p>');
        $content.text(note.content);
        var $date = $('<p>');
        $date.text(note.date);

        $("#details-content").append($title);
        $("#details-content").append($content);
        $("#details-content").append($date);
        if (note.imageData != '') {
            var img = $('<img>');
            img.attr('src', note.imageData);
            $("#details-content").append(img);
        };
        $("#details-content").append('<p>With:<\p>');

        for (i = 0; i < note.contacts.length; i++) {
            $("#details-content").append("<p>" + note.contacts[i].displayName + "<\p>");
            $("#details-content").append("<p>" + note.contacts[i].phoneNumbers[0].value + "<\p>");
        }

    };
}(app.viewModels));