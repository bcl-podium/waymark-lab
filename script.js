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
const hideEvents = [""];

showEvents.forEach((event) => {
  filterButton.addEventListener(event, showPopper);
});

hideEvents.forEach((event) => {
  filterButton.addEventListener(event, hidePopper);
});

function updateSelection(event) {
  let floatingSelection = document.getElementById("floating-selection");
  floatingSelection.innerText = event.target.dataset.duration;
  floatingSelection.style.cssText = event.target.style.cssText;
  hidePopper();
}

const floatingOptions = document
  .querySelectorAll(".floating-select__option__text")
  .forEach((option) => {
    console.log(option);
    if (option.dataset.orientation === "landscape") {
      option.style.cssText = "width: 40px;";
    } else {
      option.style.cssText = "width: 25px; height: 35px;";
    }

    option.addEventListener("click", (e) => {
      updateSelection(e);
    });
  });
