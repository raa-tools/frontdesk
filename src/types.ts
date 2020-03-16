export type DownloadTarget = {
  repo: string
  dirName: string
  file: string
}

export type CheckedList = {
  [key: string]: boolean
}

// Recursive definition
export type Dir = {
  [key: string]: Dir | Array<string>
}
