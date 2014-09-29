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
                AppointmentDate: {
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
        };
        
        var notesDataSource = new kendo.data.DataSource({
            type:'everlive',
            schema: {
                model: noteModel
            },
            transport: {
                typeName:'Note'
            },
            change: function (e) {
                if(e.items && e.items.length>0) {
                    $('#no-notes-span').hide();
                } else {
                    $('#no-notes-span').show();
                }
            },
            sort: {field: 'CreatedAt', dir:'desc'}
        });
        
        return {
            notes: notesDataSource
        };
        
    }());
    
       var notesViewModel = (function () {

        var noteSelected = function (e) {

            app.mobileApp.navigate('views/noteView.html?uid=' + e.data.uid);
        };

        // Navigate to app home
        var navigateHome = function () {

            app.mobileApp.navigate('#welcome');
        };

        // Logout user
        var logout = function () {

            app.helper.logout()
            .then(navigateHome, function (err) {
                app.showError(err.message);
                navigateHome();
            });
        };

        return {
            activities: activitiesModel.activities,
            activitySelected: activitySelected,
            logout: logout
        };

    }());

    return activitiesViewModel;    
}());