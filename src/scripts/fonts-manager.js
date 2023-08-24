import FontFaceObserver from './vendor/fontfaceobserver';


export const fontObserver = () => {
  document.documentElement.className += " wf-inactive";

  // Optimization for Repeat Views
  if (sessionStorage.foutFontsLoaded) {
    document.documentElement.classList.remove("wf-inactive");
    document.documentElement.classList.add("wf-active");
    return;
  }

  const bodyFont = new FontFaceObserver('xanti-typewriter-variable', {
    weight: 400
  });

  Promise.all([bodyFont.load()]).then(function () {
    document.documentElement.classList.remove("wf-inactive");
    document.documentElement.classList.add("wf-active");

    // Optimization for Repeat Views
    sessionStorage.foutFontsLoaded = true;
  });
};
