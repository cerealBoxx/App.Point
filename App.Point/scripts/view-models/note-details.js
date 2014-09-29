var app = app || {};
app.viewModels = app.viewModels || {};

(function (scope) {
    scope.showNoteDetails = function (e) {
        noteUid = e.view.params.uid;
        note = ds.getByUid(noteUid);

        $("#details-content").empty();
        var $title = $('<p>');
        $title.text(note.title);
        $title.addClass('title');
        var $content = $('<div>');
        $content.text(note.content);
        var $date = $('<p>');
        var dateToString = note.date.toString();
        var dateShort = dateToString.substring(0, 21);
        $date.text(dateShort);
        $("#details-content").append($title);
        $("#details-content").append($content);
        $("#details-content").append($date);


        var $inputSpan = $('<span>');
        $inputSpan.text('Alarm:');

        var $input = $('<input>', {
            type: "checkbox"
        });
        $input.attr('checked', false);


        $("#details-content").append($inputSpan);
        $("#details-content").append($input);

        $("#details-content").append('<div><\div>');
        if (note.imageData != '') {
            var img = $('<img>');
            img.addClass('details-image');
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