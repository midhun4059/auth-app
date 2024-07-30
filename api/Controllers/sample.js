function fetchData(callback) {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
      const data = "Sample Data";
      callback(data); // Call the callback function with the data
  }, 1000); // 1 second delay
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

// Pass processData as a callback to fetchData
fetchData(processData);
