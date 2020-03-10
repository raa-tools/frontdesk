const getCDN = (dir, filename) =>
  `https://cdn.jsdelivr.net/gh/raa-scripts/indd/${dir}/${filename}`;
const body = document.querySelector("body");

const inddH2 = document.createElement("h2");
inddH2.innerText = "InDesign Scripts";
body.appendChild(inddH2);

fetch("https://raa-operator.herokuapp.com/api/repo/indd")
  .then(res => res.json())
  .then(data => {
    Object.keys(data).forEach(dir => {
      const dirUL = document.createElement("ul");
      const dirLI = document.createElement("li");
      const filesUL = document.createElement("ul");

      dirLI.className = "dir";
      dirLI.innerHTML = `
      <h3>
        ${dir}
      </h3>
      <p>
        ${
          data[dir] && data[dir]["."] && data[dir]["."]["readme.md"]
            ? "text"
            : ""
        }
      </p>
      `;

      dirUL.appendChild(dirLI);
      dirLI.appendChild(filesUL);

      const filenames = data[dir]["."] || data[dir];
      if (Array.isArray(filenames)) {
        filenames.forEach(filename => {
          const fileLI = document.createElement("li");
          const cdn = getCDN(dir, filename);
          fileLI.innerHTML = `
          <h4 className="file">
            <a href="${cdn}" download>
              ${filename}
            </a>
          </h4>`;
          filesUL.appendChild(fileLI);
        });
        body.appendChild(dirUL);
      }
    });
  });

