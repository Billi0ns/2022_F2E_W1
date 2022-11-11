export const useCustomObserver = () => {
  const observerEl = ref<HTMLElement>();

  const createObserver = (enterCallback: Function) => {
    if (!observerEl.value) return;

    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          enterCallback();
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      rootMargin: '-50% 0px -50% 0px', // set the root intersecting area as a tiny line in the vertical center
      threshold: 0, // 0 = as soon as 1px intersects
    });

    observer.observe(observerEl.value);
  };

  return {
    observerEl,
    createObserver,
  };
};
