/**
 * Created by harrisonchow on 3/27/17.
 */

$(document).ready(function() {
    // initialize Parse connection as soon as doc ready
    Parse.initialize("df-recruit-db");
    Parse.serverURL = 'https://df-recruit-db.herokuapp.com/parse';

    $('#theForm').submit(function(e) {
        e.preventDefault();
        formSubmit(this);
        return false;
    });
});

function formSubmit(theForm) {
    var field;

    var Table = Parse.Object.extend("Application");
    var application = new Table();
    application.set();

    application.save(null, {
        success: function(table) {console.log("success");},
        error: function(table, error) {console.log(error);}
    });
}