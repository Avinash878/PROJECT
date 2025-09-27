// Popup Functionality
    const galleryImgs = document.querySelectorAll('.gallery-container img');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');

    galleryImgs.forEach(img => {
      img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
      });
    });

    function closePopup() {
      popup.style.display = 'none';
    }