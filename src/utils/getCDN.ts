export default (repo: string, dir: string, fileName: string): string => {
  return `https://raw.githubusercontent.com/raa-tools/${repo}/master/${dir}/${fileName}`
  // return `https://cdn.jsdelivr.net/gh/raa-tools/${repo}/${dir}/${fileName}`
}
