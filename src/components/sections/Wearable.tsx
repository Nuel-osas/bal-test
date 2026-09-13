import type { CSSProperties } from "react";
export default function Wearable() {
  return (
    <div className="section_eighth">
      <div className="sec-eight-cont">
        <div className="padding-global is-relative">
          <div className="container-large">
            <div className="eighth_content-wrapper">
              <div className="eighth_content">
                <h2 data-split="heading" className="align-center mob-bigger">
                  {"The First Wearable"}
                  <br />
                  {"Hardware Wallet"}
                </h2>
                <div className="eighth-text_wrapper">
                  <div
                    data-split="heading"
                    className="text-size-small align-center"
                  >
                    {
                      "Designed to move with you with an add-on wristband accessory. Sign transactions, make payments, and stay connected right from your wrist. Pair with your smartphone over Bluetooth or Tap and Pay directly over NFC. Sleek. Secure. Effortless. The future, wrapped around your wrist."
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eighth_image-apsolute-w">
          <img
            className="eighth_image-apsolute"
            src="/assets/787c98c0-68b5c12941eb095052bc191a_ChatGPT-Image-8-ago-2025_-09_54_36_1.avif"
            alt=""
            style={{ opacity: "0" } as CSSProperties}
            sizes="100vw"
            data-w-id="c733dcea-d96c-5572-4995-d0c08576c101"
            loading="lazy"
            srcSet="/assets/544a86d5-68b5c12941eb095052bc191a_ChatGPT-Image-8-ago-2025_-09_54_36_1-p-500.avif 500w, /assets/60a04011-68b5c12941eb095052bc191a_ChatGPT-Image-8-ago-2025_-09_54_36_1-p-800.avif 800w, /assets/88f8523f-68b5c12941eb095052bc191a_ChatGPT-Image-8-ago-2025_-09_54_36_1-p-1080.avif 1080w, /assets/787c98c0-68b5c12941eb095052bc191a_ChatGPT-Image-8-ago-2025_-09_54_36_1.avif 2880w"
          />
          <div className="div-block-5"></div>
        </div>
      </div>
    </div>
  );
}
