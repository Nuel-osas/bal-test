import type { CSSProperties } from "react";
export default function Bitcoin() {
  return (
    <div id="bitcoin" className="btc-sec">
      <div className="btc-sec-shadow"></div>
      <div className="btc-sec-div-1">
        <div className="btc-sec-div-cont">
          <div className="flex-vertical gap-32">
            <h2 data-split="heading" className="h48">
              {"A Bitcoin Experience,"}
            </h2>
            <h2 data-split="heading" className="h124">
              {"Reimagined"}
            </h2>
          </div>
          <div
            data-w-id="0737a477-8502-cbfc-1fdc-7b818210cbd2"
            style={{ opacity: "0" } as CSSProperties}
            className="btc-sec-div-cont-an-w"
          >
            <img
              src="/assets/3df6275a-68bf46b944722b43413b58be_blue.png"
              loading="lazy"
              sizes="(max-width: 1296px) 100vw, 1296px"
              srcSet="/assets/7348c597-68bf46b944722b43413b58be_blue-p-500.png 500w, /assets/e824d75f-68bf46b944722b43413b58be_blue-p-800.png 800w, /assets/a84305f4-68bf46b944722b43413b58be_blue-p-1080.png 1080w, /assets/3df6275a-68bf46b944722b43413b58be_blue.png 1296w"
              alt=""
              className="btc-sec-div-cont-an-bg"
            />
            <div
              className="btc-sec-div-cont-an-lott"
              data-w-id="d655d729-4be5-7112-078a-5b23180395f3"
              data-animation-type="lottie"
              data-src="/assets/552cd9b8-68bf336ce3d12e4e7c59d896_sui_btc_new.json"
              data-loop="1"
              data-direction="1"
              data-autoplay="1"
              data-is-ix2-target="0"
              data-renderer="svg"
              data-duration="0"
              data-loading="eager"
            ></div>
          </div>
        </div>
      </div>
      <div className="btc-sec-div-2">
        <div className="btc-sec-div-cont-2">
          <div
            data-w-id="1daeae12-a466-e23f-2ef1-c2aa0e7c2e44"
            style={{ opacity: "0" } as CSSProperties}
            className="btc-sec-div-cont-an-w"
          >
            <img
              src="/assets/426ad7a5-68bf480de233082c6b392fe9_golden.png"
              loading="lazy"
              sizes="(max-width: 1296px) 100vw, 1296px"
              srcSet="/assets/6d9f24f1-68bf480de233082c6b392fe9_golden-p-500.png 500w, /assets/dd2d6f6e-68bf480de233082c6b392fe9_golden-p-800.png 800w, /assets/abe1b3c9-68bf480de233082c6b392fe9_golden-p-1080.png 1080w, /assets/426ad7a5-68bf480de233082c6b392fe9_golden.png 1296w"
              alt=""
              className="btc-sec-div-cont-an-bg"
            />
            <div
              className="btc-sec-div-cont-an-lott"
              data-w-id="1daeae12-a466-e23f-2ef1-c2aa0e7c2e46"
              data-animation-type="lottie"
              data-src="/assets/c190d49c-68c551116a552c0fe85299eb_bitcoin_send.json"
              data-loop="1"
              data-direction="1"
              data-autoplay="1"
              data-is-ix2-target="0"
              data-renderer="svg"
              data-default-duration="0"
              data-duration="0"
              data-loading="eager"
            ></div>
          </div>
          <div data-split="heading" className="tb-48">
            {
              "Suiball introduces native Bitcoin support with full BTC-Fi integrations, making it the only hardware wallet that brings Bitcoin to Sui with purpose-built DeFi apps, speed, and next-gen security."
            }
          </div>
        </div>
      </div>
    </div>
  );
}
