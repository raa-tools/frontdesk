import { useState, useEffect } from "react"

type UseDropdown = {
  reposOpen: {}
  handleRepoDropdown(repoName: string): void
  dirsOpen: {}
  handleDirDropdown(repoName: string, dirName: string): void
}

export default (repos: any[]): UseDropdown => {
  const [reposOpen, setReposOpen] = useState({})
  const [dirsOpen, setDirsOpen] = useState({})
  useEffect(() => {
    const reposInitialState = repos.reduce((acc, repo) => {
      acc[repo.name] = false
      return acc
    }, {})

    const dirsInitialState = repos.reduce((acc, repo) => {
      const validDirs = Object.keys(repo.dirs).filter(item => item !== ".")
      const dirObj = validDirs.reduce((dirAcc, dir) => {
        dirAcc[dir] = false
        return dirAcc
      }, {})

      return { ...acc, [repo.name]: dirObj }
    }, {})

    setReposOpen(reposInitialState)
    setDirsOpen(dirsInitialState)
  }, [repos])

  const handleRepoDropdown = (repoName: string): void => {
    const newState = { ...reposOpen }
    newState[repoName] = !newState[repoName]
    setReposOpen(newState)
  }

  const handleDirDropdown = (repoName: string, dirName: string): void => {
    const newState = { ...dirsOpen }
    newState[repoName][dirName] = !newState[repoName][dirName]
    setDirsOpen(newState)
  }

  return { reposOpen, handleRepoDropdown, dirsOpen, handleDirDropdown }
}
