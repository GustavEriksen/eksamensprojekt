// Check login - Checks if user is logged in. If not user wont be able to request a booking
if (JSON.parse(localStorage.getItem("currentUser")) == null){
    alert("You need to be logged in to make a booking request");
    document.location.href = "home.html";
    var x = document.getElementById("mydiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Booking saving in LocalStorage + Admin Access. IIFE function

(function() {

    'use strict';
    /* Defining variables which we are using throughout the script. */
    var lastId = 0;                                                                // Creating id's for each booking
    var bookWrapper = document.getElementById("book_wrapper");          // Wrapping all bookings
    var btnSave = document.getElementById("save_book");                // Button which saves each booking
    var removeIcon;                                                             // Admin can remove a booking
    var updateIcon;                                                            // Adin can update the status of the booking
    var bookList;                                                             // booking list

    // book or Book is short for booking or Booking

    //Function which loads the booking list whenever the page is loaded or each time a booking gets manually added by the Admin
    function load() {

        if (!!(window.localStorage.getItem('bookList'))) {
            bookList = JSON.parse(window.localStorage.getItem('bookList'));
        } else {
            bookList = [];
        }
        btnSave.addEventListener('click', saveBook);
        showList();
    }


    // CRUD div of booking (Create, Update, Delete)

    // Functions which shows the booking list
    function showList() {

        if (!!bookList.length) {
            getLastBookId();
            for (var booking in bookList) {
                var book = bookList[booking];
                addBookToList(book);
            }
            syncEvents();
        }
    }

    //Function which saves the input from the html form. - Our Booking class
    function saveBook(event) {

        var book = {
            bookId: lastId,
            bookName: document.getElementById("book_name").value,
            bookEmail: document.getElementById("book_email").value,
            bookTelephone: document.getElementById("book_telephone").value,
            bookCheckIn: document.getElementById("book_checkIn").value,
            bookCheckOut: document.getElementById("book_checkOut").value,
            bookAdults: document.getElementById("book_adults").value,
            bookChildren: document.getElementById("book_children").value,
            bookComments: document.getElementById("book_comments").value,
            bookStatus: ("Pending").value, //All bookings has an undefined booking status --> admin has to change to "accepted" or "denied"
        }
        alert("Your reservation has been sent to Vivian. You will be notified when the reservation request has been accepted/denied.");
        //Makes an alert i browser, so user can see the booking has been sent.


        bookList.push(book); //pushes the new booking to the booking list
        syncBook(); // syncs all the booking
        addBookToList(book); //adding new booking to list
        syncEvents(); // Syncing all "events"
        lastId++; //Creates unique ID for latest booking
    }

    // Function which adds booking to the Booking List, where Admin can delete and change status of the booking and then show the list of bookings
    function addBookToList(book) {

        var removeIcon = document.createElement('span'); //Remove Icon
        var element = document.createElement('li');
        var updateIcon = document.createElement('span'); // Update Icon

        removeIcon.innerHTML = "X"; // The letter used for the remove icon
        removeIcon.className = "remove_booking clickeable";
        removeIcon.setAttribute("title", "Remove");

        updateIcon.innerHTML = "U"; // The letter used for the Update Icon
        updateIcon.className = "update_icon clickeable";
        updateIcon.setAttribute("title", "Update");

        // Showing "Remove" & "Update" icon + Name, checkin date, checkout date & booking status (undefined as standard)
        element.appendChild(removeIcon);
        element.appendChild(updateIcon);
        element.setAttribute("id", book.bookId);
        element.innerHTML += ("<b> Name: </b>" + book.bookName + " ");
        element.innerHTML += ("<b> Check In : </b>" + book.bookCheckIn + " ");
        element.innerHTML += ("<b> Check Out: </b>" + book.bookCheckOut + " ");
        element.innerHTML += ("<b> Status: </b>" + book.bookStatus + " ");

        bookWrapper.appendChild(element);
    }

    // Function which updates only the Status
    function updateBook(event) {

        var bookTag = event.currentTarget.parentNode;
        var bookId = bookTag.id;
        var bookToUpdate = findBook(bookId).book;
        var pos = findBook(bookId).pos;
        if (!!bookToUpdate) {
            var status = prompt("Status: ", bookToUpdate.bookStatus);
            bookToUpdate.bookStatus = status;
            bookList[status] = bookToUpdate;
            bookTag.lastChild.textContent = bookToUpdate.bookStatus;
            syncBook();
        }
    }

    // Function which removes a booking when pressing the red "X".
    function removeBook(event) {

        var bookToRemove = event.currentTarget.parentNode;
        var bookId = bookToRemove.id;
        bookWrapper.removeChild(bookToRemove);
        bookList.forEach(function(value, i) {
            if (value.bookId == bookId) {
                bookList.splice(i, 1);
            }
        })
        syncBook();
    }

    // End of CRUD div



    //function which syncs the bookings and updated bookings to the booking list
    function syncBook() {

        window.localStorage.setItem('bookList', JSON.stringify(bookList));
        bookList = JSON.parse(window.localStorage.getItem('bookList'));
    }

    //Function which shows the lastest booking as the last booking on the Booking List
    function getLastBookId() {
        var lastBook = bookList[bookList.length - 1];
        lastId = lastBook.bookId + 1;
    }

    // Function which sync "events" - the update and remove icon.
    function syncEvents() {

        updateIcon = document.getElementsByClassName("update_icon");
        removeIcon = document.getElementsByClassName("remove_booking");
        if (!!removeIcon.length) {
            for (var i = 0; i < removeIcon.length; i++) {
                removeIcon[i].addEventListener('click', removeBook); // When you press X the booking actually gets removed
            }
        }
        if (!!updateIcon.length) {
            for (var j = 0; j < updateIcon.length; j++) {
                updateIcon[j].addEventListener('click', updateBook); // When you press U the booking actually gets updated
            }
        }
    }

    function findBook(id) {

        var response = {
            book: '',
            pos: 0
        };
        bookList.forEach(function(value, i) {
            if (value.bookId == id) {
                response.book = value;
                response.pos = i;
            }
        });

        return response;
    }

    //End Common


    load();
})();

