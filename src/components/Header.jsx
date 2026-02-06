const menu = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center align-items-center py-4">
          <img src="/dc-logo.png" className="me-auto" alt="" />
          <ul className="nav">
            {menu.map((navItem) => (
              <li className="px-1">
                <a
                  href="#"
                  className="nav-link fw-bold text-secondary condensed-text"
                >
                  {navItem}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}
