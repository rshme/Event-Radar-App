import { EventModel } from "../models/EventModel";

export class EventController {
  constructor() {
    this.model = new EventModel();
  }

  getAllEvents() {
    return this.model.getAllEvents();
  }

  getEventById(id) {
    return this.model.getEventById(id);
  }
}
