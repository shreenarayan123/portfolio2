"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ],
  backend: ["Node.js", "Express", "MongoDb", "PostgreSQL"],
  tools: ["Git", "Docker", "Prisma ORM"],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [skillPercentages, setSkillPercentages] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    // Generate random percentages once on mount
    const percentages: Record<string, number> = {};
    Object.values(skills)
      .flat()
      .forEach((skill) => {
        percentages[skill] = Math.floor(Math.random() * 30) + 70;
      });
    setSkillPercentages(percentages);
  }, []);

  return (
    <div id="skills" ref={ref} className="py-20 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Skills</h2>

    
    <div className="flex flex-nowrap flex-col gap-8 justify-center items-center ">
      <div className="flex-wrap flex gap-8 justify-center items-center">
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                ></path>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Javascript
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
</svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Typescript
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
</svg>
            <p className="font-grotesk text-black text-sm md:text-base">
             Node.js
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<linearGradient id="tIPmjNUBt_a5oESFbxjTla_YKKmRFS8Utmm_gr1" x1="22.322" x2="24.979" y1="6.179" y2="39.339" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c4a2"></stop><stop offset=".979" stopColor="#16a394"></stop></linearGradient><path fill="url(#tIPmjNUBt_a5oESFbxjTla_YKKmRFS8Utmm_gr1)" d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"></path>
</svg>
               
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Prisma ORM
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-wrap flex gap-6 justify-center items-center">
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              React
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M24,4c-11.028,0 -20,8.972 -20,20c0,11.028 8.972,20 20,20c11.028,0 20,-8.972 20,-20c0,-11.028 -8.972,-20 -20,-20zM24,7c9.374,0 17,7.626 17,17c0,5.852 -2.97233,11.02008 -7.48633,14.08008l-13.77148,-20.41992c-0.367,-0.547 -1.05464,-0.7857 -1.68164,-0.5957c-0.63,0.194 -1.06055,0.77655 -1.06055,1.43555v13c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5v-8.09375l10.87695,16.12695c-2.106,0.935 -4.42895,1.4668 -6.87695,1.4668c-9.374,0 -17,-7.626 -17,-17c0,-9.374 7.626,-17 17,-17zM29.5,15c-0.828,0 -1.5,0.672 -1.5,1.5v8.48633l3,4.30273v-12.78906c0,-0.828 -0.672,-1.5 -1.5,-1.5z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              NextJs
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  // style="mix-blend-mode:normal"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M23.697,37.56h1.18c0.84,0 1.631,-0.392 2.139,-1.061l7.485,-9.847l7.485,9.847c0.508,0.668 1.299,1.061 2.139,1.061h1.18l-9.549,-12.56l9.121,-12h-1.18c-0.84,0 -1.631,0.392 -2.139,1.061l-7.058,9.286l-7.059,-9.287c-0.508,-0.668 -1.299,-1.06 -2.139,-1.06h-1.18l9.121,12z"></path>
                    <path d="M24,26v-3c0,-6.675 -5.945,-11.961 -12.829,-10.852c-5.359,0.863 -9.171,5.709 -9.171,11.136v0.716v2v0.142c0,6.553 4.777,11.786 10.868,11.858c5.092,0.06 9.389,-3.344 10.707,-7.999h-1.028c-0.62,0 -1.182,0.355 -1.451,0.913c-1.739,3.595 -5.789,5.862 -10.228,4.842c-4.092,-0.941 -6.868,-4.775 -6.868,-8.973v-0.783zM4,23.71c0,-4.708 2.804,-8.557 6.924,-9.478c5.874,-1.312 11.076,3.12 11.076,8.768v1h-18z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Express
            </p>
          </div>
        </div>
      </div>
      <div className="flex-wrap flex gap-6 justify-center items-center">
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#5d4037"
                  d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                ></path>
                <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                <path
                  fill="#4caf50"
                  d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                ></path>
                <path
                  fill="#81c784"
                  d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                ></path>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              MongoDB
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
                ></path>
                <path
                  fill="#0277bd"
                  d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
                ></path>
                <path
                  fill="#0277bd"
                  d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
                ></path>
                <path
                  fill="#0277bd"
                  d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
                ></path>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Postgres
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F4511E"
                  d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                ></path>
              </svg>
            </div>
            <p className="font-grotesk text-black text-sm md:text-base">
              Git
            </p>
          </div>
        </div>
        
      </div>
     
      <div className="flex-wrap flex gap-6 justify-center items-center">
        <div className="relative cursor-pointer">
          <div className="flex relative  justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px]">
            <div>&amp;</div>
            <p className="font-grotesk text-black text-sm md:text-base">
              More
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    // <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Skills</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {Object.entries(skills).map(([category, skillList]) => (
    //         <div key={category} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    //           <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white capitalize">{category}</h3>
    //           {skillList.map((skill, index) => (
    //             <div key={skill} className="mb-4">
    //               <div className="flex justify-between mb-1">
    //                 <span className="text-gray-700 dark:text-gray-300">{skill}</span>
    //                 <span className="text-gray-700 dark:text-gray-300">
    //                   {skillPercentages[skill] ? `${skillPercentages[skill]}%` : ''}
    //                 </span>
    //               </div>
    //               <motion.div
    //                 className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full"
    //                 initial={{ width: 0 }}
    //                 animate={isInView ? { width: '100%' } : { width: 0 }}
    //                 transition={{ duration: 1, delay: index * 0.1 }}
    //               >
    //                 <motion.div
    //                   className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
    //                   initial={{ width: 0 }}
    //                   animate={isInView ? { width: skillPercentages[skill] ? `${skillPercentages[skill]}%` : '0%' } : { width: 0 }}
    //                   transition={{ duration: 1, delay: index * 0.1 }}
    //                 ></motion.div>
    //               </motion.div>
    //             </div>
    //           ))}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
