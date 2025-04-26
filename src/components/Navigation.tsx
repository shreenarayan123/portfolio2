"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [selectedItem, setSelectedItem] = useState("About");
  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <nav className="fixed top-0 z-50 flex items-center border-2 px-1 justify-around rounded-full bg-white/30 h-[44px] backdrop-blur-md  mt-4  shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 ">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-3 py-1 rounded-full transition ease-linear delay-150 duration-300  ${
                  item === selectedItem ? "text-white bg-black" : "text-black"
                }`}
                onClick={(e) => {
                  handleClick(item);
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
