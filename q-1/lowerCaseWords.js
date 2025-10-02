function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Must be an array")
        } else {
            const filtered = arr.filter(item => typeof item === "string")
                .map(str=> str.toLowerCase());

            resolve(filtered);

        }

    });

}

const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(result => console.log(result))
    .catch(err => console.error(err));