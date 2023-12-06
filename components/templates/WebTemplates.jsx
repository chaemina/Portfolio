import Title from "../atom/Ttitle";

const WebTemplates = ({ isMobileView }) => {
  const mobileStyle = isMobileView ? "mt-8 mb-4" : "";
  const githubLogo = isMobileView
    ? { width: "50", height: "50" }
    : { width: "100", height: "100" };
  const tistoryLogo = isMobileView
    ? { width: "40", height: "40", transform: "translate(-10, 4)" }
    : { width: "80", height: "80", transform: "translate(0, 10)" };

  return (
    <>
      <main className="flex flex-col justify-center">
        <Title className="text-purple-900 extra-bold">PortFolio</Title>
        <Title className="text-purple-900">Web Developer</Title>
        <p className={`mt-60 text-lg bold ${mobileStyle}`}>Follow me:</p>
        <div className=" flex space-x-4 mb-8">
          <a href="https://github.com/chaemina" className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={githubLogo.width}
              height={githubLogo.height}
              viewBox="0 0 30 30"
            >
              <title>github</title>
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a href="https://cherrycode.tistory.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={tistoryLogo.width}
              height={tistoryLogo.height}
              viewBox="0 0 459 459"
              transform={tistoryLogo.transform}
            >
              <title>tistory</title>
              <g>
                <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
              </g>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
};

export default WebTemplates;