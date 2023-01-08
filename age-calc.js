const userCalculatedAge = function () {
    var userAge = document.getElementById("searchData").value;
    var dob = new Date(userAge);
    var nowAge = new Date();

    // Get User Year, Month, Days------------------
    var getUserYear = dob.getFullYear();
    const getUserMonth = dob.getMonth() + 1;
    var getUserDay = dob.getDate();

    // Get Now Year, Month, Days------------------
    var getNowYear = nowAge.getFullYear();
    var getNowMonth = nowAge.getMonth() + 1;
    var getNowDay = nowAge.getDate();

    // User Calculated Year------------------
    var calculatedYear = getNowYear - getUserYear;


    // User Calculated Month------------------
    if (getNowMonth <= getUserMonth) {
        var calculatedMonth = getNowMonth - getUserMonth;
    } else {
        calculatedYear--;
        var calculatedMonth = 12 + getNowMonth - getUserMonth;
    }

    // User Calculated Days------------------
    if (getNowDay >= getUserDay) {
        var calculatedDays = getNowDay - getUserDay;
        // console.log(calculatedYear);
    } else {
        calculatedMonth--;
        var calculatedDays = 31 + getNowDay - getUserDay;
    }
    var age = `${calculatedYear} years ${calculatedMonth} months ${calculatedDays} days`;
    user_Age.innerHTML = `<div><h2 style="margin: 0; padding: 0; color: white; text-align: center;"> <span style="color: darkgrey">Your Age is: </span>${age}</h2></div>`
}
