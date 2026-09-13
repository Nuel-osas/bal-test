/* The source site's custom animations, adapted to mount and dispose with React. */
window.mountSuiball = function mountSuiball() {
  const { gsap, SplitText, ScrollTrigger, Lenis } = window;
  gsap.registerPlugin(SplitText, ScrollTrigger);
  const lenis = new Lenis({ lerp: 0.05, wheelMultiplier: 1 });
  let frame;
  function animate(time) { lenis.raf(time); frame = requestAnimationFrame(animate); }
  frame = requestAnimationFrame(animate);

  const splits = [];
  const config = {
    lines: { duration: 0.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 }
  };
  const context = gsap.context(() => {
    document.querySelectorAll('[data-split="heading"]').forEach(heading => {
      const type = heading.dataset.splitReveal || 'lines';
      const types = type === 'lines' ? 'lines' : type === 'words' ? 'lines,words' : 'lines,words,chars';
      splits.push(SplitText.create(heading, {
        type: types, mask: 'lines', autoSplit: true,
        linesClass: 'line', wordsClass: 'word', charsClass: 'letter',
        onSplit(instance) {
          return gsap.from(instance[type], {
            yPercent: 110, ...config[type], ease: 'expo.out',
            scrollTrigger: { trigger: heading, start: 'clamp(top 80%)', once: true }
          });
        }
      }));
    });
  });
  ScrollTrigger.refresh();
  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
    context.revert();
    splits.forEach(split => split.revert());
  };
};
