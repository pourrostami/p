import React, { useState } from 'react';
import AddNewPlanList from './components/AddNewPlanList';
import ShowPlanList from './components/ShowPlanList';
import { Alert, Spinner, ListGroup, Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';

//import {ast} from './getPlan';

const ComponentsManage = () => {
  const [temp, set_temp] = useState('');
  const [listPlan, set_listPlan] = useState([]);
  const [listDonedPlan, set_listDonedPlan] = useState([]);
  const [show_hideAddDailyPlan, set_show_hideAddDailyPlan] = useState(false);
  const [textshow_hideAddDailyPlan, set_textshow_hideAddDailyPlan] = useState(
    '+',
  );
  const [idForEdit, set_idForEdit] = useState(0);
  const [valueTextArea, set_valueTextArea] = useState('');
  const [color, set_color] = useState(1);

  const handleAddListPlanToTemp = (event) => {
    set_temp(event.target.value);
  };
  const handleAddListPlan = () => {
    const tmp = temp;
    const listP = [...listPlan];
    tmp.split('.').map((p) => {
      const idPlan = Math.floor(Math.random() * 1000);
      const titlePlan = p;
      if (p !== '' && p !== ' ') listP.push({ id: idPlan, plan: titlePlan });
    });
    if (listP !== '') set_listPlan(listP);
  };

  const handleShow_hideAddDailyPlan = () => {
    if (show_hideAddDailyPlan) {
      set_textshow_hideAddDailyPlan('+');
      set_show_hideAddDailyPlan(false);
    } else {
      set_textshow_hideAddDailyPlan('-');
      set_show_hideAddDailyPlan(true);
    }
  };

  const getPlanIdForEditing = (plan) => {
    set_idForEdit(plan.id);
    console.log('idddddddd', plan.id);
    console.log('object', plan);
  };

  const handleEditPlan = (event, id) => {
    const plans = [...listPlan];
    const index = plans.findIndex((x) => x.id === id);
    plans[index].plan = event.target.value;

    //plans.map((p) => (p.id === id ? (p.plan = event.target.value) : null));
    set_listPlan(plans);
    console.log('iddddddddhhhhhhhhhhhhh', id);
    console.log('object', plans);
  };
  const handleCloseWith_IdForEdit = () => {
    set_idForEdit(0);
  };
  const handleDone = (id) => {
    const plans = listPlan;
    const listdp = [...listDonedPlan];
    const planIndex = plans.findIndex((p) => p.id === id);
    const planForToast = plans[planIndex];
    plans.map((p) => (p.id === id ? (p.plan += '- سبحان الله') : null));

    set_listPlan(plans);
    listdp.push(id);
    set_listDonedPlan(listdp);
    toast.success(`الحمدلله پلن  ${planForToast.plan}  اجرا گردید`, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: true,
      closeOnClick: true,
    });
  };

  const handleColor = (color) => {
    set_color(color);
  };

  const handleAddPrimaryPlanList = () => {
    const primaryList =
      'قرآن . کتاب ترجمه و تفسیر نهج البلاغه علامه . کتاب اردبیل در گذرگاه تاریخ . کتاب سفر به انتهای شب . زبان . شعر و زبان . مستند انتخابی . مستند تاریخی . نوشتن برای خدا با کلیپ . کلیپ با افترافکت . فلسفه . ریاضی مثلثات . یک قسمت آموزش مدائنی برای پروژه .  ای پی آی بورگان . جاوااسکریپت جامع. ری اکت قربانی . ری اکت نیتیو . نکست جی اس . استرپی . ری اکت ری داکس . بعضا جوان . گیت . بلاکچین . تایپ اسکریپت . پایتون . فتوشاپ . ریاضی احتمالات . ریاضی دیفرانسیل . فیزیک . هندسه';
    set_listPlan(primaryList.split('.'));

    let listP = [];

    primaryList.split('.').map((p) => {
      const idPlan = Math.trunc(Math.random() * 1000);
      const titlePlan = p;
      if (p !== '' && p !== ' ') listP.push({ id: idPlan, plan: titlePlan });
    });
    if (listP !== '') set_listPlan(listP);
  };

  const lstPln = listPlan;
  const loop = 0;
  const clr = [
    'primary',
    'secondary',
    'success',
    'danger',
    'alert',
    'info',
    'light',
    'dark',
  ];
  return (
    <p>
      <span onClick={handleAddPrimaryPlanList}> `</span>
      <SimpleContext.Provider
        value={{
          listPlan: listPlan,
          listDonedPlan: listDonedPlan,
          handleAddListPlanToTemp: handleAddListPlanToTemp,
          handleAddListPlan: handleAddListPlan,
          handleShow_hideAddDailyPlan: handleShow_hideAddDailyPlan,
          getPlanIdForEditing: getPlanIdForEditing,
          handleCloseWith_IdForEdit: handleCloseWith_IdForEdit,
          handleEditPlan: handleEditPlan,
          handleDone: handleDone,
          handleColor: handleColor,
          handleAddPrimaryPlanList: handleAddPrimaryPlanList,
        }}
      >
        <Header />
        {show_hideAddDailyPlan ? <AddNewPlanList /> : ''}
        <Button variant='outline-danger' onClick={handleShow_hideAddDailyPlan}>
          {textshow_hideAddDailyPlan}
        </Button>
        <ListGroup>
          <ListGroup.Item>
            {lstPln.map((l) => (
              <Alert key={l.id} variant='light'>
                <ShowPlanList Plan={l} idFrEdt={idForEdit} />
              </Alert>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </SimpleContext.Provider>
    </p>
  );
};

export default ComponentsManage;
