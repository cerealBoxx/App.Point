var app = app || {};
app.viewModels = app.viewModels || {};
var notes = notes || {};

(function (scope) {
    'use strict';
    var contactsAdded = [];
    var imageData = '';
    scope.addNote = kendo.observable({
        title: '',
        content: '',
        date: '',
        time: '',
        alarmOn: false,

        addImage: function () {
            function cameraSuccess(data) {
                imageData = "data:image/jpeg;base64, " + data;
                var img = $('<img>');
                img.attr('src', imageData);
                $("#user-images").append(img);
            };

            function cameraError() {
                navigator.notification.alert("Unfortunately we could not add the image");
            };
            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };
            navigator.camera.getPicture(cameraSuccess, cameraError, config);
        },

        addContact: function () {
            function onPrompt(results) {
                findContact(results.input1);
            }
            navigator.notification.prompt(
                'Enter contact name', // message
                onPrompt, // callback to invoke
                'Add contact', // title
                 ['Ok'], // buttonLabels
                '' // defaultText
            );
        },
        save: function () {
            var connectionValid = checkConnection();
            alert(contactsAdded);
            if (connectionValid) {
                var note = {
                    title: this.get('title'),
                    content: this.get('content'),
                    date: parseDate(this.get('date'), this.get('time')),
                    alarm: this.get('alarmOn'),
                    imageData: imageData,
                    contacts: contactsAdded
                };
                $.ajax({
                    type: "POST",
                    url: 'https://api.everlive.com/v1/cZswy0ZulYmXBaML/Notes',
                    contentType: "application/json",
                    data: JSON.stringify(note),
                    success: function (data) {
                        console.log(data);
                    },
                    error: function () {
                        alert('Error adding note')
                    }
                });
                //clear form
                this.set('title', '');
                this.set('content', '');
                this.set('date', '');
                this.set('time', '');
                this.set('alarmOn', false);
                imageData = '';
                contactsAdded = [];
                $("#user-images").empty();
                $("#contacts-container").empty();
            } else {
                alert("No internet connection. Cannot save note.");
            }
        },
    });

    function findContact(contactName) {
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                contactsAdded.push(contacts[i]);
                $("#contacts-container").append('<li>' + contacts[i].displayName + '<\li>');
            }
        };

        function onError(contactError) {
            alert('onError!');
        };
        var options = new ContactFindOptions();
        options.filter = contactName;
        options.multiple = false;
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    };

    function parseDate(date, time) {
        if (date == '') {
            return '';
        }
        var d = new Date(date);
        var splitted = time.split(':');
        d.setHours(splitted[0], splitted[1]);
        return d;
    };

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.NONE] = 'No network connection';

        if (states[networkState] == 'No network connection') {
            return false;
        }
        return true;
    };
}(app.viewModels));