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

const spaces = [
  {
    image: "assets/images/event1.png",
    name: "The Auditorium",
    desc: " The lorem ipsum is a placeholder text used in publishing and graphic design.",
    capacity: "The vault seats 12 persons",
    cost: 20000,
    duration: "per hour",
    id: 1,
    categories: ["events"],
  },
  {
    image: "assets/images/event2.png",
    name: "Galatica",
    desc: " The lorem ipsum is a placeholder text used in publishing and graphic design.",
    capacity: "The vault seats 12 persons",
    cost: 20000,
    duration: "per hour",
    id: 2,
    categories: ["events", "trainings"],
  },
  {
    image: "assets/images/event3.png",
    name: "The Vault",
    desc: " The lorem ipsum is a placeholder text used in publishing and graphic design.",
    capacity: "The vault seats 12 persons",
    cost: 20000,
    duration: "per hour",
    id: 3,
    categories: ["trainings"],
  },
  {
    image: "assets/images/event4.png",
    name: "Demo Lab",
    desc: " The lorem ipsum is a placeholder text used in publishing and graphic design.",
    capacity: "The vault seats 12 persons",
    cost: 20000,
    duration: "per hour",
    id: 4,
    categories: ["demos"],
  },
];

const works = [
  {
    id: 1,
    plan: "Daily Pass",
    cost: 3000,
    duration: "per day",
    desc: "A Daily Pass allows you access to the shared workspaces for one working day, between the hours of 8:00am and 6:00pm.",
    desc2:
      "You are able to take full advantage of everything the space offers, including:",
    li: [
      "fixed high-end work stations",
      "uninterrupted power supply",
      "the lounge area",
      "free (but limited) printing/scanning/photocopy",
      "access to free networking programs",
    ],
    class: "green_events",
    btn: "cst_btn",
  },
  {
    id: 2,
    plan: "Weekly Pass",
    cost: 12000,
    duration: "per week",
    desc: "Access to the shared workspaces for five (5) consecutive working days between the hours of 8:00am and 6:00pm.",
    desc2:
      "You are able to take full advantage of everything the space offers, including:",
    li: [
      "fixed high-end work stations",
      "uninterrupted power supply",
      "the lounge area",
      "free (but limited) printing/scanning/photocopy",
      "access to free networking programs",
    ],
    class: "red_events",
    btn: "cst_btn",
  },
  {
    id: 3,
    plan: "Flexible Desk",
    cost: 10000,
    duration: "per week",
    desc: "Access to the shared workspaces for any three (3) days between Monday and Friday and between the hours of 8:00am and 6:00pm.",
    desc2:
      "You are able to take full advantage of everything the space offers, including:",
    li: [
      "fixed high-end work stations",
      "uninterrupted power supply",
      "the lounge area",
      "free (but limited) printing/scanning/photocopy",
      "access to free networking programs",
    ],
    class: "blue_events",
    btn: "cst_btn1",
  },
];
