import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Mentor from './Mentor';

const MentorList = ({ data })=> {
  const mentors = data.map((mentor, i)=> (
    <Col md="3">
      <Mentor
        image={mentor.image}
        name={mentor.name}
        key={i}
        area={mentor.area}
        technologies={mentor.technologies}
        level={mentor.level}
      />
    </ Col>
  ));
  return(
    <Container>
      <Row>
        {mentors}
      </Row>
    </Container>
  )
};

/*MentorList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};*/

export default MentorList;
