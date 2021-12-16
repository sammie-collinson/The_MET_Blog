const depts = [15];

const getPhotoIds = async function (ids){
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${ids}`);
    const photoIds = response.data.objectIDs;
    // console.log(photoIds);
    
    const getObjects = async (ids) => {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids}`);
        const objectIds = response.data;
        // console.log(objectIds);
        imageArr.push(objectIds.primaryImage);
        console.log((imageArr)); 
        
    }
    let imageArr = [];
    for (i = 0; i < 10; i++) {
        getObjects(photoIds[i]);  
    }
}
for (i = 0; i < depts.length; i++) {
    getPhotoIds(depts[i]);
}

// let newDiv = document.createElement('newDiv')


// "https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]"
