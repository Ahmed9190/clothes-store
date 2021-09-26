import "./homepage.styles.scss";

const data = ["HATS", "JACKETS", "SNEAKER", "WOMENS", "MENS"];

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      {data.map((title) => (
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
