let arr = [
    {
        id: 1,
        name: 'Tulkin',
        age: 29,
        hairColor: 'blondy'
    },
    {
        id: 2,
        name: 'Bekzod',
        age: 22,
        hairColor: 'red'
    },
    {
        id: 3,
        name: 'Alisher',
        age: 18,
        hairColor: 'black'
    },
    {
        id: 4,
        name: 'Shoxrux',
        age: 25,
        hairColor: 'rijiy'
    },
    {
        id: 5,
        name: 'Muxammad',
        age: 16,
        hairColor: 'brown'
    },
    {
        id: 6,
        name: 'Alisher',
        age: 29,
        hairColor: 'none'
    },
]

let name = prompt('Kого удалить?')

let age = prompt('Сколько лет?')

let finded = arr.find(item => item.name === name && item.age == age );
if(finded === undefined){
    alert(`${name} нет в списке `)
} else if(confirm(`Удалить пользователья ${name} ?`)){
    let index = arr.indexOf(finded);
    arr.splice(index,1);
    alert(` ${name} удален из списка `)
}

console.log(arr_cars);