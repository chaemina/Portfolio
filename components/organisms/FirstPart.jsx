import Link from "next/link";
import Card from "../atom/Card";
import Title from "../atom/Ttitle";

const FirstPart = () => {
  return (
    <>
      <a href="/">
        <Title className="text-base text-purple-900">
          <span className="material-symbols-outlined relative -bottom-1">
            hr_resting
          </span>
          chaemina
        </Title>
      </a>
      <div className="w-full ">
        <Card className="bg-gradient-to-r from-purple-300 h-[350px] flex flex-col justify-center items-center">
          <p className="leading-relaxed">Hola, soy Mina! 🤙</p>
          <Title className="text-black w-[85%] leading-relaxed">
            사용자와 함께 성장하는 프론트 앤드 개발자 입니다 🥕
          </Title>
          <a
            href="#intro"
            className="hover:text-purple-400 transition-4s leading-relaxed"
          >
            see my Intro
            <span className="material-symbols-outlined relative left-2 -bottom-2">
              arrow_right_alt
            </span>
          </a>
        </Card>
      </div>
    </>
  );
};

export default FirstPart;
