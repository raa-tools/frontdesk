// import { inddScripts } from "./manifest"

// This is here for now until we configure webpack
const inddScripts = [
  {
    name: "Place Consecutive PDFs",
    description: "Place PDFs from a folder into consecutive pages.",
    path: "placeConsecutivePDFs/placeConsecutivePDFs.js"
  },
  {
    name: "Batch Convert", 
    description: "Convert a batch of files. Not written by RAA",
    path: "batchConvert/batch_convert.jsxbin"
  },
  {
    name: "Batch Relink",
    description: "Relink images in a batch of folders",
    path: "batchRelink/batchRelink.js"
  },
  {
    name: "Batch Resize",
    description: "Resize a batch of documents",
    path: "batchResize/batchResize.js"
  },
  {
    name: "Farrow & Ball",
    description: "Blend between two gradients",
    path: "farrow-n-ball/farrow-n-ball.js"
  },
  {
    name: "Rename Layer",
    description: "Rename layer in a batch of files",
    path: "renameLayer/renameLayer.js"
  },
  {
    name: "Check Images",
    description: "Check image resolution in a batch of files",
    path: "checkImages/checkImages.js"
  },
  {
    name: "Gridnik",
    description: "Place images in a grid (wip, kind of janky)",
    path: "gridnik/gridnik.js"
  }
].sort((a, b) => {
  if (a.name < b.name) return -1
  else if (a.name > b.name) return 1
  return 0
})

const body = document.querySelector("body")

const inddH2 = document.createElement("h2")
inddH2.innerText = "InDesign Scripts"
body.appendChild(inddH2)

const inddUL = document.createElement("ul")
inddScripts.forEach(script => {
  const li = document.createElement("li")
  li.innerHTML = `<h4 style="margin-bottom: 0;"><a href="https://cdn.jsdelivr.net/gh/raa-scripts/indd/${script.path}" download>${script.name}</a></h4><p style="margin-top: 0;">${script.description}</p>`
  inddUL.appendChild(li)
})
body.appendChild(inddUL)
