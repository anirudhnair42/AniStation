import { motion } from "framer-motion";
import { FC } from "react";
import IconBox from "./IconBox";
import { Briefcase, Headphones, ScrollText, Share2 } from "lucide-react";

interface HorizontalMenuProps {
  mainMenuXCounter: number;
  mainMenuYCounter: number;
}

const HorizontalMenu: FC<HorizontalMenuProps> = ({
  mainMenuXCounter,
  mainMenuYCounter,
}) => {
  const setOpacity = mainMenuYCounter === 0 ? 1 : 0.1;
  return (
    <motion.div
      className="flex flex-row items-center justify-center  gap-10 mt-24 md:mt-36"
      animate={{
        x: mainMenuXCounter,
        y: mainMenuYCounter,
      }}
    >
      <IconBox
        title="Socials"
        glow={mainMenuXCounter === 47.5}
        opacity={setOpacity}
      >
        <Share2 size={40} />
      </IconBox>
      <IconBox
        title="Blog"
        glow={mainMenuXCounter === 102.5 * -1 + 47.5}
        opacity={setOpacity}
      >
        <ScrollText size={40} />
      </IconBox>
      <IconBox
        title="Music"
        glow={mainMenuXCounter === 102.5 * -2 + 47.5}
        opacity={setOpacity}
      >
        <Headphones size={40} />
      </IconBox>
      <IconBox
        title="Projects"
        glow={mainMenuXCounter === 102.5 * -3 + 47.5}
        opacity={setOpacity}
      >
        <Briefcase size={40} />
      </IconBox>
    </motion.div>
  );
};

export default HorizontalMenu;
