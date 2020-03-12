export default async (
  repo: string,
  dir: string,
  file: string
): Promise<string> => {
  return await (
    await fetch(
      `https://raw.githubusercontent.com/raa-tools/${repo}/master/${dir}/${file}`
    )
  ).text()
}
