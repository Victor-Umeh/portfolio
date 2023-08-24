import { motion } from "framer-motion";

type TProps = {
  image: string | undefined;
  alt: string | undefined;
  currState: string | undefined;
};

const PreviewImage = ({ image, alt, currState }: TProps) => {
  const displayImage = currState ? "block" : "none";
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      style={{
        width: "700px",
        height: "300px",
        overflow: "hidden",
        marginTop: "auto",
        marginBottom: "3rem",
        display: displayImage,
      }}
    >
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={image}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default PreviewImage;
