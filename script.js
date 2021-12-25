// Function for Converting String to Array
function stringToArray(string) {
    var word = '';
    var array = [];
    for (var i=0; i<string.length; i++) {
        if (string[i] != ' ' && !string[i].match(/[:,/-]/g)) {
            word = word + string[i];
        }
        else if (word != '') {
            array.push(word);
            word = '';
        }
    }
    if (word != '') {
        array.push(word);
    }
    return array;    
}



// Program # 02 - Get the Current Date using provided Separator
function dateBySeparator() {
    var string = document.getElementById('dateBySeparatorDigit').value;
    var alert = document.getElementById('alert02');
    var message = '';
    var classes = '';
    if (!string || !string.match(/[-_/|*:~.,]/g)) {
        message = '<strong>Please enter a single separator from the following (-_/|*:~.,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var currentDate = new Date;

        message = `<strong>Current Date: "${currentDate.getDate()}${string}${currentDate.getMonth()+1}${string}${currentDate.getFullYear()}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 03 - Get Number of Days in a Month
function numOfDaysInMonthYear() {
    var string = document.getElementById('numOfDaysDigit').value;
    var alert = document.getElementById('alert03');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g) || array.length != 2 || array[0] > 12 || array[0] < 1 || array[1].length != 4) {
        message = '<strong>Please enter month with year in this format: 12, 1980</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var month = array[0];
        var year = array[1];
        var date = new Date(year, month, 0);

        message = `<strong>There are "${date.getDate()}" days in the entered month "${month}, ${year}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 04 - Get the Month Name from Entered Date
function monthNameByDate() {
    var string = document.getElementById('monthNameDate').value;
    var alert = document.getElementById('alert04');
    var array = stringToArray(string);
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-Z!@#$%^&*()_+=`~:.,;"'<>?|]/g) || array.length !=3 || array[1] < 1 || array[1] > 12 || array[2].length !=4) {
        message = '<strong>Please enter date in this format dd-mm-yyyy or dd/mm/yyyy</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(array[2], array[1]-1, array[0]);

        message = `<strong>The Entered Month is "${monthName[date.getMonth()]}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 05 - Program to Compare two Entered Dates
function compareTwoDates() {
    var string = document.getElementById('compareTwoDates01').value;
    var string2 = document.getElementById('compareTwoDates02').value;
    var alert = document.getElementById('alert05');
    var array = stringToArray(string);
    var array2 = stringToArray(string2);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), !string2, string2.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), 
    array.length != 5, array2.length != 5, array[2] < 100, array[2] > 9999, array2[2] < 100, array2[2] > 9999, array[1] < 1, array[1] > 12, array2[1] < 1, 
    array2[1] > 12, array[0] < 1, array[0] > 31, array2[0] < 1, array2[0] > 31];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both date in this format (dd/mm/yyyy 00:00)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(`${array[2]} ${array[1]} ${array[0]} ${array[3]}:${array[4]}`);
        var date2 = new Date(`${array2[2]} ${array2[1]} ${array2[0]} ${array2[3]}:${array2[4]}`);
        var statement = '';
        if (date > date2) {
            statement = '>';
        }
        else if (date < date2) {
            statement = '<';
        }
        else if (date = date2){
            statement = '=';
        }
        else {
            statement = 'error'
        }

        message = `<strong>Result: <br>"${string} ${statement} ${string2}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}