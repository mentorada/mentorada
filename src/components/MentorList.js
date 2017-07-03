import React from 'react';
import {CardColumns} from 'reactstrap';
import Mentor from './Mentor';

const MentorList = ({ data, filter })=> {
  const input = filter.trim().toLowerCase();
  const mentors = data
  .filter(mentor => (
    mentor.name.toLowerCase().match(input) ||
    mentor.area.find((val)=> val.match(input))||
    mentor.level.find((val)=> val.match(input))||
    mentor.technologies.find((val)=> val.match(input))
  ))
  .map((mentor, i)=> (
    <Mentor
      image={mentor.image}
      name={mentor.name}
      key={i}
      area={mentor.area}
      technologies={mentor.technologies}
      level={mentor.level}
      accepting={mentor.accepting}
      email={mentor.email}
      facebook={mentor.facebook}
      twitter={mentor.twitter}
    />
  ));
  return(
    <CardColumns>
      {mentors}
    </CardColumns>
  )
};

/*MentorList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};*/

export default MentorList;
