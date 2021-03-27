const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
