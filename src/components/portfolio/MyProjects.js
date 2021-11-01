import {useState, useEffect} from 'react'
import PortfolioList from '../portfoliolist/PortfolioList';
import './portfolio.css';
import {
    webPortfolios,
    mobilePortfolios,
    designPortfolios,
    schoolPortfolios
} from '../../data.js'

function MyProjects() {
    const [selected, setSelected] = useState("web")
    const [data, setData] = useState([]);

    const list = [
      {
        id: "web",
        title: "Web Apps",
      },
      {
        id: "mobile",
        title: "Mobile Apps",
      },
      {
        id: "design",
        title: "UI/UX Designs",
      },
      {
        id: "school",
        title: "School Projects",
      },
    ];

    useEffect(() => {
        // console.log(data)
        switch (selected) {
          case "web":
            setData(webPortfolios);
            break;
          case "mobile":
            setData(mobilePortfolios);
            break;
          case "design":
            setData(designPortfolios);
            break;
          case "school":
            setData(schoolPortfolios);
            break;
          default:
              setData(webPortfolios)
            break;
        }

    }, [selected])
    return (
      <div className="port" id="port">
        <h1 id="pt">Portfolio</h1>
        <ul>
          {list.map((item) => (
              <PortfolioList title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected} 
              id={item.id}
              key={item.id} />
          ))}
        </ul>
        <div className="container">
            {data.map((d) => {
                 <div className="item" key={d.index}>
                   <img
                     src={d.img}
                     alt=""
                     width="200"
                     height="300"
                     id="photo"
                   />
                   <h3>{d.title}</h3>
                 </div>;
            })}
         
         
        </div>
      </div>
    );
}

export default MyProjects
