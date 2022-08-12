//fetch options
const hostname= "https://qrrespuestarapida.dapachecodev.com";
const token = "Bearer 3|4OIudKedjMAotHaPs33xk7WNOdDvXFmlNLwLDQSY";
const FetchOptions ={
    
    postContact :`${hostname}/api/v1/persons`,
    postDisappeared :`${hostname}/api/v1/disappeareds`,
    header : {
        Accept: "application/json",
        Authorization: token,
        "Content-Type": "application/json",
    },
};

export {FetchOptions};