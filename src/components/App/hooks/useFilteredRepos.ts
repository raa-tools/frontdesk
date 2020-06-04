import { useState, useEffect } from "react"

type UseFilteredRepos = [any[], Function]

export default (repos): UseFilteredRepos => {
  const [filteredRepos, setFilteredRepos] = useState([])

  useEffect(() => {
    setFilteredRepos(repos)
  }, [repos])

  const filterRepos = (str: string): void => {
    const checkDir = (str: string, dir: {}): {} => {
      if (!dir["."]) return

      const _filtered = dir["."].filter(
        (file: string) =>
          file.toLowerCase().includes(str.toLowerCase()) || file === "readme.md"
      )

      return _filtered.length ? { ".": _filtered } : null
    }

    const _filteredRepos = Object.keys(repos)
      .map(key => {
        const repo = repos[key]
        const repoDirs = repo.dirs

        const _filteredDirs = Object.keys(repoDirs).reduce((acc, dir) => {
          if (dir.toLowerCase().includes(str.toLowerCase())) {
            // If search string matches directory,
            // include all files in that directory
            acc[dir] = repoDirs[dir]
          } else if (Array.isArray(repoDirs[dir])) {
            const filtered = repoDirs[dir].filter(
              (file: string) =>
                file.toLowerCase().includes(str.toLowerCase()) ||
                file === "readme.md"
            )
            if (filtered.length) {
              acc[dir] = filtered
            }
          } else {
            const filtered = checkDir(str, repoDirs[dir])
            if (filtered) {
              acc[dir] = filtered
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
