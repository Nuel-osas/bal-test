import type { CSSProperties } from "react";
export default function Footer() {
  return (
    <div className="footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_content-wrapper">
            <div className="footer_content">
              <div className="footer_first-flex">
                <h1 className="mob-h">{"Suiball"}</h1>
              </div>
              <div className="footer_second-flex">
                <div className="text-size-xlarge">
                  {"Suiball Is Just the Beginning"}
                </div>
                <div className="footer_text-copy is-grey">
                  {
                    "This is the foundation for a hardware ecosystem where your device becomes your identity, your wallet, your memory, and your game controller. You in control of your Web3 destiny."
                  }
                </div>
              </div>
              <div className="footer-heading-wrapper">
                <div className="text-block-2">
                  {"©2025 COPYRIGHT SUIBALL. ALL RIGHTS RESERVED."}
                </div>
              </div>
            </div>
            <img
              src="/assets/24719369-68bef2ac6de047a3815ab5f9_lateral.png"
              loading="lazy"
              sizes="100vw"
              srcSet="/assets/f08da679-68bef2ac6de047a3815ab5f9_lateral-p-500.png 500w, /assets/e016db06-68bef2ac6de047a3815ab5f9_lateral-p-800.png 800w, /assets/5b38ff63-68bef2ac6de047a3815ab5f9_lateral-p-1080.png 1080w, /assets/06302a36-68bef2ac6de047a3815ab5f9_lateral-p-1600.png 1600w, /assets/2e824db8-68bef2ac6de047a3815ab5f9_lateral-p-2000.png 2000w, /assets/24719369-68bef2ac6de047a3815ab5f9_lateral.png 2480w"
              alt=""
              className="footer_image-apsolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
