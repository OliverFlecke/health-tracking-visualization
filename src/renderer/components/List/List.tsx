import React from 'react';
import { Link } from '@reach/router';

const List = (props: {
  data: { datauuid: string }[];
  children: (data: any) => JSX.Element;
}) => {
  const { data, children } = props;

  return (
    <>
      {data
        .map((element, index) => (
          <Link key={index} to={element.datauuid}>
            {children(element)}
          </Link>
        ))
        .reverse()}
    </>
  );
};

export default List;
