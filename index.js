const axios = require('axios').default;

const getDepts = async function (){
    const departments = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    return departments;
}
console.log(getDepts);