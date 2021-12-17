const depts = [15];

const getPhotoIds = async function (ids){
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${ids}`);
    const photoIds = response.data.objectIDs;
    
    const getObjects = async (ids) => {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids}`);
        objArr.push(response.data);

        const onlyWithImgs = objArr.filter((index) => {
            return index.primaryImage !== "";
        });

        let newDiv = document.createElement('div');
        let headerTag = document.createElement('h4');
        let dateTag = document.createElement('p');
        headerTag.classList.add('img-desc');

        for (i=0; i < onlyWithImgs.length; i++){
            if (onlyWithImgs[i].title == ""){
                headerTag.innerText = "Title Unknown"
            } else{
                headerTag.innerText = onlyWithImgs[i].title;
            }
        }
        for (i=0; i < onlyWithImgs.length; i++){
            dateTag.innerText = `date: ${onlyWithImgs[i].objectDate}`;
        }

        let newImg = document.createElement('img');

        for (i = 0; i < onlyWithImgs.length; i++) {
            newImg.src = onlyWithImgs[i].primaryImage;
        }

        newImg.classList.add('content');
        newDiv.appendChild(headerTag);
        headerTag.appendChild(dateTag);
        newDiv.appendChild(newImg);
        document.body.appendChild(newDiv);   
    }
    let objArr = [];
    for (i = 0; i < 30; i++) {
        getObjects(photoIds[i]);  
    }
}
for (i = 0; i < depts.length; i++) {
    getPhotoIds(depts[i]);
}