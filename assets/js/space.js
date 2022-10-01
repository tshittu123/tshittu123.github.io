// CHECK QUERY PARAMETERS
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let space = "";
const space_span = document.querySelector("#space_span");
const space_name = document.querySelector("#space_name");
const space_name1 = document.querySelector("#space_name1");
const space_cost = document.querySelector("#space_cost");

if (params?.space) {
  space = spaces.filter((s) => s.id == params.space);
  if (space && space.length && space.length == 1) {
    space = space[0];
    space_name.innerText = space_name1.innerText = space.name;
    space_cost.innerText = space.cost;
  }
} else {
  window.location.href = "booking.html";
}

let step = 1;

const head1 = document.querySelector("#head1");
const head2 = document.querySelector("#head2");
const form1 = document.querySelector("#step1");
const form2 = document.querySelector("#step2");
const next = document.querySelector("#next");
const errs = document.querySelector("#errs");
const page_title = document.querySelector("#page_title");

const event_type = document.querySelector("#event_type");
const event_title = document.querySelector("#title");
const event_date = document.querySelector("#date");
const event_start_time = document.querySelector("#start_time");
const event_end_time = document.querySelector("#end_time");
const event_no_attendees = document.querySelector("#no_attendees");

const user_purpose = document.querySelector("#user_purpose");
const user_name = document.querySelector("#user_name");
const user_email = document.querySelector("#user_email");
const user_phone = document.querySelector("#user_phone");
const user_social_media = document.querySelector("#user_social_media");
const user_organisation = document.querySelector("#user_organisation");

const editForm1 = document.querySelector("#editForm1");
const s_date = document.querySelector("#s_date");
const s_strt = document.querySelector("#s_strt");
const s_atte = document.querySelector("#s_atte");

editForm1.addEventListener(
  "click",
  () => {
    step = 1;
    form1.style.display = "grid";
    head1.style.display = "grid";
    form2.style.display = "none";
    head2.style.display = "none";
    next.innerText = "Next";
    page_title.innerText = "Enter event details";
  },
  false
);

[
  event_type,
  event_title,
  event_date,
  event_start_time,
  event_end_time,
  event_no_attendees,
  user_purpose,
  user_name,
  user_email,
  user_phone,
  user_social_media,
  user_organisation,
].forEach((el) => {
  el.addEventListener(
    "keyup",
    () => {
      errs.style.display = "none";
      errs.innerText = "";
    },
    false
  );
  el.addEventListener(
    "change",
    () => {
      errs.style.display = "none";
      errs.innerText = "";
    },
    false
  );
});

form1.style.display = "grid";
head1.style.display = "grid";

let form_details = {
  event_type: "",
  event_title: "",
  event_date: "",
  event_start_time: "",
  event_end_time: "",
  event_no_attendees: "",

  user_purpose: "",
  user_name: "",
  user_email: "",
  user_phone: "",
  user_social_media: "",
  user_organisation: "",
};

next.addEventListener("click", () => {
  let errs_arr = [];
  if (step === 1) {
    event_type.value
      ? (form_details.event_type = event_type.value)
      : errs_arr.push("Ensure Event Type is Correctly Filled");

    event_title.value
      ? (form_details.event_title = event_title.value)
      : errs_arr.push("Ensure Title is Correctly Filled");

    event_date.valueAsDate
      ? (form_details.event_date = event_date.valueAsDate)
      : errs_arr.push("Ensure Event Date is Correctly Filled");

    event_start_time.value && !isNaN(event_start_time.value)
      ? (form_details.event_start_time = +event_start_time.value)
      : errs_arr.push("Ensure Event Start Time is Correctly Filled");

    event_end_time.value && !isNaN(event_end_time.value)
      ? (form_details.event_end_time = +event_end_time.value)
      : errs_arr.push("Ensure Event End Time is Correctly Filled");

    event_no_attendees
      ? (form_details.event_no_attendees = event_no_attendees.value)
      : errs_arr.push("Ensure No. of Attendees is Correctly Filled");

    console.log(form_details.event_end_time - form_details.event_start_time);
    if (form_details.event_end_time - form_details.event_start_time <= 0) {
      errs_arr.push("Ensure End Time is Later Than Start Time");
    }
  }

  if (step === 2) {
    user_purpose.value
      ? (form_details.user_purpose = user_purpose.value)
      : errs_arr.push("Ensure Purpose Correctly Filled");

    user_name.value
      ? (form_details.user_name = user_name.value)
      : errs_arr.push("Ensure Name is Correctly Filled");

    validateEmail(user_email.value)
      ? (form_details.user_email = user_email.value)
      : errs_arr.push("Ensure Email is Correctly Filled");

    user_phone.value
      ? (form_details.user_phone = user_phone.value)
      : errs_arr.push("Ensure Phone is Correctly Filled");

    user_social_media.value
      ? (form_details.user_social_media = user_social_media.value)
      : (form_details.user_social_media = "");

    user_organisation.value
      ? (form_details.user_organisation = user_organisation.value)
      : errs_arr.push("Ensure Organisation is Correctly Filled");
  }

  if (errs_arr.length > 0) {
    errs.style.display = "block";
    errs.innerText =
      errs_arr.length > 1
        ? `${errs_arr[0]} + ${errs_arr.length - 1} Other Errors`
        : `${errs_arr[0]}`;
    return;
  }

  if (step == 1) {
    step = 2;
    const calcCost =
      space.cost *
      (form_details.event_end_time - form_details.event_start_time);

    space_span.innerText = `${space_span.innerText} for ${
      form_details.event_end_time - form_details.event_start_time
    } hour(s)`;
    space_cost.innerText = calcCost.toLocaleString();
    form1.style.display = "none";
    head1.style.display = "none";
    form2.style.display = "grid";
    head2.style.display = "grid";
    next.innerText = "Proceed to Pay";
    page_title.innerText = "Enter user details";
    s_date.innerText = new Date(form_details.event_date).toLocaleDateString(
      "en-GB"
    );
    s_strt.innerText = form_details.event_start_time + ":00";
    s_atte.innerText = form_details.event_no_attendees;
    window.scrollTo(0, 0);
  } else if (step == 2) {
    let handler = PaystackPop.setup({
      key: paystack_key,
      email: form_details.user_email,
      amount: calcCost * 100,
      // label: "Optional string that replaces customer email"
      onClose: function () {
        alert("Window closed.");
      },
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
      },
    });

    handler.openIframe();
  }
});

console.log(axios);
