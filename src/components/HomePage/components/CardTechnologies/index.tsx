import HTMLReactParser from "html-react-parser";
import { StyledCardTechnologies } from "./components/StyledCardTechnologies";
import { Expand } from "lucide-react";
import TechnologiesList from "../../../../json/TechnologiesList.json";
import Link from "next/link";

export default function CardTechnologies() {
  const allTech = ["React", "TypeScript", "HTML5", "CSS3", "NextJS", "Node"];

  return (
    <StyledCardTechnologies>
      <Link href={"tecnologias"}>
        <div className="container_cardTechnologies">
          <span className="expand_icon align_center">
            <Expand color="white"></Expand>
          </span>
          <h2>Tecnologias</h2>
          <div className="frame_tech flex_col">
            {allTech.map((name, index) => {
              let tech =
                TechnologiesList[name as keyof typeof TechnologiesList];
              return (
                <div className="item_tech flex_row" key={index}>
                  {HTMLReactParser(tech.svg)}
                  <p className="">{tech.name}</p>
                </div>
              );
            })}
            <span className="dots">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1080.000000pt"
                height="251.000000pt"
                viewBox="0 0 1080.000000 251.000000"
                preserveAspectRatio="xMidYMid meet"
                style={{ maxWidth: "70px", maxHeight: "30px" }}
              >
                <g
                  transform="translate(0.000000,251.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M962 2420 c-116 -26 -202 -58 -319 -120 -117 -63 -189 -118 -288
-221 -450 -470 -432 -1210 41 -1659 172 -164 386 -270 627 -311 106 -18 352
-7 456 21 436 116 744 422 863 860 20 75 23 108 23 280 0 214 -11 276 -76 440
-136 341 -444 608 -809 701 -126 32 -389 36 -518 9z"
                  />
                  <path
                    d="M5162 2420 c-117 -26 -202 -58 -321 -121 -116 -62 -163 -97 -269
                  -202 -222 -218 -342 -508 -342 -827 0 -202 38 -357 131 -541 59 -115 106 -180
                  202 -278 161 -164 328 -260 558 -321 117 -31 358 -39 481 -16 240 45 432 143
                  602 306 114 109 163 173 230 301 98 187 136 342 136 549 0 244 -61 448 -195
                  650 -66 99 -190 230 -285 300 -87 65 -283 157 -395 186 -140 37 -394 44 -533
                  14z"
                  />
                  <path
                    d="M9365 2420 c-487 -105 -851 -488 -926 -974 -19 -119 -6 -363 25 -474
                  59 -214 156 -381 308 -532 156 -155 327 -251 549 -310 104 -28 350 -39 456
                  -21 241 41 455 147 627 311 531 504 477 1358 -114 1800 -86 64 -282 157 -395
                  186 -139 37 -394 44 -530 14z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </StyledCardTechnologies>
  );
}
