// Here we take the input data and assign them to their respective id values
var fullname = document.getElementById("name");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var check_in = document.getElementById("check_in");
var check_out = document.getElementById("check_out");
var adults = document.getElementById("adults");
var children = document.getElementById("children");
var comments = document.getElementById("comments");

document.getElementById("storage").innerHTML = localStorage.getItem("booking");

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["email"] = document.getElementById("email").value;
    formData["telephone"] = document.getElementById("telephone").value;
    formData["check_in"] = document.getElementById("check_in").value;
    formData["check_out"] = document.getElementById("check_out").value;
    formData["adults"] = document.getElementById("adults").value;
    formData["children"] = document.getElementById("children").value;
    formData["comments"] = document.getElementById("comments").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storage").innerHTML = localStorage.getItem("booking");
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telephone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.check_in;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.check_out;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.adults;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.children;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.comments;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("check_in").value = "";
    document.getElementById("check_out").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("comments").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("check_in").value = selectedRow.cells[3].innerHTML;
    document.getElementById("check_out").value = selectedRow.cells[4].innerHTML;
    document.getElementById("adults").value = selectedRow.cells[5].innerHTML;
    document.getElementById("children").value = selectedRow.cells[6].innerHTML;
    document.getElementById("comments").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.telephone;
    selectedRow.cells[3].innerHTML = formData.check_in;
    selectedRow.cells[4].innerHTML = formData.check_out;
    selectedRow.cells[5].innerHTML = formData.adults;
    selectedRow.cells[6].innerHTML = formData.children;
    selectedRow.cells[7].innerHTML = formData.comments;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookingList").deleteRow(row.rowIndex);
        resetForm();
    }
}


