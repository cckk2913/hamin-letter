import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark, dracula, oneDark, vscDarkPlus, tomorrow, nightOwl, duotoneDark
 } from 'react-syntax-highlighter/dist/esm/styles/prism';


export const Skills = () => {
  {/*  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
*/}
  
  const codeString = `
  class Hamin:
    def __init__(self):
        self.name = "Hamin"
        self.birth = "????.11.01"
        self.mood = "Happy"
        self.action_sequence = []  
        self.dance_moves = ["Spin", "Jump", "Wave", "Shuffle"]

    def sing(self):
        self.mood = "Soulful"
        self.action_sequence.append({
            "action": "sing", 
        })
        return True

    def dance(self):
        self.mood = "Natural"
        dance_sequence = [random.choice(self.dance_moves) for _ in range(3)]
        self.action_sequence.append({
            "action": "dance", 
            "moves": dance_sequence
        })
        return True

    def show_cuteness(self):
        cuteness_actions = [ "小青蛙嘴", "貓貓手", "腳丫擊掌", "企鵝鞠躬"]
        self.mood = "Adorable"
        self.action_sequence.append({
            "action": "show_cuteness", 
            "description": random.choice(cuteness_actions)
        })
        return True
  `;


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
              <h2>Profile</h2>
              <h4>What makes Hamin?</h4>
                        <p><SyntaxHighlighter language="python" style={nightOwl}>
      {codeString}
    </SyntaxHighlighter></p>
                     {/*   <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
