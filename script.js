const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const currentYear = document.querySelector("#current-year");
const subscribeDialog = document.querySelector("#subscribe-dialog");
const closeSubscribe = subscribeDialog.querySelector("[data-close-subscribe]");

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
  button.addEventListener("click", () => subscribeDialog.showModal());
});

closeSubscribe.addEventListener("click", () => subscribeDialog.close());

subscribeDialog.addEventListener("click", (event) => {
  if (event.target === subscribeDialog) {
    subscribeDialog.close();
  }
});

currentYear.textContent = new Date().getFullYear();