function selectCard(cardNumber) {
    // Remove the 'selected' class from all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    // Add the 'selected' class to the clicked card
    const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
    selectedCard.classList.add('selected');
}

function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box"); // Use querySelectorAll to select all boxes

  boxes.forEach(function (box) {
      box.addEventListener("click", function () {
          const hiddenText = box.querySelector(".hidden-text");
          hiddenText.style.display = (hiddenText.style.display === "none" || hiddenText.style.display === "") ? "block" : "none";
      });
  });
});

function copyCode() {
    document.getElementById("codeBlock").innerText;
  }  

  let lastScrollTop = 0;
const hiddenContainer = document.getElementById('hiddenContainer');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    hiddenContainer.style.display = 'none';
  } else {
    // Scrolling up
    hiddenContainer.style.display = 'block';
  }

  lastScrollTop = scrollTop;
});

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', (e) => {
      const project = e.target;
      // Optional: Add more detailed information or animations here
  });

  project.addEventListener('mouseleave', (e) => {
      const project = e.target;
      // Optional: Remove additional information or reset animations here
  });
});
