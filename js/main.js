// ===== Notification Bar =====
const NAMES = ["Kevin", "Sarah", "Mike", "Jessica", "Tyler", "Amanda", "Brandon", "Ashley", "Chris", "Emily"];

function initNotificationBar() {
  const notificationName = document.getElementById("notification-name");
  
  setInterval(() => {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    notificationName.textContent = randomName;
  }, 4000);
}

// ===== FAQ Accordion =====
function toggleFaq(button) {
  const faqItem = button.closest(".faq-item");
  const isActive = faqItem.classList.contains("active");
  
  // Close all other items
  document.querySelectorAll(".faq-item.active").forEach(item => {
    if (item !== faqItem) {
      item.classList.remove("active");
    }
  });
  
  // Toggle current item
  if (isActive) {
    faqItem.classList.remove("active");
  } else {
    faqItem.classList.add("active");
  }
}

// ===== Hide Link Preview on Hover =====
function initHiddenLinks() {
  const hiddenLinks = document.querySelectorAll('[data-link-hidden="true"]');
  
  hiddenLinks.forEach(link => {
    // Prevent right-click context menu from showing link
    link.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });
    
    // Prevent drag behavior that could expose the URL
    link.addEventListener("dragstart", (e) => {
      e.preventDefault();
      return false;
    });
    
    // Hide the link in the status bar on hover (CSS handles this, but ensure consistency)
    link.addEventListener("mouseenter", () => {
      link.style.cursor = "pointer";
    });
    
    // Ensure the link works only on click
    link.addEventListener("click", (e) => {
      // Allow default click behavior
    });
  });
}

// ===== Initialize on Page Load =====
document.addEventListener("DOMContentLoaded", () => {
  initNotificationBar();
  initHiddenLinks();
});
