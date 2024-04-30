import { useEffect } from "react";
import { inView, animate } from "motion";

const useInViewAnimation = () => {
  useEffect(() => {
    inView("#animate-left", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
    });

    inView("#animate-right", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
    });

    inView("#animate-bottom", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
    });

    inView("#animate-fadein", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.5, duration: 2, easing: [0.17, 0.55, 0.55, 1] });
    });
  }, []);
};

export default useInViewAnimation;
