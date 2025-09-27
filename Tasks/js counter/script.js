let num = 15;
    const numberEl = document.getElementById('number');

    const countdown = setInterval(() => {
      numberEl.classList.add('flip'); // add flip animation
      setTimeout(() => {
        numberEl.classList.remove('flip'); // remove to reset for next
        numberEl.textContent = num;
      }, 400);

      num--;
      if (num < 1) {
        clearInterval(countdown);
      }
    }, 1000);