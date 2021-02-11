import React, { Component } from 'react';
import AddNewPlanList from './components/AddNewPlanList';
import LoadTextFile from './components/LoadTextFile';
import ShowPlanList from './components/ShowPlanList';
import { jv } from './components/javascript';
import { Alert, Spinner, ListGroup, Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';

//import {ast} from './getPlan';

class OldComponentsManage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    temp: '',
    listPlan: [],
    listDonedPlan: [],
    show_hideAddDailyPlan: false,
    textshow_hideAddDailyPlan: '+',
    idForEdit: 0,
    valueTextArea: '',
    color: 1,
  };

  handleAddListPlanToTemp = (event) => {
    this.setState({ temp: event.target.value });
    //jv()
  };
  handleAddListPlan = () => {
    const { temp } = this.state;
    const listP = [...this.state.listPlan];
    console.log('listP: ', listP);
    temp.split('.').map((p) => {
      const idPlan = Math.floor(Math.random() * 1000);
      const titlePlan = p;
      if (p !== '' && p !== ' ') listP.push({ id: idPlan, plan: titlePlan });
    });
    if (listP !== '') this.setState({ listPlan: listP });
  };

  handleShow_hideAddDailyPlan = () => {
    if (this.state.show_hideAddDailyPlan) {
      this.setState({
        textshow_hideAddDailyPlan: '+',
        show_hideAddDailyPlan: false,
      });
    } else {
      this.setState({
        textshow_hideAddDailyPlan: '-',
        show_hideAddDailyPlan: true,
      });
    }
  };

  getPlanIdForEditing = (plan) => {
    this.setState({ idForEdit: plan.id });
  };

  handleEditPlan = (event, id) => {
    const plans = this.state.listPlan;
    plans.map((p) => (p.id === id ? (p.plan = event.target.value) : null));
    this.setState({ listPlan: plans });
  };
  handleCloseWith_IdForEdit = () => {
    this.setState({ idForEdit: 0 });
  };
  handleDone = (id) => {
    const plans = this.state.listPlan;
    const listdp = [...this.state.listDonedPlan];
    const planIndex = plans.findIndex((p) => p.id === id);
    const planForToast = plans[planIndex];
    plans.map((p) => (p.id === id ? (p.plan += '- سبحان الله') : null));

    this.setState({ listPlan: plans });
    listdp.push(id);
    this.setState({ listDonedPlan: listdp });
    toast.success(`الحمدلله پلن  ${planForToast.plan}  اجرا گردید`, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: true,
      closeOnClick: true,
    });
  };

  handleColor = (color) => {
    this.setState({ color });
  };

  handleAddPrimaryPlanList = () => {
    const primaryList =
      'قرآن . کتاب ترجمه و تفسیر نهج البلاغه علامه . کتاب اردبیل در گذرگاه تاریخ . کتاب سفر به انتهای شب . زبان . شعر و زبان . مستند انتخابی . مستند تاریخی . نوشتن برای خدا با کلیپ . کلیپ با افترافکت . فلسفه . ریاضی مثلثات . یک قسمت آموزش مدائنی برای پروژه .  ای پی آی بورگان . جاوااسکریپت جامع. ری اکت قربانی . ری اکت نیتیو . نکست جی اس . استرپی . ری اکت ری داکس . بعضا جوان . گیت . بلاکچین . تایپ اسکریپت . پایتون . فتوشاپ . ریاضی احتمالات . ریاضی دیفرانسیل';
    this.setState({ listPlan: primaryList.split('.') });

    let listP = [];

    primaryList.split('.').map((p) => {
      const idPlan = Math.trunc(Math.random() * 1000);
      const titlePlan = p;
      if (p !== '' && p !== ' ') listP.push({ id: idPlan, plan: titlePlan });
    });
    if (listP !== '') this.setState({ listPlan: listP });
  };

  render() {
    const listPlan = this.state.listPlan;
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
    //setInterval( ()=>this.handleColor(Math.floor(Math.random()*23)), 30101)  worked

    //setTimeout( this.setState({color:'0'}) , 1000);
    //  setInterval(() => {
    //     this.setState({color:Math.floor(Math.random()+8)})
    //     console.log(this.state.color);

    // }, 1000);
    return (
      <>
        <SimpleContext.Provider
          value={{
            state: this.state,
            handleAddListPlanToTemp: this.handleAddListPlanToTemp,
            handleAddListPlan: this.handleAddListPlan,
            handleShow_hideAddDailyPlan: this.handleShow_hideAddDailyPlan,
            getPlanIdForEditing: this.getPlanIdForEditing,
            handleCloseWith_IdForEdit: this.handleCloseWith_IdForEdit,
            handleEditPlan: this.handleEditPlan,
            handleDone: this.handleDone,
            handleColor: this.handleColor,
            handleAddPrimaryPlanList: this.handleAddPrimaryPlanList,
          }}
        >
          <Header />

          {this.state.show_hideAddDailyPlan ? <AddNewPlanList /> : ''}

          <Button
            variant='outline-danger'
            onClick={this.handleShow_hideAddDailyPlan}
          >
            {this.state.textshow_hideAddDailyPlan}
          </Button>
          <Button
            variant='outline-success'
            onClick={this.handleAddPrimaryPlanList}
          >
            ~
          </Button>

          <ListGroup>
            <ListGroup.Item>
              {listPlan.map((l) => (
                <Alert key={l.id} variant='light'>
                  <ShowPlanList Plan={l} />
                </Alert>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </SimpleContext.Provider>
      </>
    );
  }
}

export default OldComponentsManage;
