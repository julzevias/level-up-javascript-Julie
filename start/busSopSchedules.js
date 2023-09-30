function scheduleStops2(schedule, time) {
  const splitSchedule = [...schedule].map(time => {
    const split = time.split(":");
    return {
      min: split[0],
      sec: split[1]
    }
  });
  const splitTime = time.split(":");

  const schedulesInSec = splitSchedule.map(time => parseInt(time.min) * 60 + parseInt(time.sec));
  const timeInSec = parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);


  if (schedulesInSec[schedulesInSec.length - 1] < timeInSec) {
    return "-1";
  }


  const stopOnTimeExists = schedulesInSec.some((time) => {
    return time === timeInSec;
  });

  if (stopOnTimeExists) {
    return "00:00"
  }

  
  const busStop = schedulesInSec.find(scheduleTime => {
    return timeInSec < scheduleTime;
  });

  return Math.trunc(((busStop - timeInSec) / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2}) + ":" + ((busStop - timeInSec) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2});
}


const testarr0 = ["13:20", "14:50", "16:55"];
const scheduleWithWaitTime = scheduleStops2(testarr0, "15:10");
const noBussesLeft = scheduleStops2(testarr0, "17:10");
const busIsOnTime = scheduleStops2(testarr0, "13:20");

console.log("time: 16:55, wait: 1:45 \t" + scheduleWithWaitTime);
console.log("time: -1, wait: -1 \t" + noBussesLeft);
console.log("time: 00:00, wait: 00:00 \t" + busIsOnTime);


const testarr1 = ["00:00", "3:00", "4:59", "5:00", "12:10", "23:44"];

console.log("time: 2:00, wait: 01:00 \t" + scheduleStops2(testarr1, "2:00"));
console.log("time: 3:00, wait: 00:00 \t" + scheduleStops2(testarr1, "3:00"));
console.log("time: 4:00, wait: 00:59 \t" + scheduleStops2(testarr1, "4:00"));
console.log("time: 5:00, wait: 00:00 \t" + scheduleStops2(testarr1, "5:00"));
console.log("time: 23:59, wait: -1 \t" + scheduleStops2(testarr1, "23:59"));
