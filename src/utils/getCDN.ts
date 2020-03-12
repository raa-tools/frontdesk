export default (repo: string, dir: string, fileName: string): string => {
  return `https://cdn.jsdelivr.net/gh/raa-tools/${repo}/${dir}/${fileName}`
}
