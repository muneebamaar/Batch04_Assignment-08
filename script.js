// Function for Converting String to Array
function stringToArray(string) {
    var word = '';
    var array = [];
    for (var i=0; i<string.length; i++) {
        if (string[i] != ' ' && !string[i].match(/[:,/]/g)) {
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

// Function to sort an Array
function sortElements(array, order) {
    var temp;
    if (order == 'dsc') {
        for (i=0; i<array.length; i++) {
            for (j=0; j<array.length; j++) {
                if (array[j] < array[i]) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
    }
    else {
        for (i=0; i<array.length; i++) {
            for (j=0; j<array.length; j++) {
                if (array[j] > array[i]) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
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
        message = '<strong>Please enter date in this format dd/mm/yyyy</strong>';
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
    array.length != 5, array2.length != 5, array[2] < 100, array[2] > 9999, array2[2] < 100, array2[2] > 9999, array[1] < 1, array[1] > 12, 
    array2[1] < 1, array2[1] > 12, array[0] < 1, array[0] > 31, array2[0] < 1, array2[0] > 31, array[3] < 0, array[3] > 23, array2[3] < 0, 
    array2[3] > 23, array[4] < 0, array[4] > 59, array2[4] < 0, array2[4] > 59];
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

// Program # 06 - Add Specified Minutes to Date Object
function minsToAdd() {
    var string = document.getElementById('minsToAddDate').value;
    var minutes = document.getElementById('minsToAddMinutes').value;
    var alert = document.getElementById('alert06');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), !minutes, minutes.match(/\D/g), array.length != 3, 
    array[2] < 100, array[2] > 9999, array[1] < 1, array[1] > 12, array[0] < 1, array[0] > 31, minutes < 0];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both date (dd/mm/yyyy) and positive minutes</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var hours = 0;
        if (minutes > 60) {
            hours = Math.floor(minutes/60);
            minutes = minutes%60;
        }
        var date = new Date(`${array[2]} ${array[1]} ${array[0]} ${hours}:${minutes}`);
        
        message = `<strong>Entered Date: <br>${string} <br>Date after addition: <br>${date}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 07 - Check whether Entered Date is Weekend or Not
function checkWeekend() {
    var string = document.getElementById('checkWeekendDate').value;
    var alert = document.getElementById('alert07');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array.length != 3, array[2] < 100, array[2] > 9999, 
    array[1] < 1, array[1] > 12, array[0] < 1, array[0] > 31];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter date in this format (dd/mm/yyyy)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(`${array[2]} ${array[1]} ${array[0]}`);
        var statement = "";
        if (date.getDay() == 6 || date.getDay() == 0) {
            statement = "a weekend";
        } else {
            statement = "not a weekend";
        }

        message = `<strong>Entered Date: <br>${string} <br>This date is ${statement}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 08 - Difference between two Dates in Days
function diffTwoDatesInDays() {
    var string = document.getElementById('diffTwoDatesDigit1').value;
    var string2 = document.getElementById('diffTwoDatesDigit2').value;
    var alert = document.getElementById('alert08');
    var array = stringToArray(string);
    var array2 = stringToArray(string2);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array.length != 3, array[2] < 100, array[2] > 9999, 
    array[1] < 1, array[1] > 12, array[0] < 1, array[0] > 31, !string2, string2.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array2.length != 3, 
    array2[2] < 100, array2[2] > 9999, array2[1] < 1, array2[1] > 12, array2[0] < 1, array2[0] > 31];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both dates in this format (dd/mm/yyyy)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(`${array[2]} ${array[1]} ${array[0]}`);
        var date2 = new Date(`${array2[2]} ${array2[1]} ${array2[0]}`);
        var differenceDays = (date.getTime() - date2.getTime())/(1000*60*60*24);

        message = `<strong>Date 1: <br>${string} <br>Date 2: <br>${string2} <br>Difference (Days): ${differenceDays}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 09 - Get the Last Day of a Month
function lastDayOfMonth() {
    var string = document.getElementById('lastDayOfMonthDigit').value;
    var alert = document.getElementById('alert09');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array.length != 2, array[1] < 100, array[1] > 9999, 
    array[0] < 1, array[0] > 12];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter month/year in this format (mm/yyyy)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(array[1], array[0], 0);
        var lastDay = date.getDate()

        message = `<strong>Entered Date: ${string} <br>Last Day: ${lastDay}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 10 - Function to Calculate Yesterday of a Date
function yesterdayOfDate() {
    var string = document.getElementById('yesterdayOfDateDigit').value;
    var alert = document.getElementById('alert10');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array.length != 3, array[2] < 100, array[2] > 9999, 
    array[1] < 1, array[1] > 12, array[0] < 1, array[0] > 31];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter date in this format (dd/mm/yyyy)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var dayName = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        var date = new Date(`${array[2]} ${array[1]} ${array[0]}`);
        var yesterday = dayName[date.getDay()];

        message = `<strong>Entered Date: ${string} <br>Yesterday: "${yesterday}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 11 - Maximum Date from an array of Dates
function maxDate() {
    var string = document.getElementById('maxDateArray').value;
    var alert = document.getElementById('alert11');
    var message = '';
    var classes = '';
    // converting string to array of dates string array
    var word = '';
    var array = [];
    for (var i=0; i<string.length; i++) {
        if (string[i] != ' ' && string[i] != ',') {
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
    // converting dates string array to dates data array
    var datesArray = [];
    for (var j=0; j<array.length; j++) {
        datesArray[j] = stringToArray(array[j]);
    }
    // pushing conditions to conditions array to check all dates data in dates data array
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+-=`~.;"'<>?|]/g)];
    for (var i=0; i<datesArray.length; i++) {
        conditionsArray.push(datesArray[i].length !=3, datesArray[i][2] < 100, datesArray[i][2] > 9999, 
            datesArray[i][1] < 1, datesArray[i][1] > 12, datesArray[i][0] < 1, datesArray[i][0] > 31)
    }
    // condition to check if data is correct
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter dates in this format (dd/mm/yyyy, dd/mm/yyyy, ....)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        // converting dates data array to actual dates array
        var dates = [];
        for (var k=0; k<datesArray.length; k++) {
            dates[k] = new Date(`${datesArray[k][2]} ${datesArray[k][1]} ${datesArray[k][0]}`);
        }
        // sorting elements
        var sortedDates = sortElements(dates, 'dsc');
        var maxDate = sortedDates[0];

        message = `<strong>Entered Date Array:<br>[${string}] <br><br>Maximum Date: <br>"${maxDate.getDate()}/${maxDate.getMonth()+1}/${maxDate.getFullYear()}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 12 - Minimum Date from an array of Dates
function minDate() {
    var string = document.getElementById('minDateArray').value;
    var alert = document.getElementById('alert12');
    var message = '';
    var classes = '';
    // converting string to array of dates string array
    var word = '';
    var array = [];
    for (var i=0; i<string.length; i++) {
        if (string[i] != ' ' && string[i] != ',') {
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
    // converting dates string array to dates data array
    var datesArray = [];
    for (var j=0; j<array.length; j++) {
        datesArray[j] = stringToArray(array[j]);
    }
    // pushing conditions to conditions array to check all dates data in dates data array
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+-=`~.;"'<>?|]/g)];
    for (var i=0; i<datesArray.length; i++) {
        conditionsArray.push(datesArray[i].length !=3, datesArray[i][2] < 100, datesArray[i][2] > 9999, 
            datesArray[i][1] < 1, datesArray[i][1] > 12, datesArray[i][0] < 1, datesArray[i][0] > 31)
    }
    // condition to check if data is correct
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter dates in this format (dd/mm/yyyy, dd/mm/yyyy, ....)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        // converting dates data array to actual dates array
        var dates = [];
        for (var k=0; k<datesArray.length; k++) {
            dates[k] = new Date(`${datesArray[k][2]} ${datesArray[k][1]} ${datesArray[k][0]}`);
        }
        // sorting elements
        var sortedDates = sortElements(dates);
        var minDate = sortedDates[0];

        message = `<strong>Entered Date Array:<br>[${string}] <br><br>Minimum Date: <br>"${minDate.getDate()}/${minDate.getMonth()+1}/${minDate.getFullYear()}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 13 - Return the number of Minutes in Hours:Minutes
function minutesToTime() {
    var string = parseInt(document.getElementById('minutesToTimeDigit').value);
    var alert = document.getElementById('alert13');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !String(string).match(/\d/g), string < 1];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter minutes in positive digits</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var hours = 0;
        var minutues = 0;
        if (string > 59) {
            hours = Math.floor(string/60);
            minutes = string%60;
        }
        else {
            minutes = string;
        }

        message = `<strong>Entered Minutes: "${string}" <br><br>Time: "${hours}:${minutes}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 14 - Get the Amount of Days in a Year
function daysInYear() {
    var string = parseInt(document.getElementById('daysInYearDigit').value);
    var alert = document.getElementById('alert14');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !String(string).match(/\d/g), string < 100, string > 9999];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter minutes in positive digits</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var numberOfDays = 0;
        for (var i=1; i<=12; i++) {
            numberOfDays = numberOfDays + new Date(string, i, 0).getDate();
        }
        

        message = `<strong>Entered Year: "${string}" <br><br>Number of Days: "${numberOfDays}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 15 - Check the Quarter (1 to 4) of the year
function checkQuarter() {
    var string = document.getElementById('checkQuarterDigit').value;
    var alert = document.getElementById('alert15');
    var array = stringToArray(string);
    var message = '';
    var classes = '';
    var conditionsArray = [!string, string.match(/[a-zA-Z!@#$%^&*()_+=`~.,;"'<>?|]/g), array.length != 3, array[2] < 100, array[2] > 9999, 
    array[1] < 1, array[1] > 12, array[0] < 1, array[0] > 31];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter date in this format (dd/mm/yyyy)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var date = new Date(`${array[2]} ${array[1]} ${array[0]}`);
        var month = date.getMonth();
        var quarter = '';
        if (month < 3) {
            quarter = 'First (1st)';
        } 
        else if (month < 6) {
            quarter = 'Second (2nd)';
        }
        else if (month < 9) {
            quarter = 'Third (3rd)';
        }
        else if (month < 12) {
            quarter = 'Fourth (4th)';
        }
        else {
            quarter = 'not found';
        }

        message = `<strong>Entered Date: "${string}" <br><br>Quarter: "${quarter}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}