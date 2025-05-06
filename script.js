function store(key, value) {
    localStorage.setItem(key, value);
  }
  
  function retrieve(key) {
    return localStorage.getItem(key);
  }
  
  function animate(button) {
    button.classList.remove('bounce');
    void button.offsetWidth;
    button.classList.add('bounce');
    store('clicked', 'yes');
  }
  
  window.onload = () => {
    const btn = document.getElementById('animateBtn');
    if (retrieve('clicked') === 'yes') {
      btn.classList.add('bounce');
    }
    btn.addEventListener('click', () => animate(btn));
  };
  