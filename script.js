document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart. Payment to be made later.');
  });
});