import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type TProps = {
  image: string | undefined;
  alt: string | undefined;
  currState: string | undefined;
  setCurrentImage: any;
};

const hoveredImageVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 0.7,
    x: 0,
    transition: { duration: 1 },
  },
  exit: { display: "none" },
};
const PreviewImage = ({ image, alt, currState, setCurrentImage }: TProps) => {
  useEffect(() => {
    setCurrentImage(null);
  }, []);

  return (
    <AnimatePresence>
      {currState && (
        <motion.div
          variants={hoveredImageVariants}
          initial="hidden"
          exit="exit"
          animate="visible"
          style={{
            width: "700px",
            height: "250px",
            overflow: "hidden",
            marginTop: "auto",
            marginBottom: "3rem",
          }}
          className="nav__preview-image"
        >
          <img
            src={image}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewImage;
