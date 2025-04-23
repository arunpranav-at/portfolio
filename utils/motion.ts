export const slideInFromTop = (delay: number = 0) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

export const slideInFromLeft = (delay: number = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

export const slideInFromRight = (delay: number = 0) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});