document.addEventListener("DOMContentLoaded", () => {
  // getting all our element
  // sidebar
  const sidebar = document.querySelector("#sidebar");
  // open button
  const openSidebarBtn = document.querySelector("#open-sidebar-btn");
  // clsoe button
  const closeSidebarBtn = document.querySelector("#close-sidebar-btn");

  // Keep the sidebar off-screen without creating horizontal page overflow.
  // Using translateX() moves it out of the viewport instead of setting right:-100%,
  // which pushes the element beyond the document width and makes the page scrollable.
  const setSidebarState = (isOpen) => {
    sidebar.style.transform = isOpen ? "translateX(0)" : "translateX(110%)";
    sidebar.style.opacity = isOpen ? "1" : "0";
    sidebar.style.visibility = isOpen ? "visible" : "hidden";
    sidebar.style.pointerEvents = isOpen ? "auto" : "none";
  };

  // start closed so the sidebar stays completely outside the viewport
  setSidebarState(false);

  // close sidebar
  closeSidebarBtn.addEventListener("click", () => {
    setSidebarState(false);
  });

  // open sidebar
  openSidebarBtn.addEventListener("click", () => {
    setSidebarState(true);
  });
});