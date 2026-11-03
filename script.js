const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const currentYear = document.querySelector("#current-year");
const subscribeDialog = document.querySelector("#subscribe-dialog");
const closeSubscribe = subscribeDialog.querySelector("[data-close-subscribe]");
const planStatus = subscribeDialog.querySelector("#plan-status");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

document.querySelectorAll("[data-open-subscribe]").forEach((button) => {
  button.addEventListener("click", () => {
    subscribeDialog.classList.remove("is-closing");
    planStatus.textContent = "";
    subscribeDialog.showModal();
  });
});

const closeSubscriptionDialog = () => {
  if (subscribeDialog.open && !subscribeDialog.classList.contains("is-closing")) {
    subscribeDialog.classList.add("is-closing");
  }
};

subscribeDialog.addEventListener("animationend", (event) => {
  if (event.target === subscribeDialog && event.animationName === "dialog-exit") {
    subscribeDialog.classList.remove("is-closing");
    subscribeDialog.close();
  }
});

subscribeDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSubscriptionDialog();
});

closeSubscribe.addEventListener("click", closeSubscriptionDialog);

subscribeDialog.querySelectorAll("[data-plan-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    planStatus.textContent = `${button.dataset.planChoice} selected for preview. Monthly checkout is not connected yet.`;
  });
});

subscribeDialog.addEventListener("click", (event) => {
  if (event.target === subscribeDialog) {
    closeSubscriptionDialog();
  }
});

currentYear.textContent = new Date().getFullYear();