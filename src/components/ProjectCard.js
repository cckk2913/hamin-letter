import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, translation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"
       onMouseEnter={() => setIsHovered(true)} 
       onMouseLeave={() => setIsHovered(false)}
     >
        <img src={imgUrl} alt="Letter" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {isHovered && (
          <div className="translation-box">
            {translation}
          </div>
        )}
      </div>
    </Col>
  )
}
  
