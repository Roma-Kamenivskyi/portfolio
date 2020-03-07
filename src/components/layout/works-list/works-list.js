import React from 'react';
import PropTypes from 'prop-types';

import WorkItem from '../work-item/work-item';

const WorksList = ({ list }) => {
  return list && list.map(data => <WorkItem {...data} key={data.id} />);
};

WorksList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

export default React.memo(WorksList);
