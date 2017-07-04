import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Badge } from 'reactstrap';

const Mentor = ({image, name, area, technologies, level, accepting, email, facebook, twitter}) => {
  const areas = area.map((area, i)=>
    <Badge color="info" key={i}>{area}</Badge>
  );

  const techs = technologies.map((tech, i)=>
    <Badge key={i}>{tech}</Badge>
  );

  const levels = level.map((level, i)=>
    <Badge color="warning" key={i}>{level}</Badge>
  );

  let photo = image;
  if(photo === ""){
    photo = "http://www.ualberta.ca/~uaac/female%20placeholder.png";
  }

  let isaccepting = null;
  if(accepting === true){
    isaccepting = <span><i className="fa fa-check-circle accepting-true" aria-hidden="true"></i></span>;
  } else isaccepting = <span><i className="fa fa-times-circle-o accepting-false" aria-hidden="true"></i></span>;

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
          <CardTitle>{name}{isaccepting}</CardTitle>
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
