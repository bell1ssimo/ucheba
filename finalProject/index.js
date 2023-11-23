$(document).ready(function() {
  var visibleCount = 3; 
  showCards(visibleCount);
  $(".load-more-btn").on("click", function() {
    visibleCount += 3;
    showAdditionalCards(visibleCount);
    if ($(".col-lg-4:hidden").length <= 3) {
      $(this).hide();
    }
  });

  function showCards(count) {
    var $colMd4 = $(".col-lg-4");
    $colMd4.hide();

    $colMd4.slice(0, count).each(function(index, card) {
      $(card).delay(index * 200).fadeIn(); 
    });
  }

  function showAdditionalCards(count) {
    var $colMd4 = $(".col-lg-4");

    $colMd4.slice(visibleCount - 3, count).each(function(index, card) {
      $(card).delay(index * 200).fadeIn();
    });
  }
});









//______________________________jquery animation_______________________________
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
  

///

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
  document.getElementById('sets-container').appendChild(newRow);
  newRow.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}
const loadMoreButton = document.querySelector('.load-more-btn');
loadMoreButton.addEventListener('click', handleLoadMoreClick);

///////////// 
let cart = [];
    let total = 0;

    function addToCart(itemName, itemPrice) {
        cart.push({ name: itemName, price: itemPrice });
        total += itemPrice;
        updateCartView();
    }

    function updateCartView() {
        const cartList = document.getElementById("cart-list");
        const cartTotal = document.getElementById("cart-total");
        cartList.innerHTML = "";
        
        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function clearCart() {
        cart = [];
        total = 0;
        updateCartView();
    }

    function openPopup() {
      document.getElementById('popup-container').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
      document.getElementById('popup-container').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
  }