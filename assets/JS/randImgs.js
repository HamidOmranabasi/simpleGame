const CreateRandImgs = {
    imgArray: [],

    setup: function(NumberOfPhotos) {
        this.imgArray = [];
        const addressesSet = new Set();



        while (addressesSet.size < NumberOfPhotos/2) {
            const newAddress = `https://picsum.photos/200/200?random=${Math.random()}`;
            if (!addressesSet.has(newAddress)) {
                 addressesSet.add(newAddress);
            }
        }
        
        const addresses = Array.from(addressesSet);

        addresses.forEach( (address, index) => {
            const imga = document.createElement('img');
            const imgb = document.createElement('img');
            imga.className = 'frontSide';
            imgb.className = 'frontSide';
            imga.src= address;
            imgb.src= address;
            imga.setAttribute('dataSet', index + 1 );
            imgb.setAttribute('dataSet', index + 9 );
            this.imgArray.push(imga);
            this.imgArray.unshift(imgb);
        })

        this.imgArray.sort( (a, b) => Math.random() - 0.51);

    },

    getImgArray: function() {
        return this.imgArray;
    }


}

export default CreateRandImgs;