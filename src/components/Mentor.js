import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Badge } from 'reactstrap';

const Mentor = ({image, name, area, technologies, level}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{area}</CardSubtitle>
          <CardText>{level}</CardText>
          <Badge>{technologies}</Badge>
        </CardBlock>
      </Card>
    </div>
  );
};

/*Mentor.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
*/
export default Mentor;
