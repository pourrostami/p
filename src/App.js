import logo from './logo.svg';

import LoadTextFile from './components/LoadTextFile';
import ComponentsManage from './ComponentsManage';

import { ToastContainer } from 'react-toastify';
import CarouselHeader from './components/common/CarouselHeader';
import Radium from 'radium';

function App() {
  return (
    <>
      <div
        className='container rtl text-center'
        style={{
          backgroundImage:
            'url(https://i.picsum.photos/id/130/3807/2538.jpg?hmac=Kl_ZLgNPUBhsKnffomgQvxWA17JhdNLYBnwlPHBEias)',
        }}
      >
        <div className='alert alert-success'>
          <h1
            style={{ ':hover': { color: 'yellow', backgroundColor: 'white' } }}
          >
            بسم الله الرحمن الرحیم
          </h1>
        </div>
        <CarouselHeader />
        <ComponentsManage />
        <ToastContainer />
      </div>
    </>
  );
}

export default Radium(App);
