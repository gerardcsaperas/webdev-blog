const hoursDedicatedToWebDev = () => {
    const startDate = new Date('2020-04-06').getTime()
    const currDate = new Date().getTime()

    const days = (currDate - startDate) / (1000 * 3600 * 24);

    /*
     Avg. hours considerations
    ---------------------------
    April 6th - Sept 7th = Min. 8 hours a day, no free days.
    Sep 7th - Today = Min. 45 h weekly (Konodrac + free time).
    Sep 7th - Today = 6 h min on every weekend day. Probably more.
    */
    const hours = days * 8.5
    const floorHours = Math.floor(hours)

    const minutes = 60/100 * (hours - Math.floor(hours))
    const floorMinutes = Math.floor(minutes);
    
    return `${floorHours} horas${ floorMinutes > 0 ? ` y ${floorMinutes} minutos` : '' }`
}

hoursDedicatedToWebDev();

module.exports = hoursDedicatedToWebDev;