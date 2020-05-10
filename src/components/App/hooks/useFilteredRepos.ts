import { useState, useEffect } from "react"
export default (repos): any[] => {
  const [filteredRepos, setFilteredRepos] = useState([])

  useEffect(() => {
    setFilteredRepos(repos)
  }, [repos])

  const filterRepos = (str: string): void => {
    const checkDir = (str: string, dir: {}): {} => {
      if (!dir["."]) return

      const _filtered = dir["."].filter((file: string) =>
        file.toLowerCase().includes(str.toLowerCase())
      )
      return _filtered.length ? { ".": _filtered } : null
    }

    const _filteredRepos = Object.keys(repos)
      .map(key => {
        const repo = repos[key]
        const repoDirs = repo.dirs

        const _filteredDirs = Object.keys(repoDirs).reduce((acc, curr) => {
          if (Array.isArray(repoDirs[curr])) {
            const filtered = repoDirs[curr].filter((file: string) =>
              file.toLowerCase().includes(str.toLowerCase())
            )
            if (filtered.length) {
              acc[curr] = filtered
            }
          } else {
            const filtered = checkDir(str, repoDirs[curr])
            if (filtered) {
              acc[curr] = filtered
            }
          }
          return acc
        }, {})

        return {
          name: repo.name,
          dirs: _filteredDirs,
        }
      })
      .filter(repo => Object.keys(repo.dirs).length)

    setFilteredRepos(_filteredRepos)
  }

  return [filteredRepos, filterRepos]
}
