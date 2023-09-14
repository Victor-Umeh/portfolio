import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.08, { startDelay: 0.5, ease: "easeOut" });

export default function useNavMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        opacity: isOpen ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate("li", isOpen ? { opacity: 1 } : { opacity: 0 }, {
      // duration: 0.4,
      delay: isOpen ? staggerMenuItems : 0,
    });
  }, [isOpen]);

  return scope;
}
