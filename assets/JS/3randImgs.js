// Define an object to manage random image creation
const CreateRandImgs = {
    imgArray: [], // Array to hold the created images

    // Method to setup random images
    setup: function(NumberOfPhotos) {
        this.imgArray = []; // Reset imgArray
        const addressesSet = new Set(); // Set to ensure unique image addresses

        try {
            // Generate unique random image addresses
            while (addressesSet.size < NumberOfPhotos / 2) {
                const newAddress = `https://picsum.photos/200/200?random=${Math.random()}`;
                if (!addressesSet.has(newAddress)) {
                    addressesSet.add(newAddress);
                }
            }

            const addresses = Array.from(addressesSet);
            addresses.forEach((address, index) => {
                try {
                    // Create two image elements for each address
                    const imga = document.createElement('img');
                    const imgb = document.createElement('img');
                    imga.className = 'frontSide'; // Set class for styling
                    imgb.className = 'frontSide'; // Set class for styling
                    imga.src = address; // Set image source
                    imgb.src = address; // Set image source
                    imga.setAttribute('dataSet', index + 1); // Set data attribute for identification
                    imgb.setAttribute('dataSet', index + 9); // Set data attribute for identification
                    // Add images to the imgArray
                    this.imgArray.push(imga);
                    this.imgArray.unshift(imgb); // Add to the beginning for randomization
                } catch (error) {
                    console.error('Error creating image element:', error);
                    // Error handling
                }
            });

            // Shuffle the imgArray to randomize card positions
            this.imgArray.sort((a, b) => Math.random() - 0.51);
        } catch (error) {
            console.error('Error setting up random images:', error);
            // Error handling
        }
    },

    // Method to get the imgArray
    getImgArray: function() {
        return this.imgArray;
    }
}

// Export the CreateRandImgs object as default
export default CreateRandImgs;