import joinPath from "./joinPath"

const peekachuAPI = "https://raa-peekachu.herokuapp.com/api/"
export const ziplineAPI = `https://raa-zipline.herokuapp.com/api/`

const repoAPI = joinPath(peekachuAPI, "repo")

type RepoSource = {
  name: string
  url: string
}

const repoSources: Array<RepoSource> = [
  {
    name: "InDesign Scripts",
    url: joinPath(repoAPI, "indd"),
  },
  {
    name: "Python Scripts",
    url: joinPath(repoAPI, "py"),
  },
  {
    name: "Node Scripts",
    url: joinPath(repoAPI, "node-scripts"),
  },
]

export default repoSources
