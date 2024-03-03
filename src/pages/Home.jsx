import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/Home.scss";
import countryAnalytics from "../assets/images/countryAnalytics.png";
import Card from "../components/Card";
import dash from "../assets/images/dash.png"
import capital from "../assets/images/cap.png"
import trading from "../assets/images/trad.png"
import equity from "../assets/images/equity.png"
import fundflow from "../assets/images/fund.png"
import financial from "../assets/images/financial.png"
import fperf from "../assets/images/fundperf.png"
import debte from "../assets/images/debte.png"








export default function Home() {
  const cardData = [
    {
      title: "Country Analytics",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: countryAnalytics,
    },
    {
      title: "Dashboard & Analytics",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: dash,
    },
    {
      title: "Capital Markets",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: capital,
    },
    {
      title: "Trading",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: trading,
    },
    {
      title: "Equities",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: equity,
    },
    {
      title: "Fund Flows",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: fundflow,
    },
    {
      title: "Financial Assets Managements",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: financial,
    },
    {
      title: "Fund Performance",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: fperf,
    },
    {
      title: "Debt Equity",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      imgSrc: debte,
    },
  ];

  return (
    <div id="home-container" className="home-container">
      {/* <Navbar /> */}

      <div className="first-cont">
        <div className="head">
          <span className="eco-head">ECONOMIC</span>
          <span className="analytic-head">ANALYTICS</span>
        </div>
        <div className="sub-head">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="second-box">
        <div className="second-wrapper">
          <div className="row" style={{justifyContent:'center'}}>
            {cardData.map((element, idx) => (
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card img={element.imgSrc} title={element.title} text={element.text} />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="col-md-6">
        <Card img={countryAnalytics} title={""} />
        </div> */}
      </div>
    </div>
  );
}
