const toDate = (dt, timeZone) => {
    const options = { timeZone: timeZone, weekday: "long", year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dt*1000).toLocaleString('en-AU', options)
} 

const toCelcius = (tempK) => {
    return (tempK - 273.15).toFixed(2)
}

export {toDate, toCelcius}
