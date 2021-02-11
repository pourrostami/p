import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import SimpleContext from '../../context/SimpleContext';

const Header = () => {
  const context = useContext(SimpleContext);
  return (
    <div>
      <Alert variant='secondary'>
        <h5>
          تعداد کل پلن ها :
          <span className='badge badge-pill badge-warning'>
            {context.listPlan.length}
          </span>
        </h5>
      </Alert>
      <Alert variant='light'>
        <h4>
          تعداد پلن های انجام شده :
          <span
            className={
              context.listDonedPlan.length < 10
                ? 'badge badge-pill badge-danger'
                : 'badge badge-pill badge-success'
            }
          >
            {context.listDonedPlan.length}
          </span>
        </h4>
      </Alert>
    </div>
  );
};

export default Header;
