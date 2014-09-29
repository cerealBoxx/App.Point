var app = app || {};
app.viewModels = app.viewModels || {};
var notes = notes || {};

(function (scope) {
    'use strict';
    var imageData = '';
    scope.addNote = kendo.observable({
        title: '',
        content: '',
        date: '',
        time: '',
        alarmOn: false,

        addImage: function () {
            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };
            navigator.camera.getPicture(success, error, config);
        },

        addContact: function () {
            $("#user-images").append('contact added ');
        },
        savePicture: function(){
          var that = this;
           
        },

        save: function () {
            var connectionValid = checkConnection();

            if (connectionValid) {

                var note = {
                    title: this.get('title'),
                    content: this.get('content'),
                    date: this.get('date'),
                    time: this.get('time'),
                    alarm: this.get('alarmOn'),
                    imageData: imageData
                };

                $.ajax({
                    type: "POST",
                    url: 'https://api.everlive.com/v1/cZswy0ZulYmXBaML/Notes',
                    contentType: "application/json",
                    data: JSON.stringify(note),
                    success: function () {
                        alert('Note added')
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
                $("#user-images").empty();
            } else {
                alert("No internet connection. Cannot save note.");
            }
        },
    });

    var emptyGuid = '00000000-0000-0000-0000-000000000000';
    var AppHelper = {
        
        resolveImageUrl: function (id) {
            if (id && id !== emptyGuid) {
                return everlive.Files.getDownloadUrl(id);
            } else {
                return '';
            }
        }
    };

    function success(data) {
        imageData = "data:image/jpeg;base64, " + data;
        var img = $('<img>');
        img.attr('src', imageData);
        $("#user-images").append(img);
    };

    function error() {
        navigator.notification.alert("Unfortunately we could not add the image");
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