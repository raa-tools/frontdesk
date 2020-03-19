const padTime = (time: number): string => {
  return "".padStart.call(time, 2, "0")
}

const getDateTime = (): string => {
  const d = new Date()
  const year = "".slice.call(d.getFullYear(), 2)
  const month = padTime(d.getMonth() + 1)
  const date = padTime(d.getDate())
  const hours = padTime(d.getHours())
  const min = padTime(d.getMinutes())
  const secs = padTime(d.getSeconds())

  return `${year}${month}${date}-${hours}${min}${secs}`
}

export default getDateTime
