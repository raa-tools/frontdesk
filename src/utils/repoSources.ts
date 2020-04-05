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
    name: "indd",
    url: joinPath(repoAPI, "indd"),
  },
  {
    name: "py",
    url: joinPath(repoAPI, "py"),
  },
]

export default repoSources
