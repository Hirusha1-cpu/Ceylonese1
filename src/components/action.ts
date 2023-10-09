export async function stickyNav() {
    window.addEventListener("scroll", function() {
      const header = document.querySelector("navbar");
  
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 200);
      }
    });
  }