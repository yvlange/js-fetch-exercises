const url = "https://.typicode.com/todos/x";

fetch(url)
  .then((response) => {
    return response.json();
    // if (response.ok) {
    // } else {
    //   console.log(response.status);

    //   throw new Error("Error status: ", response.status);
    // }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error status: ", error.toString());
  });
