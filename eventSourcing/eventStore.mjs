import { Event } from "./event.mjs"

export const eventStore = {
    eventList: [],
    addEvent(event) {this.eventList.push(event)}
}