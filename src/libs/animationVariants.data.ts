export const HeroTextsVariants = (value: number = 1.3) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: value,
        duration: 0.3,
        type: "tween",
      },
    },
    while: {
      scaleX: 1.05,
      transition: {
        duration: 0.2,
        // type: "tween",
      },
    },
  };
};

export const nameTagVariants = {
  initial: {
    opacity: 0,
    x: 500,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.7,
      duration: 1,
      type: "tween",
    },
  },
};
export const HeroCardVariants = {
  initial: { opacity: 0, y: -500 },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 150,
    },
  },
};

export const toolHeaderVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.6,
    },
  },
};
export const toolCardVariants = {
  initial: { opacity: 0, x: -70 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export const navLinksVariants = {
  initial: { opacity: 0, y: -50 },
  exit: { opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
    },
  },
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const formVariants = {
  hidden: { left: "-100vw" },
  visible: {
    left: "50%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 19,
    },
  },
};

export const sliderAnimationVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { delay: 1, duration: 1.8 } },
};

export const aboutPageTextAnimationVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const resumeAnimationVariants = {
  initial: { opacity: 0, y: -20 },
  animate: (custom: number = 0.3) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * custom,
      type: "tween",
    },
  }),
};

export const toolDetailAnimationVariants = {
  initial: { opacity: 0, y: -80 },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.4,
      duration: 0.6,
    },
  },
};

export const toolDetailTextAnimationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.6,
      duration: 0.8,
    },
  },
};
