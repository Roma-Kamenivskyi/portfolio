import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from '../work-item/work-item';

const WorksList = ({ list }) => {
  return (
    list &&
    list.map(data => {
      return <WorkItem data={data} key={data.id} />;
    })
  );
};

WorksList.propTypes = {
  list: PropTypes.array
};

export default WorksList;
