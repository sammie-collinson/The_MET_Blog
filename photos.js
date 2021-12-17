const depts = [15];

const getPhotoIds = async function (ids){
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${ids}`);
    const photoIds = response.data.objectIDs;
    // console.log(photoIds);
    
    const getObjects = async (ids) => {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids}`);
        imageArr.push(response.data.primaryImageSmall);
        titleArr.push(response.data.title);
        objDateArr.push(response.data.objectDate);
        console.log(response.data);

        let newDiv = document.createElement('div');
        let headerTag = document.createElement('h4');
        let dateTag = document.createElement('p');
        headerTag.classList.add('img-desc');

        for (i=0; i < titleArr.length; i++){
            headerTag.innerText = titleArr[i];
        }
        for (i=0; i < titleArr.length; i++){
            dateTag.innerText = `date: ${objDateArr[i]}`;
        }

        let newImg = document.createElement('img');

        for (i = 0; i < imageArr.length; i++) {
            newImg.src = imageArr[i];
        }

        newImg.classList.add('content');
        newDiv.appendChild(headerTag);
        headerTag.appendChild(dateTag);
        newDiv.appendChild(newImg);
        document.body.appendChild(newDiv);   
    }
    let imageArr = [];
    let titleArr = [];
    let objDateArr = [];
    for (i = 0; i < 10; i++) {
        getObjects(photoIds[i]);  
    }
}
for (i = 0; i < depts.length; i++) {
    getPhotoIds(depts[i]);
}


// "https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]"
