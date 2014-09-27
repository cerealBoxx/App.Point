var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
	'use strict';
	scope.addNote = kendo.observable({
		save: function () {
            //TODO create json from add-note.html(#user-content)
            //TODO push json to database
			console.log("note added");
		},
        addPhoto: function(){
            console.log("photo added");
        },
        addContact: function(){
            console.log("contact added");
        },
	});
}(app.viewmodels));