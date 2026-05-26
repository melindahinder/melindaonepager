/*für den scrollen effect das der titel gross und dann wieder kleiner wird*/
/*Im JS gamcht das es auf allen Browsern funktionniert*/

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section-block');

  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 1 - (rect.top / windowHeight);
    progress = Math.min(Math.max(progress, 0), 1);

    let scale = 0.6 + progress * 0.6; // klein → groß
    title.style.transform = `scale(${scale})`;
  });
});



