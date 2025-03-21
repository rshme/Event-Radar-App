export class EventModel {
  constructor() {
    this.events = [
      {
        id: 1,
        title: "Tech Conference 2025",
        date: "April 15, 2025",
        location: "Jakarta Convention Center",
        description:
          "A premier tech event featuring the latest innovations and industry trends.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 2,
        title: "Digital Marketing Workshop",
        date: "April 22, 2025",
        location: "Bandung Creative Hub",
        description:
          "Learn cutting-edge digital marketing strategies from industry experts.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 3,
        title: "Startup Networking Night",
        date: "May 5, 2025",
        location: "Surabaya Innovation Center",
        description:
          "Connect with founders, investors, and tech enthusiasts in a casual setting.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 4,
        title: "AI Development Summit",
        date: "May 17, 2025",
        location: "Bali Tech Park",
        description:
          "Explore the future of artificial intelligence and machine learning applications.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
    ];
  }

  getAllEvents() {
    return this.events;
  }

  getEventById(id) {
    return this.events.find((event) => event.id === id);
  }
}
