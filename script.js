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
