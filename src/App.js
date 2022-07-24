
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar
    title="TextUtils"
    about = "About us"
    />
    <div className='container my-2'>
    <TextForm />
    </div>
    {/* <div className='container my-2'>
    <About/>
    </div> */}
    </>
  );
}

export default App;
