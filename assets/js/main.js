/*für den scrollen effect das der titel gross und dann wieder kleiner wird*/
/*Im JS gamcht das es auf allen Browsern funktionniert*/

window.addEventListener('scroll', () => {
  const concept = document.querySelector('.section-title');
  const title = document.querySelector('.title');

  const rect = concept.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Fortschritt berechnen (0 = oben, 1 = unten)
  let progress = 1 - (rect.top / windowHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  // Scale: klein → groß
  let scale = 0.6 + progress * 0.6; // von 0.6 bis 1.2

  title.style.transform = `scale(${scale})`;
});


