const filterButton = document.getElementById("filter-button");
const floatingSelect = document.getElementById("floating-select");

const popperInstance = Popper.createPopper(filterButton, floatingSelect, {
  placement: "bottom",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function showPopper() {
  floatingSelect.setAttribute("data-show", "");
  popperInstance.update();
}

function hidePopper() {
  floatingSelect.removeAttribute("data-show");
}

const showEvents = ["focus"];
const hideEvents = ["blur"];

showEvents.forEach((event) => {
  filterButton.addEventListener(event, showPopper);
});

hideEvents.forEach((event) => {
  filterButton.addEventListener(event, hidePopper);
});

function updateSelection() {
  let floatingSelection = document.getElementById("floating-selection");
  floatingSelection.innerText = "30";
}

updateSelection();

const floatingOptions = document.querySelectorAll(".floating-select__option");
floatingOptions.forEach((option) => {
  if (option.dataset.orientation === "landscape") {
    console.log(option.firstElementChild.style);
    option.style.cssText = "width: 40px;";
    option.firstElementChild.style.cssText = "";
  } else {
    option.style.cssText = "width: 25px; height: 35px;";
  }

  option.addEventListener("click", () => {
    console.log(option.dataset.duration);
  });
});
