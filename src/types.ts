export type DownloadTarget = {
  repo: string
  dirName: string
  file: string
}

export type CheckedList = {
  [key: string]: boolean
}

// Recursive definition
type DirType = { "."?: Array<string> } | Dir
export type Dir = {
  [key: string]: DirType
}
