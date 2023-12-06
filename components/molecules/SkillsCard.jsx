const SkillsCard = () => {
  const badgesF = [
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white",
    "https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
    "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white",
    "https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    "https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=white",
    "https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white",
    "https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white",
    "https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white",
    "https://img.shields.io/badge/👻 Jotai-000000?style=flat-square&logoColor=white",
    "https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white",
    "https://img.shields.io/badge/ESlint-4B32C3?style=flat-square&logo=eslint&logoColor=white",
  ];

  const badgesC = [
    "https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white",
    "https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white",
    "https://img.shields.io/badge/ Slack-4A154B?style=flat-square&slack=notion&logoColor=white",
    "https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
    "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
  ];
  return (
    <>
      <main className="flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-wrap">
          {badgesF.map((badge, index) => (
            <img key={index} src={badge} className="w-30 h-12 m-1" />
          ))}
        </div>
        <div className="flex flex-wrap">
          {badgesC.map((badge, index) => (
            <img key={index} src={badge} className="w-25 h-10 m-1" />
          ))}
        </div>
      </main>
    </>
  );
};
export default SkillsCard;
