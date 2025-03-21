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
      {
        id: 5,
        title: "Blockchain Innovation Forum",
        date: "May 25, 2025",
        location: "Medan Digital Space",
        description:
          "Dive deep into the world of blockchain technology, its applications, and future trends.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 6,
        title: "Cybersecurity Awareness Seminar",
        date: "June 1, 2025",
        location: "Yogyakarta Security Hub",
        description:
          "Understand the latest cybersecurity threats and how to protect your digital assets.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 7,
        title: "Creative Design Expo",
        date: "June 10, 2025",
        location: "Jakarta Art & Design Center",
        description:
          "Showcase of innovative design work in graphic design, product design, and digital art.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 8,
        title: "Cloud Computing Summit",
        date: "June 20, 2025",
        location: "Bandung Cloud Tech Park",
        description:
          "Explore the latest advancements in cloud technology and its impact on businesses.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 9,
        title: "E-commerce Growth Workshop",
        date: "July 5, 2025",
        location: "Surabaya E-commerce Hub",
        description:
          "Learn actionable strategies to boost your e-commerce business and enhance customer experience.",
        image: "https://reactnative.dev/img/tiny_logo.png",
      },
      {
        id: 10,
        title: "Digital Transformation Summit",
        date: "July 15, 2025",
        location: "Bali Innovation Center",
        description:
          "A forum to discuss how businesses can embrace digital transformation to stay competitive.",
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
