// Callback Example
function fetchDataCallback(url, callback) {
    setTimeout(() => {
        const data = { message: "Data fetched from " + url };
        callback(data);
    }, 1000);
}

function handleDataCallback(data) {
    console.log("Callback:", data.message);
}

fetchDataCallback("https://via.placeholder.com/200", handleDataCallback);

// Promise Example
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating success or failure
            const success = true;
            if (success) {
                resolve({ message: "Data fetched from " + url });
            } else {
                reject("Failed to fetch data");
            }
        }, 1000);
    });
}

fetchDataPromise("https://via.placeholder.com/200")
    .then(data => {
        console.log("Promise:", data.message);
    })
    .catch(error => {
        console.error("Promise:", error);
    });

// Async/Await Example
async function fetchDataAsync(url) {
    try {
        const data = await fetchDataPromise(url);
        console.log("Async/Await:", data.message);
    } catch (error) {
        console.error("Async/Await:", error);
    }
}

fetchDataAsync("https://via.placeholder.com/200");
