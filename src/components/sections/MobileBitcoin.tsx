import type { CSSProperties } from "react";
export default function MobileBitcoin() {
  return (
    <div className="section_coin">
      <img
        src="/assets/a0d1ab00-68b816ef09865af49d1b060d_Frame_2147267474__1_.avif"
        loading="eager"
        sizes="(max-width: 1439px) 100vw, 1440px"
        srcSet="/assets/245b051e-68b816ef09865af49d1b060d_Frame_2147267474__1_-p-500.avif 500w, /assets/a0d1ab00-68b816ef09865af49d1b060d_Frame_2147267474__1_.avif 1440w"
        alt=""
        className="coin_upper-image"
      />
      <img
        src="/assets/f6f6d908-68b817a4ebce266a1b0f6257_Frame_2147267475__1_.avif"
        loading="eager"
        alt=""
        className="coin_lower-image"
      />
      <div className="apsl-wrapper">
        <div className="coin_image_wrapper">
          <div className="card_component">
            <div className="card_wrapper">
              <div className="apsl-div">
                <img
                  src="/assets/3df6275a-68bf46b944722b43413b58be_blue.png"
                  loading="lazy"
                  sizes="(max-width: 1296px) 100vw, 1296px"
                  srcSet="/assets/7348c597-68bf46b944722b43413b58be_blue-p-500.png 500w, /assets/e824d75f-68bf46b944722b43413b58be_blue-p-800.png 800w, /assets/a84305f4-68bf46b944722b43413b58be_blue-p-1080.png 1080w, /assets/3df6275a-68bf46b944722b43413b58be_blue.png 1296w"
                  alt=""
                  className="card_side is-front"
                />
                <div className="text-holder">
                  <div
                    className="btc-lotie"
                    data-w-id="fa9aef50-1bcf-88f6-6a71-0eafbe456201"
                    data-animation-type="lottie"
                    data-src="/assets/552cd9b8-68bf336ce3d12e4e7c59d896_sui_btc_new.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="0"
                    data-duration="4.0301089673839865"
                    data-loading="eager"
                  ></div>
                </div>
              </div>
              <div
                data-w-id="0e8b1bef-aaa6-bc07-765a-4d89c7e79d53"
                style={{ opacity: "0" } as CSSProperties}
                className="apsl-div-2"
              >
                <img
                  src="/assets/426ad7a5-68bf480de233082c6b392fe9_golden.png"
                  loading="lazy"
                  sizes="(max-width: 1296px) 100vw, 1296px"
                  srcSet="/assets/6d9f24f1-68bf480de233082c6b392fe9_golden-p-500.png 500w, /assets/dd2d6f6e-68bf480de233082c6b392fe9_golden-p-800.png 800w, /assets/abe1b3c9-68bf480de233082c6b392fe9_golden-p-1080.png 1080w, /assets/426ad7a5-68bf480de233082c6b392fe9_golden.png 1296w"
                  alt=""
                  className="card-2"
                />
                <div className="text-holder"></div>
                <div
                  className="lottie-animation"
                  data-w-id="fe8c2344-e8f4-0972-695f-3b103f1738d2"
                  data-animation-type="lottie"
                  data-src="/assets/a7a3e0f4-68bc52ee0df74d5bdffc0bad_Bitcoin_trade.lottie"
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
            </div>
          </div>
        </div>
        <div className="upper-text-holder">
          <div
            data-w-id="31562274-6c0e-6e41-7e1e-2d35e20d5f43"
            style={{ opacity: "0" } as CSSProperties}
            className="card_sub"
          >
            {"A Bitcoin Experience,"}
          </div>
          <h2
            data-w-id="5b5acb77-7f71-af0b-0e77-f464d8a2f4b1"
            style={{ opacity: "0" } as CSSProperties}
            className="card_h2"
          >
            {"Reimagined"}
          </h2>
        </div>
        <div className="lower-text-holder">
          <div id="coin_desc" className="coin_desc">
            {
              "SuiBall introduces native Bitcoin support plus full BTC-Fi integrations, making it the only hardware wallet that brings Bitcoin to Sui with purpose-built apps, speed, and next-gen security."
            }
          </div>
        </div>
      </div>
    </div>
  );
}
