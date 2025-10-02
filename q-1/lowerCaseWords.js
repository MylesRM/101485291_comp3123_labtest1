function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        //Check if input is an array, if not reject with an error message
        if (!Array.isArray(arr)) {
            reject("Must be an array")
        } else {
            //Filter Array to keep strings, and convert strings to lowercase
            const filtered = arr.filter(item => typeof item === "string")
                .map(str=> str.toLowerCase());

            resolve(filtered);

        }

    });

}

const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(result => console.log(result))
    .catch(err => console.error(err));