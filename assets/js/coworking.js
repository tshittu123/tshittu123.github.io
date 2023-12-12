// CHECK QUERY PARAMETERS
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let coworking = "";

if (params?.coworking) {
  coworking = works.filter((s) => s.id == params.coworking);
  if (coworking && coworking.length && coworking.length == 1) {
    const space_name = document.querySelector("#space_name");
    const space_cost = document.querySelector("#space_cost");
    coworking = coworking[0];
    space_name.innerText = coworking.plan;
    space_cost.innerText = coworking.cost.toLocaleString();
  }
} else {
  window.location.href = "booking.html?co_working=true";
}

let step = 1;

const head1 = document.querySelector("#head1");
const form1 = document.querySelector("#step1");
const next = document.querySelector("#next");
const errs = document.querySelector("#errs");

const user_name = document.querySelector("#user_name");
const user_email = document.querySelector("#user_email");
const user_phone = document.querySelector("#user_phone");
const start_date = document.querySelector("#start_date");

const termsconditions = document.querySelector("#termsconditions");
const tandc = document.querySelector("#tandc");
const tclick = document.querySelector("#tclick");
const cancel_x = document.querySelector("#cancel_x");

const terms = document.querySelector("#terms");

termsconditions.style.display = "flex";

tclick.addEventListener("click", () => {
  tandc.style.display = "block";
});
cancel_x.addEventListener("click", () => {
  tandc.style.display = "none";
});

[user_name, user_email, user_phone, start_date].forEach((el) => {
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
  user_name: "",
  user_email: "",
  user_phone: "",
  start_date: "",
  terms: false,
};

next.addEventListener("click", () => {
  let errs_arr = [];

  if (step === 1) {
    user_name.value
      ? (form_details.user_name = user_name.value)
      : errs_arr.push("Ensure Name is Correctly Filled");

    validateEmail(user_email.value)
      ? (form_details.user_email = user_email.value)
      : errs_arr.push("Ensure Email is Correctly Filled");

    user_phone.value
      ? (form_details.user_phone = user_phone.value)
      : errs_arr.push("Ensure Phone is Correctly Filled");

    start_date.valueAsDate
      ? (form_details.start_date = start_date.value)
      : errs_arr.push("Ensure Start Date is Correctly Filled");

    terms.checked
      ? (form_details.terms = true)
      : errs_arr.push("Please accept Terms and Conditions");
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
    next.innerText = "Submitting...";
    next.setAttribute("disabled", true);
    const form_data = {
      eventType: "Events",
      eventTitle: "Co-working",
      date: new Date(form_details.start_date).toLocaleDateString("en-GB"),
      startTime: 0,
      endTime: 24,
      noOfAttendance: 1,
      categoryName: "Co-working",
      subCategoryName: coworking.plan,
      personalInformation: {
        purposeOfUsage: "Co-working",
        name: form_details.user_name,
        email: form_details.user_email,
        phoneNumber: form_details.user_phone,
        organization: "",
        socialMedia: "",
      },
    };
    axios
      .post(apiUrl + "reservations", form_data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Application successfully sent, you will be contacted shortly",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
        next.innerText = "Confirm booking";
        next.removeAttribute("disabled");
      });
  }
});
