const depts = [16];

const getPhotoIds = async function (ids){
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${ids}`);
    const photoIds = response.data.objectIDs;
    // console.log(photoIds);
    
    const getObjects = async (ids) => {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids}`);
        const objectIds = response.data;
        arr.push(objectIds);
        // console.log((arr)); 
        
        const imagesOnly = arr.filter((index) => {
            return index.additionalImages.length > 0;
        });
        return imagesOnly;
        
    }
    
    let arr = [];
    for (i = 0; i < 10; i++) {
        getObjects(photoIds[i]);  
    }
}
for (i = 0; i < depts.length; i++) {
    getPhotoIds(depts[i]);
}

let newDiv = document.createElement('newDiv')


// const getDrawingIds = async function (){
//     const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9');
//     const drawingIds = (response.data.objectIDs);
// }

// const getModernIds = async function (){
//     const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=21');
//     const modernIds = (response.data.objectIDs);
// }

// looping through these arrays to return the object data




// "https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]"
