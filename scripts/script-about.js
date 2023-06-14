const accordionElements = document.getElementsByClassName('accordion-label');

for (let i = 0; i < accordionElements.length; i++) {
  accordionElements[i].addEventListener('click', () => {
    // if clicked element is already open, it will be closed!
    if (accordionElements[i].classList.contains('is-open')) {
      accordionElements[i].classList.remove('is-open');
      return;
    }
    // if clicked element is closed, it will be opened and all the others closed!
    const accordionElementsOpen = document.querySelectorAll('.is-open');
    for (let j = 0; j < accordionElementsOpen.length; j++) {
      accordionElementsOpen[j].classList.remove('is-open');
    }
    accordionElements[i].classList.add('is-open');
  });
}
