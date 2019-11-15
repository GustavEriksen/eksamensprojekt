

var tableData =
    `
    <tr>
      <td>${bookings.fullname}</td>;
      <td>${bookings.email}</td>;
      <td>${bookings.telephone}</td>;
      <td>${bookings.check_in}</td>;
      <td>${bookings.check_out}</td>;
      <td>${bookings.adults}</td>;
      <td>${bookings.children}</td>;
      <td>${bookings.comments}</td>;
    </tr>
  `
.join('');

var tbody = document.querySelector('#body');
tbody.innerHTML = tableData;