const scrolling = () => {
  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if(target.tagName === 'A') {
      event.preventDefault();
      if(target.href !== location.origin + '/#') {
        const blockID = target.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
};

export default scrolling;
