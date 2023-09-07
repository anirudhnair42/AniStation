import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";

interface IconBoxProps {
  children: React.ReactNode;
  title: string;
  opacity?: number;
  glow?: boolean;
}

const IconBox: FC<IconBoxProps> = ({ children, title, glow, opacity }) => {
  const setOpacity = glow ? 1 : opacity;
  return (
    <motion.div
      className={clsx(
        "flex flex-col items-center justify-center gap-4 p-2",
        glow && "drop-shadow-glow"
      )}
      initial={{ opacity: 0 }}
      animate={{ x: 100, opacity: setOpacity }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div>{children}</div> <div className="flex font-bold">{title}</div>
    </motion.div>
  );
};

export default IconBox;
