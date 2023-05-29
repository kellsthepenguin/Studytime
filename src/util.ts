function convertTimeStringToSeconds(timeString: string) {
  const timeParts = timeString.split(':')
  const hours = parseInt(timeParts[0], 10)
  const minutes = parseInt(timeParts[1], 10)
  const seconds = parseInt(timeParts[2], 10)

  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  return totalSeconds
}

function convertSecondsToTimeString(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  return timeString
}

export { convertTimeStringToSeconds, convertSecondsToTimeString }
