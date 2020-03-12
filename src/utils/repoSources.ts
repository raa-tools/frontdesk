import joinPath from "./joinPath"

const api = "https://raa-peekachu.herokuapp.com/api/repo/"

type RepoSource = {
  name: string
  url: string
}

const repoSources: Array<RepoSource> = [
  {
    name: "indd",
    url: joinPath(api, "indd"),
  },
]

export default repoSources
