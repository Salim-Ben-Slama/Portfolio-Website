import { useEffect, useState } from "react";

const sections = ["Home", "Portfolio", "About", "Contact"];

function SideNav() {
  const [active, setActive] = useState("home");
      console.log("observer set up", active);


  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            console.log("observer set up", entry.target.id);
          }
        });
      },
      { threshold: 0.6 }

    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sideNav">
      <div className="line" />
      <ul>
        {sections.map(sec => (
          <li key={sec} className={active === sec ? "active" : ""}>
            <a href={sec === "Home" ? "#" : `#${sec}`}>
              <span className="dot" />
              <span className="label">
                {sec}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default SideNav;