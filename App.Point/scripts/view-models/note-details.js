var app = app || {};

app.Note = (function(){
    var noteViewModel = kendo.data.ObservableObject({
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
    });
}());

