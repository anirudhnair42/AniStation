import { FC } from "react";
import { format } from "date-fns";
import { BatteryFull } from "lucide-react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const date = format(new Date(), "EEE MMM d h:mm b");
  return (
    <div className="flex flex-row items-center justify-between p-2 md:p-10 w-full">
      <div className="font-extrabold text-xl md:text-2xl">ANI</div>{" "}
      <div className=" font-medium text-md md:text-xl flex flex-row gap-2 items-center">
        {date} <BatteryFull className="h-8" />
      </div>{" "}
    </div>
  );
};

export default Header;
