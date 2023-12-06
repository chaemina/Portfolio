import Title from "../atom/Ttitle";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";
import SkillsCard from "../molecules/SkillsCard";
import ProfileImage from "../../public/asset/image/ProfileImage.png";
import Image from "next/image";

const ThirdPart = () => {
  const ref = useRef(null);
  useIntersectionObserver(ref, {
    onEnter: () => ref.current.classList.add("animate-fade-up"),
  });
  return (
    <>
      <div ref={ref} id="intro" className="w-full space-y-10 opacity-0">
        <Title className="bold">Intro</Title>
        <div className="flex flex-wrap">
          <p className="text-lg w-[45%]">
            전남대학교 소프트웨어 공학과를 재학 중인 21살 프론트앤드
            개발자입니다. 주로 Javascript 기반 React 라이브러리를 사용하며,
            누구든 쉽게 접근할 수 있는 UI를
          </p>
          <Image
            src={ProfileImage}
            alt="profile Image"
            className="max-w-[50%] h-[20rem]"
          ></Image>
        </div>
        <Title className="text-3xl">Skills</Title>
        <SkillsCard />
      </div>
    </>
  );
};
export default ThirdPart;
