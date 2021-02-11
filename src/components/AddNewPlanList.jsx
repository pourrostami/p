import { useContext } from 'react';
import SimpleContext from '../context/SimpleContext';

const AddNewPlanList = () => {
  const context = useContext(SimpleContext);
  return (
    <div className='m-2 p-2'>
      <form
        className='form-inline justify-content-center'
        onSubmit={(event) => event.preventDefault()}
      >
        <div className='input-group w-25'>
          <textarea
            onChange={(event) => context.handleAddListPlanToTemp(event)}
            cols='30'
            rows='10'
            id='textareaId'
          ></textarea>
        </div>
        <div className='input-group-prepend'>
          <button
            type='submit'
            className='btn btn-success fa fa-plus-square'
            onClick={context.handleAddListPlan}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewPlanList;
