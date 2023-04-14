const url = 'http://localhost:3000/user';
const form = document.getElementById('form');

let btnSubmit = document.getElementById('btnSubmit')

function getFormValue(event){
    event.preventDefault();


    const fields = document.querySelectorAll('input, value');
    const values = {};
    
    fields.forEach(field => {
        const {name, value, type} = field;
        values[name] = value;
    })
    addUser(values)

}
const addUser = async(values) => {
 

    const options = {
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(values)
    }

    const response = await fetch(url, options);
    if(response.ok){
        alert('Пользовател успешно добавлен');
    } else{
        alert('Произошла ошибка');
    }

}

form.addEventListener('submit', getFormValue);