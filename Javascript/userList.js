// This JS is for the user database. It checks to see if any user already exists in localStorage. If not, then it creates and pushes one.
if(localStorage.getItem('User') == null) {
    var userList = [];
        userList.push(new User ("admin", "admin.vivian@vivian.dk", +2561659662, 1994-18-12, "Admin", "Admin"));

        //Stringify the userlist and saves in localStorage
        var userListString = JSON.stringify(userList)
        localStorage.setItem('User', userListString)
        // If the local storage is not empty, the user list equals the users already in the local storage
} else {
    var userList = JSON.parse(localStorage.getItem('User'))
}