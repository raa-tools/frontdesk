export default (repo: string, dirOrFile: string, file?: string): string => {
  const pathToFile = file ? `${dirOrFile}/${file}` : dirOrFile
  return `https://github.com/raa-tools/${repo}/blob/master/${pathToFile}`
}
