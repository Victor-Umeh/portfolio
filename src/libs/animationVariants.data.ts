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
