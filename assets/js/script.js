let filteredUsers = [];
let allUsers = [];

let countUsers = 0;

let tabUsers = null;
let tabStatistics = null;

let allMaleGender = 0;
let allFemaleGender = 0;
let sumAges = 0;
let medAges = 0;

let numberFormat = null;

let usersFound = null;


window.addEventListener('load', () => {
    filteredUsers = document.querySelector('#tabUsers');
    tabUsers = document.querySelector('#tabUsers');
    tabStatistics = document.querySelector('#tabStatistics');
    allMaleGender = document.querySelector('#allMaleGender');
    allFemaleGender = document.querySelector('#allFemaleGender');
    sumAges = document.querySelector('#sumAges');
    medAges = document.querySelector('#medAges');
    usersFound = document.querySelector('#totalUsersFound');
    countUsers = document.querySelector('#totalUsersFound');



    fetchUsers();
    preventFormSubmit();
})

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('#filterTab');
    form.addEventListener('submit', handleFormSubmit);
}

async function fetchUsers() {
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json();

    allUsers = json.results.map((results) => {
        const { name, picture, dob, gender } = results;

        return {
            name: name.first + " " + name.last,
            picture: picture.thumbnail,
            age: dob.age,
            gender: gender
        };

    });

    console.log(allUsers);
}

function renderUsersFound() {
    let usersFoundHTML = '<div>';

    filteredUsers.forEach(user => {
        const { picture, name, age } = results;

        const filteredUserHTML = `
            <div class="users">
                <div>
                    <img src="${picture}" alt="${name}">
                </div>
                <div>
                    <h6>${name},</h6>
                </div>
                <div>
                    <h6>${age} anos</h6>
                </div>
        `;

        usersFoundHTML += filteredUserHTML;
    });

    usersFoundHTML += '</div>';
    tabUsers.innerHTML = usersFoundHTML;
}

function activateInput() {
    function handleKeyup(event) {
        if (event.key !== 'Enter') {
            return;
            
        };
    };

    function handleButton() {
        const searchButton = document.querySelector(".btn");
        searchButton.addEventListener('click');
        console.log(searchButton);
    };
}

function renderFilteredUsersStatistic() {
    
    const totalUsersAge = filteredUsers.reduce((accumulator, current) => {
        return accumulator + current.age;
    }, 0);
    
    const medUsersAge = filteredUsers.reduce((accumulator, current) => {
        return ((accumulator + current.age) / filteredUsers.length);
    }, 0);
    
    countUsers.textContent = filteredUsers.length;

    allMaleGender.textContent = filteredUsers.filter((user) => {
        return user === male;
    });

    allFemaleGender.textContent = filteredUsers.filter((user) => {
        return user === allFemaleGender;
    });

    sumAges.textContent = totalUsersAge;
    medAges.textContent = medUsersAge;

}

// Função para filtrar os usuários
function filterUsers() {
    handleKeyup();
    handleButton();

    allUsers.forEach(user => {
        function usersFilter(names, index, letter) {
            var filteredNames = names.filter(function(word) {
               return word.charAt(index) === letter;
            });
            return filteredNames;
        };
    });
}

