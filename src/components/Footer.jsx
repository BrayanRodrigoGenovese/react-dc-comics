// MENUS
// DC COMICS
const DCCOMICS = {
  title: "DC COMICS",
  navItems: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
};

const DC = {
  title: "DC",
  navItems: [
    "Terms Of Use",
    "Privacy policy(New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talents Workshops",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us",
  ],
};

const SHOP = {
  title: "SHOP",
  navItems: ["Shop DC", "Shop DC Collectibles"],
};

const SITES = {
  title: "SITES",
  navItems: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
};

const socialIcons = [
  "/footer-facebook.png",
  "/footer-twitter.png",
  "/footer-youtube.png",
  "/footer-pinterest.png",
  "/footer-periscope.png",
];

function FooterMenu(title, navItems) {
  return (
    <>
      <h2 className="fw-bold text-white condensed-text">{title}</h2>
      <ul className="nav flex-column">
        {navItems.map((navItem) => (
          <li className="nav-item text-secondary">
            <a href="#" className="nav-link p-0 text-secondary">
              {navItem}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer>
        <div id="about-us">
          <div className="container">
            <div className="row">
              <div className="col-6 py-5">
                <div className="row ">
                  {/* Double Column */}
                  <div className="flex-column col-4">
                    {/* DC COMICS */}
                    {FooterMenu(DCCOMICS.title, DCCOMICS.navItems)}
                    <div className="my-3"></div>
                    {/* SHOP */}
                    {FooterMenu(SHOP.title, SHOP.navItems)}
                  </div>
                  {/* DC */}
                  <div className="col-4">
                    {FooterMenu(DC.title, DC.navItems)}
                  </div>
                  {/* SITES */}
                  <div className="col-4">
                    {FooterMenu(SITES.title, SITES.navItems)}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="/dc-logo-bg.png"
                  className="img-fluid"
                  id="dc-logo-bg"
                  alt="dc logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="follow-us">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center py-5">
              <button type="button" className="me-auto" id="sign-up-button">
                SIGN-UP NOW!
              </button>
              <div className="d-flex flex-wrap">
                <h2 className="fw-bold condensed-text me-3">FOLLOW US</h2>
                <ul className="nav">
                  {socialIcons.map((iconPath) => (
                    <li className="nav-item px-2">
                      <a href="#">
                        <img src={iconPath} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
