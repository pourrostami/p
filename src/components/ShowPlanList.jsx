import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import SimpleContext from '../context/SimpleContext';

const ShowPlanList = ({ Plan, idFrEdt }) => {
  const context = useContext(SimpleContext);
  //const p = Plan;
  const clr = [
    '#ef6694',
    '#29B6F6',
    '#AB47BC',
    '#5C6BC0',
    '#9CCC65',
    '#26C6DA',
    '#66BB6A',
    '#FFEE58',
    '#8D6E63',
    '#BDBDBD',
    '#78909C',
    '#6A1B9A',
    '#4E342E',
    '#F9A825',
    '#558B2F',
    '#37474F',
    '#EEEEEE',
    '#81D4FA',
    '#80DEEA',
    '#B39DDB',
    '#B0BEC5',
    '#880E4F',
    '#FF6F00',
  ];
  // setTimeout(function(){ console.log('Allah'); }, 1000);
  //setInterval( ()=>handleColor(Math.floor(Math.random()*23)), 10000)
  return (
    <>
      <div>
        {/* <div className="card text-success bg-blue mb-5 mt-5 w-25 mx-auto">
            <div className="card-body text-center"> */}
        <div
          style={{ color: clr[Math.floor(Math.random() * 23)] }}
          //onMouseMove={()=>handleColor(Math.floor(Math.random()*23))}
        >
          <p className='d-block'>{Plan.plan}</p>
          {Plan.id === idFrEdt ? (
            <div>
              <div>
                <input
                  type='text'
                  onChange={(event) => context.handleEditPlan(event, Plan.id)}
                />
              </div>
              <div>
                <button
                  className='btn btn-sm btn-secondary'
                  onClick={context.handleCloseWith_IdForEdit}
                >
                  X
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
          <div>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={() => context.getPlanIdForEditing(Plan)}
            >
              <Spinner animation='grow' variant='light' />
            </Button>
            <Button
              variant='outline-success'
              size='sm'
              onClick={() => context.handleDone(Plan.id)}
            >
              <Spinner animation='grow' variant='light' />
            </Button>
          </div>
        </div>
        <div style={{ backgroundColor: clr[context.color] }}>
          <hr style={{ color: clr[Math.floor(Math.random() * 23)] }} />
        </div>
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default ShowPlanList;
