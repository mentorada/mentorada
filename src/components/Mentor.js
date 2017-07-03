import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Badge } from 'reactstrap';

const Mentor = ({image, name, area, technologies, level, email, facebook, twitter}) => {
  const areas = area.map((area)=>
    <Badge color="info">{area}</Badge>
  );
  const techs = technologies.map((tech)=>
    <Badge>{tech}</Badge>
  );
  const levels = level.map((level)=>
    <Badge color="warning">{level}</Badge>
  );
  let photo = image;
  if(photo === ""){
    photo = "http://www.ualberta.ca/~uaac/female%20placeholder.png";
  }
  let mailbutton = null;
  if(email !== ""){
    mailbutton = <a href={"mailto:"+email} target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>;
  }
  let facebutton = null;
  if(facebook !== ""){
    facebutton = <a href={facebook} target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>;
  }
  let twbutton = null;
  if(twitter !== ""){
    twbutton = <a href={twitter} target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>;
  }
  return (
    <div>
      <Card>
        <CardImg className="img-fluid mx-auto d-block" width="100%" src={photo} alt="mentor image" />
        <CardBlock className="text-center">
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{areas}</CardSubtitle>
          <CardText>{levels}</CardText>
          {techs}
          <div className="contact">
            {mailbutton}
            {facebutton}
            {twbutton}
          </div>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Mentor;