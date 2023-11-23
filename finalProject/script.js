$(document).ready(function() {
    $(".category-btn[data-category='sushi']").addClass("active");
    showCards("sushi");
    $(".category-btn").on("click", function() {
      $(".category-btn").removeClass("active");
      $(this).addClass("active");

      var category = $(this).data("category");
      showCards(category);
    });

    function showCards(category) {
      $(".col-lg-4").hide();
      $("." + category).slice(0, 6).show();
    }
  });


//_______________________________jquery animation_______________________________________
// Back to Top Button
var backToTopBtn = $('#backToTopBtn');

var scrollSound = document.getElementById('scrollSound');
$(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
    backToTopBtn.fadeIn();
  } else {
    backToTopBtn.fadeOut();
  }
});

backToTopBtn.click(function() {
  scrollSound.play();
  $('html, body').animate({
    scrollTop: 0
  }, 1000); 
});

//______________________________js animation______________________________________
document.addEventListener("DOMContentLoaded", function() {
    var sushi = document.getElementById('sushiImage');
    var translateY = 0;
    function floatSushi() {
      translateY = translateY === 0 ? 20 : 0;
      sushi.style.transform = 'translate(-50%, calc(-50% + ' + translateY + 'px))';
    }

    setInterval(floatSushi, 2000); 
  });


  
function showCards(category) {
  var cards = document.querySelectorAll("." + category);
  var totalCards = Math.min(cards.length, 6); 
  for (var i = 0; i < totalCards; i++) {
    setTimeout(function (index) {
      cards[index].classList.add("active");
    }, i * 200, i); 
  }
}


showCards("sushi");
showCards("rolls");
showCards("nigiri");

document.getElementById("sushiBtn").addEventListener("click", function () {
  resetCardAnimations();
  showCards("sushi");
});

document.getElementById("rollsBtn").addEventListener("click", function () {
  resetCardAnimations();
  showCards("rolls");
});

document.getElementById("nigiriBtn").addEventListener("click", function () {
  resetCardAnimations();
  showCards("nigiri");
});

function resetCardAnimations() {
  var allCards = document.querySelectorAll(".col-lg-4");
  allCards.forEach(function (card) {
    card.classList.remove("active");
  });
}



//......
 // Function to handle the scaling of cards
 function handleCardScaling(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      card.style.transform = 'scale(1.1)'; 
    } else {
      const card = entry.target;
      card.style.transform = 'scale(1)';
    }
  });
}

const observer = new IntersectionObserver(handleCardScaling, { threshold: 0.6 });
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  observer.observe(card);
});

function handleLoadMoreClick() {
  const newRow = document.createElement('div');
  newRow.classList.add('row');

  for (let i = 0; i < 3; i++) {
    const newCard = document.createElement('div');
    newCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'card');
    newCard.style.width = '18rem';
    newCard.innerHTML = `
      <!-- Your new card content goes here -->
    `;
    newRow.appendChild(newCard);
  }

  document.getElementById('sets-container').appendChild(newRow);

  newRow.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}
const loadMoreButton = document.querySelector('.load-more-btn');
loadMoreButton.addEventListener('click', handleLoadMoreClick);


