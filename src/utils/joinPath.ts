export default (path: string, file: string): string => {
  let cleanPath: string = path
  let cleanFile: string = file

  if (path.endsWith("/")) {
    cleanPath = path.slice(0, path.length - 1)
  }
  if (file.startsWith("/")) {
    cleanFile = file.slice(1)
  }

  return `${cleanPath}/${cleanFile}`
}
