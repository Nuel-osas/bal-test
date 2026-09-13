import type { CSSProperties } from "react";
export default function HardwareDetails() {
  return (
    <div className="section_fourth">
      <div className="padding-global">
        <div className="container-large">
          <div className="fourth_content-wrapper">
            <h4 data-split="heading" className="align-center">
              {
                "Suiball is more than a simple signing device, it's a next generation personal companion. With a premium design, stainless-steel body, OLED display and cutting edge tech, it feels as good as it performs."
              }
            </h4>
            <div className="fourth_grid-wrapper">
              <div className="fourth_grid">
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"Display:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"1.75” AMOLED"}
                  </div>
                </div>
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"Resolution:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"480x480"}
                  </div>
                </div>
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"back cover:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"Gorilla Glass"}
                  </div>
                </div>
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"User Exp:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"Touch Screen"}
                  </div>
                </div>
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"Dimensions:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"50x9mm"}
                  </div>
                </div>
                <div className="fourth_grid-flex">
                  <div className="text-size-tiny">{"Frame:"}</div>
                  <div className="text-size-xxlarge align-center">
                    {"Stainless Steel"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
