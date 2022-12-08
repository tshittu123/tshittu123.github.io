//SPACE SELECTION

const spaceGetter = (space_name) => {
  let space = "";
  spaces.forEach((sp) => {
    if (sp.categories.includes(space_name)) {
      space = `${space}
      <div class="norm_events">
          <img src="${sp.image}" />
          <h4>${sp.name}</h4>
          <p>${sp.desc}</p>
          <p class="feat">Features</p>
          <div class="grid_icons">`;
      sp.features.forEach((feat) => {
        space = `${space}<p><img src="assets/images/icons/${feat[0]}.png" />${feat[1]}</p>`;
      });
      space = `${space}
          </div>
          <div class="row myPrice">
            <div class="col-5">
              <h5>
                &#8358;${sp.cost.toLocaleString()} 
                <span>${sp.duration}</span>
              </h5>
            </div>
            <div class="col-7">
              <a href="space.html?space=${sp.id}">
                <button class="cst_btn">Book Space</button>
              </a>
            </div>
          </div>
        </div>
  `;
    }
  });
  return space;
};

const worksGetter = () => {
  let space = "";
  works.forEach((sp) => {
    let li = "";
    sp.li.forEach((ls) => {
      li = `${li}<li>${ls}</li>`;
    });
    space = `${space}
        <div class="norm_events2 ${sp.class}">
            <p>${sp.plan}</p>
            <h4>&#8358;${sp.cost.toLocaleString()} <span>${
      sp.duration
    }</span></h4>
            <p>${sp.desc}</p>
            <p>${sp.desc2}</p>
            <ul>${li}</ul>
            <a href='coworking.html?coworking=${sp.id}'>
              <button class="${sp.btn}">Book now</button>
            </a>
        </div>`;
  });
  return space;
};

const lis = document.querySelectorAll(".lis");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((a_li, i) => {
      a_li.classList.remove("active");
    });
    li.classList.add("active");
    let space = li.innerText.toLowerCase();
    if (space === "co-working") {
      document.querySelector("#events").innerHTML = worksGetter();
      return;
    }
    console.log(space);
    if (space == "trainings & meetings") {
      space = "trainings";
    }
    document.querySelector("#events").innerHTML = spaceGetter(space);
  });
});

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

if (params?.co_working) {
  lis.forEach((a_li, i) => {
    if (i == lis.length - 1) {
      a_li.classList.add("active");
      return;
    }
    a_li.classList.remove("active");
  });
  document.querySelector("#events").innerHTML = worksGetter();
} else {
  document.querySelector("#events").innerHTML = spaceGetter("events");
}
