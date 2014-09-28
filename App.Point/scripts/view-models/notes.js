var app = app || {};

app.Notes = (function(){
    
    var notesModel = (function(){
        var noteModel = {
            id: 'Id',
            fields: {
                Content: {
                    field: 'Content',
                    defaultValue: ''
                },
                CreatedAt: {
                    field: 'CreatedAt',
                    defaultValue: new Date()
                },
                ImageData: {
                    fields: 'ImageData',
                    defaultValue: null
                },
                Title: {
                    field:'Title',
                    defaultValue:''
                },
                Alarm: {
                    field:'Alarm',
                    defaultValue:false
                }                
            },
        }
    }());
}());