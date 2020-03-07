const body = document.querySelector("body");

const inddH2 = document.createElement("h2");
inddH2.innerText = "InDesign Scripts";
body.appendChild(inddH2);

fetch("https://raa-operator.herokuapp.com/api/getrepos/indd")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    Object.entries(data).forEach(([dir, filenames]) => {
      const dirUL = document.createElement("ul");
      const dirLI = document.createElement("li");
      const filesUL = document.createElement("ul");

      dirLI.innerHTML = dir;

      dirUL.appendChild(dirLI);
      dirLI.appendChild(filesUL);

      filenames.forEach(filename => {
        const fileLI = document.createElement("li");
        fileLI.innerHTML = `<h4 style="margin-bottom: 0;"><a href="https://cdn.jsdelivr.net/gh/raa-scripts/indd/${dir}/${filename}" download>${filename}</a></h4><p style="margin-top: 0;">${filename} description</p>`;
        filesUL.appendChild(fileLI);
      });
      body.appendChild(dirUL);
    });
  });
