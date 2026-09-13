import type { CSSProperties } from "react";
export default function Navigation() {
  return (
    <>
      <div className="nav-mob">
        <a href="#" className="nav_brand w-nav-brand">
          <img
            src="/assets/1897017d-68b4a18fc943c775748087b8_Vector.svg"
            loading="lazy"
            alt=""
            className="nav_logo"
          />
        </a>
        <div className="flex-horizontal gap-24">
          <a
            data-w-id="3e3b4fc8-aefd-c03a-d94f-81be5353b49a"
            style={{ backgroundColor: "rgb(0,0,0)" } as CSSProperties}
            href="https://order.suiball.com"
            target="_blank"
            className="nav-btn w-inline-block"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundColor: "rgb(0,65,230)" } as CSSProperties}
              className="blue-dot"
            ></div>
            <div className="text-size-regular">{"PRE-ORDER"}</div>
          </a>
          <a
            href="https://x.com/suiballO"
            target="_blank"
            className="x-button w-inline-block"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src="/assets/b9853003-68d2f81abebaa20e7677fae6_x-icon.svg"
                loading="lazy"
                alt=""
                className="x-icon"
              />
            </div>
          </a>
        </div>
      </div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav_component w-nav"
      >
        <div className="padding-global">
          <div className="nav_container">
            <a href="#" className="nav_brand w-nav-brand">
              <img
                src="/assets/1897017d-68b4a18fc943c775748087b8_Vector.svg"
                loading="lazy"
                alt=""
                className="nav_logo"
              />
            </a>
            <nav role="navigation" className="nav_menu w-nav-menu">
              <a href="#sui" className="nav_menu_link w-nav-link">
                {"sui"}
              </a>
              <a href="#design" className="nav_menu_link w-nav-link">
                {"Design"}
              </a>
              <a href="#security" className="nav_menu_link w-nav-link">
                {"Security"}
              </a>
              <a href="#features" className="nav_menu_link w-nav-link">
                {"Features"}
              </a>
              <a href="#bitcoin" className="nav_menu_link w-nav-link">
                {"bitcoin"}
              </a>
              <a href="#suiball-nft" className="nav_menu_link w-nav-link">
                {"suiball nft"}
              </a>
            </nav>
            <div className="flex-horizontal gap-24">
              <a
                data-w-id="0c1b0568-097d-f1d5-1d60-5d054481880d"
                href="https://claim.suiball.com"
                target="_blank"
                className="nav-btn w-inline-block"
                rel="noopener noreferrer"
              >
                <div className="blue-dot"></div>
                <div className="text-size-regular">{"Claim"}</div>
              </a>
              <a
                href="https://x.com/suiballO"
                target="_blank"
                className="x-button w-inline-block"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    src="/assets/b9853003-68d2f81abebaa20e7677fae6_x-icon.svg"
                    loading="lazy"
                    alt=""
                    className="x-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
