// syntax
// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 1000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))


// The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Promise
/*
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))
*/
