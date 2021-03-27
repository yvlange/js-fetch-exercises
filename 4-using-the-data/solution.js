const url = "https://randomuser.me/api/?inc=gender,name,picture&results=10";

const main = document.querySelector("main");

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    data.results.forEach((user) => {
      const section = document.createElement("section");
      section.classList.add("person");
      main.append(section);
      const h2 = document.createElement("h2");
      h2.textContent = `${user.name.first} ${user.name.last}`;
      const img = document.createElement("img");
      img.src = user.picture.medium;
      img.alt = `${user.name.first} ${user.name.last}`;

      section.append(h2);
      section.append(img);
    });
  });
