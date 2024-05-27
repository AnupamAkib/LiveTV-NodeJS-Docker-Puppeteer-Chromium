const getDistributedAPI = () => {
    const apiSchedule = require("./api_schedule.json");

    const d = new Date();
    let hour = d.getHours().toString();
    let minute = d.getMinutes().toString();
    if(minute.length==1){
        minute = "0"+minute;
    }
    const timeNow = hour+minute;
    
    for(let i=apiSchedule.length-1; i>=0; i--){
        let scheduleTime = apiSchedule[i].Hour + apiSchedule[i].Minute;
        if(parseInt(timeNow) > parseInt(scheduleTime)){
            return apiSchedule[i].API;
        }
    }
    return "API4";
}

module.exports = {
    getDistributedAPI
}