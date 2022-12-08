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
  step1: {
    user_name: "",
    user_email: "",
    user_phone: "",
    start_date: "",
  },
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

    user_address.value
      ? (form_details.user_address = user_address.value)
      : (form_details.user_address = "");

    start_date.valueAsDate
      ? (form_details.start_date = start_date.value)
      : errs_arr.push("Ensure Start Date is Correctly Filled");

    end_date.valueAsDate
      ? (form_details.end_date = end_date.value)
      : errs_arr.push("Ensure End Date is Correctly Filled");
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
    let handler = PaystackPop.setup({
      key: paystack_key,
      email: form_details.user_email,
      amount: coworking.cost * 100,
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
