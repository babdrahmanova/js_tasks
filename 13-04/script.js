const url = 'https://jsonplaceholder.typicode.com/users';

const showUsers = (data) => {
  data.forEach(element => {
    document.getElementById('userID').innerHTML = (element.id);
    document.getElementById('userName').innerHTML = (element.name);
    document.getElementById('userEmail').innerHTML = (element.email);
    document.getElementById('userPhoneNumber').innerHTML = (element.phone);
    document.getElementById('userWebsite').innerHTML = (element.website);
  });
}
const getUsers = async () => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    showUsers(data);
  } else {
    alert('Ошибка. Попробуйте позже');
  }
}

getUsers();

/*                  <td id="userID"></td>
                    <td id="userName"></td>
                <td id="userEmail"></td>
                    <td id="userPhoneNumber"></td>
                    <td id="userWebsite"></td> */

/* document.querySelector('.table').innerHTML = `<tbody class="content"></tbody>`
for (key in url) {
  let row = document.createElement('tr')
  row.innerHTML = `<td> ${key}</td>`
  row.innerHTML = `<td> ${key}</td>`
  row.innerHTML = `<td> ${key}</td>`
  row.innerHTML = `<td> ${key}</td>`

  document.querySelector('.content').appendChild(row)
} */

/*     tdCells.innerHTML = element.id; */



















/* нужно перебрать с помощью цикла foreach then we have to write item.name */
/* <table>
  <tr>
    <td id="myTd"></td>
  </tr>
</table>

<script>
  // Get a reference to the td element
  var tdElement = document.getElementById("myTd");

  // Set the content of the td element using innerHTML
  tdElement.innerHTML = "Hello, world!";
</script>
 */

/*   document.getEl    document.getElementsByTagName('td').innerHTML=(element.name)
    document.getElementsByTagName('td').innerHTML=(element.email)
    document.getElementsByTagName('td').innerHTML=(element.phone)
    document.getElementsByTagName('td').innerHTML=(element.website)ementById("userID").innerHTML = (element.id);
        document.getElementById("userName").innerHTML = (element.name);
        document.getElementById("userEmail").innerHTML = (element.email);
        document.getElementById("userPhoneNumber").innerHTML = (element.phone);
        document.getElementById("userWebsite").innerHTML = (element.website);
        document.getElementById("user_3").innerHTML = (element.id, element.name, element.email, element.phone, element.website) */