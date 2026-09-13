import type { CSSProperties } from "react";
export default function SuiOverview() {
  return (
    <div id="sui" className="section_second">
      <div className="padding-global">
        <div className="container-large">
          <div className="second_content-wrapper">
            <h3 data-split="heading" className="is-black align-center">
              {"Suiball is the "}
              <span className="blue-span">{"first hardware wallet"}</span>
              {
                " designed for unmatched speed, simplicity, and a truly personal experience. Every interaction is instant. Every feature, intuitive. "
              }
              <span className="blue-span">{"Built natively on Sui"}</span>
              {
                ", it pairs cutting-edge design with the most advanced blockchain  in Web3."
              }
            </h3>
            <div className="second_grid-wrapper">
              <div className="second_grid">
                <div className="second_grid-flex">
                  <div className="blue-dot the-biggest"></div>
                  <div
                    id="paragrafic1"
                    className="text-size-xlarge is-black text-align-center"
                  >
                    {
                      "Native support for all Sui transactions and Move contracts"
                    }
                  </div>
                </div>
                <div className="second_grid-flex">
                  <div className="blue-dot the-biggest"></div>
                  <div
                    id="memo"
                    className="text-size-xlarge is-black text-align-center"
                  >
                    {"Custom support for major Sui-based dApps and Wallets"}
                  </div>
                </div>
                <div className="second_grid-flex">
                  <div className="blue-dot the-biggest"></div>
                  <div
                    id="dur"
                    className="text-size-xlarge is-black text-align-center"
                  >
                    {
                      "Full compatibility with upcoming Sui updates and features"
                    }
                  </div>
                </div>
                <div className="second_grid-flex">
                  <div className="blue-dot the-biggest"></div>
                  <div
                    id="paragraf4"
                    className="text-size-xlarge is-black text-align-center"
                  >
                    {
                      "Intuitive and seamless UX tailored towards specific use cases"
                    }
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
