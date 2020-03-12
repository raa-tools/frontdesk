type RepoSource = {
  name: string
  url: string
}

const repoSources: Array<RepoSource> = [
  {
    name: "indd",
    url: "https://raa-operator.herokuapp.com/api/repo/indd",
  },
  {
    name: "operator",
    url: "https://raa-operator.herokuapp.com/api/repo/operator",
  },
]

export default repoSources
