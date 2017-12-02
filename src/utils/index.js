
export const convertDurationToSeconds = duration => {
    const split = duration.split(':')
  
    let seconds = 0
    seconds += parseInt(split[0]) * 60 * 60
    seconds += parseInt(split[1]) * 60
    seconds += parseInt(split[2])
    
    return seconds
}

export const convertSecondsToDuration = seconds => {
    const hours = Math.floor(Math.floor(seconds / 60) / 60)
    seconds = seconds - (hours * 60 * 60)
    const minutes = Math.floor(seconds / 60)
    seconds = seconds - (minutes * 60)

    return `${hours}:${minutes}:${seconds}`
}
