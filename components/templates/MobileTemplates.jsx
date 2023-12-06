import FirstPart from "../organisms/FirstPart";
import SecondPart from "../organisms/SecondPart";
import ThirdPart from "../organisms/ThirdPart";
import ExperiencePart from "../organisms/ExperiencePart";
import ActivitiesPart from "../organisms/ActivitiesPart";

const MobileTemplates = ({ isMobileView }) => {
  return (
    <>
      <main className=" h-[1000px] flex flex-col items-center space-y-20">
        <FirstPart isMobileView={isMobileView} />
        <SecondPart isMobileView={isMobileView} />
        <ActivitiesPart isMobileView={isMobileView} />
        <ExperiencePart isMobileView={isMobileView} />
        <ThirdPart />
      </main>
    </>
  );
};

export default MobileTemplates;
