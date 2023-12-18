import Topics from "../Topics";

import "./index.css"

const topics = ["Components", "State", "Lifecycle Methods", "Forms", "Events", "Conditionals", "Props"]

const About = () => {
    return (
      <div className="about-container">
        <h1 style={{textAlign: "center", color:"green"}}>About React</h1>
        <p className="about-react">React is used by 4.3% of all the websites whose JavaScript library we know. React is used by 1.7% of all the websites whose JavaScript library we know and that rank in the top 1,000,000</p>
        <p className="companies">There are approximately 8,000 companies worldwide that choose to use React over other popular libraries and frameworks. Although React is one of the most popular libraries, there are other powerful JavaScript tools that can be used for cross-platform app development and mobile app developmen</p>
        <h1 style={{textAlign: "center", color: "brown"}}>React Basic Topics</h1>
        <ul>
          {topics.map((each) => (
            <Topics topic={each} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default About;