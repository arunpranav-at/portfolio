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

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: delay,
    },
  },
});