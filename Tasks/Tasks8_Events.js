const cars = [];
let numberID = 3;
const tableBody = document.querySelector('#car-table tbody');
// add car to the table
function addCarToTable(car) {
    if (car.model !== "" && car.year !== "" && car.price !== "" && car.color !== "" && car.customs !== "") {
        tableBody.innerHTML += `<tr>
                                    <th scope="row">${car.id}</th>
                                    <td>${car.model}</td>
                                    <td>${car.year}</td>
                                    <td>${car.price}$</td>
                                    <td>${car.color}</td>
                                    <td>${car.customs}</td>
                                </tr>`;
    }
    else {
        numberID--;
    }
}

// get car from form
function readCar() {
    const nameInput = document.getElementById('nameInput');
    const yearInput = document.getElementById('yearInput');
    const priceInput = document.getElementById('priceInput');
    const colorInput = document.getElementById('colorInput');
    const customsInput = document.getElementById('customsInput');
    return {
        id: cars.length + numberID,
        model: modelInput.value,
        year: yearInput.value,
        price: priceInput.value,
        color: colorInput.value,
        customs: customsInput.value
    };
}

// ----------- events -----------
const addBtn = document.getElementById('add-car-btn');
const clearBtn = document.getElementById('clear-all-btn');
const searchBtn = document.getElementById('search-button')
// add event handler
addBtn.onclick = (event) => { 
    event.preventDefault();
    // ... code ...
    console.log('Clicked!');
    
    const newCar = readCar();

    // TODO: add validation

    cars.push(newCar);
    addCarToTable(newCar);
}

clearBtn.onclick = (event) => { 
    event.preventDefault();
    tableBody.innerHTML = '';
    cars.splice(0);
}

searchBtn.onclick = (event) => { 
    event.preventDefault();
    searchTable();
}

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("car-table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) { 
                tr[i].style.display = ""; 
            } else {
                tr[i].style.display = "none"; 
            }
        }       
    }
}