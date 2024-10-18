import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-2 shadow-md">
      <Image
        src="/logo.svg"
        alt="AI Course Generator Logo" // Meaningful alt text for accessibility
        width={200}
        height={100}
      />
      <Button>Get started</Button>
    </div>
  );
};

export default Header;
