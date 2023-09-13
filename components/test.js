// const axios = require("axios");
// const fs =  require("fs");
// const image = fs.readFileSync('../images/sample2.jpg', {
//     encoding: "base64"
// });

// axios({
//     method: "POST",
//     url: "https://detect.roboflow.com/garbage_detection-wvzwv/9",
//     params: {
//         api_key: "UZKg5qOB4uV1SEipe4ec"
//     },
//     data: image,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error.message);
// });

const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("../images/sample4.jpg", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://detect.roboflow.com/garbage-classification-qmp4x/11",
    params: {
        api_key: "UZKg5qOB4uV1SEipe4ec"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});


// import axios from "axios";
// import fs from 'fs'
// const image = fs.readFileSync('images/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg', {
//     encoding: "base64"
// });

// axios({
//     method: "POST",
//     url: "https://detect.roboflow.com/garbage_detection-wvzwv/9",
//     params: {
//         api_key: "UZKg5qOB4uV1SEipe4ec"
//     },
//     data: image,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error.message);
// });