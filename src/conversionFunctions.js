const toDate = (dt, timeZone) => {
    const options = { timeZone: timeZone, year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dt*1000).toLocaleString('en-AU', options)
} 

const getDay = (dt, timeZone) => {
    const options = { timeZone: timeZone, weekday: "long"} 
    return new Date(dt*1000).toLocaleString('en-AU', options)
}

const toTime = (dt, timeZone) => {
    const options = {timeZone: timeZone, hour: "2-digit", minute: "2-digit"}
    return new Date(dt*1000).toLocaleString('en-AU', options)
}
    

const toCelcius = (tempK) => {
    return (tempK - 273.15).toFixed(2)
}

export {toDate, toCelcius, getDay, toTime}
