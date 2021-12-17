const depts = [15];

const getPhotoIds = async function (ids){
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${ids}`);
    const photoIds = response.data.objectIDs;
    // console.log(photoIds);
    
    const getObjects = async (ids) => {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids}`);
        imageArr.push(response.data.primaryImage);
        console.log(imageArr);

        let newDiv = document.createElement('div');
        let headerTag = document.createElement('h4');
        headerTag.classList.add('dept-text');
        headerTag.innerText = 'test';
        let newImg = document.createElement('img');
        newImg.src = imageArr[0];
        newImg.classList.add('content');
        newDiv.appendChild(headerTag);
        newDiv.appendChild(newImg);
        document.body.appendChild(newDiv);



        
    }
    let imageArr = [];
    for (i = 0; i < 10; i++) {
        getObjects(photoIds[i]);  
    }
}
for (i = 0; i < depts.length; i++) {
    getPhotoIds(depts[i]);
}


// "https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]"
