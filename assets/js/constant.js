// MENU
document.querySelector("#mobile_menu").addEventListener("click", () => {
  const li_holder = document.querySelector(".li_holder");
  if (li_holder.style.display === "block") {
    li_holder.style.display = "none";
    return;
  }
  li_holder.style.display = "block";
});

document.querySelector(".menu").addEventListener("click", () => {
  if (window.innerWidth > 768) return;
  const li_holder = document.querySelector(".li_holder");
  li_holder.style.display = "none";
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const paystack_key = "pk_test_dc4b5d5d52135da8876154a43229ba0f35621d23";

const apiUrl = "/api/";

const spaces = [
  {
    image: "assets/images/event1.png",
    name: "NXT Room (Auditorium)",
    desc: "The Auditorium is specially designed for your corporate events and seminars.",
    capacity: "The vault seats 12 persons",
    cost: 50000,
    duration: "per hour",
    id: 1,
    categories: ["events"],
    features: [
      ["seats", "Seats 90 people"],
      ["stage", "Stage/platform"],
      ["projector", "Projector screen"],
      ["barcode", "Ceiling barcodes"],
      ["lounge", "Lounge area"],
      ["cafe", "Cafe access"],
      ["power", "24/7 uninterrupted power supply"],
      ["internet", "Internet access"],
      ["event", "Event support"],
    ],
  },
  {
    image: "assets/images/event2.png",
    name: "Simul8r (Training room)",
    desc: "A training room with sleek modern design built to foster learning and Innovation.",
    capacity: "The vault seats 12 persons",
    cost: 35000,
    duration: "per hour",
    id: 2,
    categories: ["events", "trainings"],
    features: [
      ["", ""],
      ["seats", "Seats 21 people"],
      ["stage", "Whiteboards"],
      ["projector", "Projector screen"],
      ["barcode", "Ceiling barcodes"],
      ["lounge", "Lounge area"],
      ["cafe", "Cafe access"],
      ["power", "24/7 uninterrupted power supply"],
      ["internet", "Internet access"],
    ],
  },
  {
    image: "assets/images/event5.png",
    name: "Galactica (Meeting room)",
    desc: "A conferencing room for collaborating and launching new innovative ideas.",
    cost: 10000,
    duration: "per hour",
    id: 3,
    categories: ["trainings"],
    features: [
      ["", ""],
      ["seats", "Seats 7 people"],
      ["stage", "Teleconferencing"],
      ["projector", "TV screen"],
      ["printing", "Printing and copy"],
      ["lounge", "Lounge area"],
      ["cafe", "Cafe access"],
      ["power", "24/7 uninterrupted power supply"],
      ["internet", "Internet access"],
    ],
  },
  {
    image: "assets/images/event3.png",
    name: "The Vault",
    desc: "A dedicated space made for corporate meetings, podcast recordings and more.",
    capacity: "The vault seats 12 persons",
    cost: 11000,
    duration: "per hour",
    id: 4,
    categories: ["trainings"],
    features: [
      ["", ""],
      ["seats", "Seats 8 people"],
      ["stage", "Soundproof"],
      ["projector", "Presentation TVs"],
      ["lounge", "Lounge area"],
      ["cafe", "Cafe access"],
      ["power", "24/7 uninterrupted power supply"],
      ["internet", "Internet access"],
      ["event", "Event support"],
    ],
  },
  {
    image: "assets/images/event4.png",
    name: "Demo Lab",
    desc: "Access to a dedicated space designed for testing of product prototype",
    capacity: "The vault seats 12 persons",
    cost: 30000,
    duration: "per hour",
    id: 5,
    categories: ["demos"],
    features: [
      ["", ""],
      ["seats", "Seats 8 people"],
      ["stage", "Large Whiteboard"],
      ["projector", "Presentation TV's"],
      ["stage", "7 Demo pods"],
      ["lounge", "Lounge area"],
      ["cafe", "Cafe access"],
      ["power", "24/7 uninterrupted power supply"],
      ["internet", "Internet access"],
    ],
  },
];

const works = [
  {
    id: 1,
    plan: "Daily Pass",
    cost: 3000,
    duration: "per day",
    desc: "A daily pass grants you access to the shared workspaces for one working day, between the hours of 8:00am and 6:00pm.",
    desc2: "Take advantage of everything the space has to offer, including:",
    li: [
      "Fixed high-end workstations",
      "Uninterrupted power supply",
      "The lounge area",
      "Free (but limited) printing/scanning/photocopy access",
      "Networking opportunities",
    ],
    class: "green_events",
    btn: "cst_btn",
  },
  {
    id: 2,
    plan: "Weekly Pass",
    cost: 12000,
    duration: "per week",
    desc: "A weekly pass grants you access to the shared workspaces for five (5) consecutive working days, between the hours of 8:00am and 6:00pm.",
    desc2: "Take advantage of everything the space has to offer, including:",
    li: [
      "Fixed high-end workstations",
      "Uninterrupted power supply",
      "The lounge area",
      "Free (but limited) printing/scanning/photocopy access",
      "Networking opportunities",
    ],
    class: "red_events",
    btn: "cst_btn",
  },
  {
    id: 3,
    plan: "Monthly Pass",
    cost: 45000,
    duration: "per month",
    desc: "A monthly pass grants you access to the shared workspaces for up to 20 working days, between the hours of 8:00am and 6:00pm.",
    desc2: "Take advantage of everything the space has to offer, including:",
    li: [
      "Fixed high-end workstations",
      "Uninterrupted power supply",
      "The lounge area",
      "Free (but limited) printing/scanning/photocopy access",
      "Networking opportunities",
    ],
    class: "blue_events",
    btn: "cst_btn",
  },
];
