function trapFocus(element) {
    
  }
  
  ['#CastleLink', '#OminousPortraitLink'].forEach(selector => {
    document.querySelector(selector).addEventListener('click', function(event) {
      event.preventDefault();
      let popup = document.querySelector('#ImagePopup');
      popup.style.display = 'flex';
      document.querySelector('#PopupImage').src = this.href;
      document.querySelector('#wooshSound').play();
      trapFocus(popup);
    });
  });
  
  document.querySelector('#ImagePopup').addEventListener('click', function() {
    this.style.display = 'none';
  });