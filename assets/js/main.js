/*für den scrollen effect das der titel gross und dann wieder kleiner wird*/
/*Im JS gamcht das es auf allen Browsern funktionniert*/

window.addEventListener('scroll', () => {
  const titles = document.querySelectorAll('.section-title');

  titles.forEach(title => {
    const section = title.closest('.section-block');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = 1 - (rect.top / windowHeight);
    progress = Math.min(Math.max(progress, 0), 1);

    let scale;

    // ABOUT ME & CONTACT: kleiner Effekt
    if (title.classList.contains('about-title') || title.classList.contains('contact-title')) {
      scale = 0.6 + progress * 0.2; // Start 0.6 → Ende 0.8
    } else {
      scale = 0.6 + progress * 0.6; // Start 0.6 → Ende 1.2
    }

    title.style.transform = `scale(${scale})`;
  });
});





