import { format } from "date-fns";
import {
  BatteryFull,
  Briefcase,
  Headphones,
  ScrollText,
  Share2,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Wave from "react-wavify";
import clsx from "clsx";
import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import IconBox from "@/components/IconBox";
import Image from "next/image";
import Header from "@/components/Header";
import HorizontalMenu from "@/components/HorizontalMenu";

const poppins = Poppins({
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function Home() {
  const [mainMenuXCounter, setMainMenuXCounter] = useState(-260);
  const [mainMenuYCounter, setMainMenuYCounter] = useState(0);
  const [verticalCounter, setVerticalCounter] = useState(0);
  const [menuItem, setMenuItem] = useState(0);
  useEffect(() => {
    if (mainMenuXCounter > 47.5) {
      setMainMenuXCounter(-260);
    } else if (mainMenuXCounter < -260) {
      setMainMenuXCounter(47.5);
    }
  }, [mainMenuXCounter]);

  const onCircleClick = () => {
    setMenuItem(0);
    setMainMenuYCounter(0);
  };

  const onCrossClick = () => {
    setMenuItem(1);
    setMainMenuYCounter(-100);
  };

  const onRightClick = () => {
    setMainMenuXCounter(mainMenuXCounter - 102.5);
  };

  const onLeftClick = () => {
    setMainMenuXCounter(mainMenuXCounter + 102.5);
  };

  return (
    <>
      <div
        className={clsx(
          "min-h-screen flex flex-col items-center justify-between ${poppins.className} max-w-screen overflow-hidden transition-all duration-500 ",
          menuItem === 1 && "bg-emerald-900"
        )}
      >
        <Header />
        <div className="z-10 flex flex-col justify-between items-center gap-10 mt-32">
          <HorizontalMenu
            mainMenuXCounter={mainMenuXCounter}
            mainMenuYCounter={mainMenuYCounter}
          />
          <div>
            <motion.div
              className="flex flex-col items-center justify-center gap-2"
              animate={{ x: verticalCounter, opacity: menuItem }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              initial={{ opacity: 0, x: 500 }}
            >
              <div className="mt-2 flex flex-row items-center justify-between text-stone-400 w-[40vh] hover:bg-stone-800 p-4 rounded-xl">
                <div>Lendtable</div>
                <div className="mx-4 flex-grow border border-t border-stone-700" />
                <div>Since 2021</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center justify-between">
          <div>
            <Button onClick={onCircleClick} variant="ghost">
              <Image src="/img/O.svg" height={50} width={50} alt="X" />
            </Button>
          </div>
          <div className="flex flex-row -mt-3">
            <Button onClick={onLeftClick} className="mr-6" variant="ghost">
              <Image src="/img/Left.svg" height={50} width={50} alt="Right" />
            </Button>
            <Button onClick={onRightClick} variant="ghost">
              <Image src="/img/Right.svg" height={50} width={50} alt="Right" />
            </Button>
          </div>
          <div className="mb-10">
            <Button onClick={onCrossClick} variant="ghost">
              <Image src="/img/X.svg" height={50} width={50} alt="X" />
            </Button>
          </div>
          <div className="mb-4 flex flex-row items-center md:text-sm text-xs">
            ANI © 2020 | Interface inspired by the Sony{" "}
            <Image
              src="/img/PSLogo.svg"
              className="ml-2"
              height={70}
              width={70}
              alt="PlayStation Portable"
            />{" "}
          </div>
        </div>
      </div>
      <Wave
        fill="#292524"
        paused={false}
        style={{ position: "absolute", bottom: 0, height: "50%" }}
        options={{
          amplitude: 40,
          speed: 0.2,
          points: 5,
        }}
      />
      <Wave
        fill="#1C1917"
        paused={false}
        style={{
          position: "absolute",
          bottom: 0,
          height: "48%",
        }}
        options={{
          amplitude: 50,
          speed: 0.15,
          points: 4,
        }}
      />
      <Wave
        fill={`${menuItem === 1 ? "#022c22" : "#0c0a09"} `}
        paused={false}
        style={{
          position: "absolute",
          bottom: 0,
          height: "48%",
          transition: "all 2s ease",
        }}
        options={{
          amplitude: 30,
          speed: 0.25,
          points: 3,
        }}
      />
    </>
  );
}
