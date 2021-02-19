import {register as alarmClock} from './libs/alarm-clock.js'
import {register as newsFeed} from './libs/news-feed.js'


alarmClock(1, "time to eat", (msg) => {
    console.log(msg);
})

newsFeed(1.5, "20min", (msg) => {
    console.log(msg);
})


newsFeed(1, "blick", (msg) => {
    console.error(msg);
})
