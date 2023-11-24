import { Route, Routes } from 'react-router-dom';
import Patients from './Admin/Patients/Patients';
import Sidebar from './Components/Sidebar/Sidebar'
import { icon, iconFont } from './External/design'
import { useSidebarToggled } from './main'
import './styles/app.css'
import OutPatients from './Admin/Nurses/OutPatients';
import Poly from './Admin/Nurses/Poly';
import InPatients from './Admin/Nurses/InPatients';
import ER from './Admin/Nurses/ER';
import Consultation from './Admin/Doctors/Consultation';
import DoctorDashboard from './Admin/Doctors/Dashboard';
import Test from './Test';

function App() {
  const {sidebarToggled} = useSidebarToggled();
  const profile = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp';

  return (
    <section className='page'>
      <Sidebar/>

      <main className={sidebarToggled ? 'screen' : 'screen change'}>
        <article className='userNav'>
          <p>
            {iconFont('fa-regular fa-bell')}
            <hr/>
            <img src={profile} />
            <span>Andrews Osei</span>
          </p>
        </article>

        <Routes>
          <Route path='/' element={<Patients/>} />
          <Route path='/inPatients' element={<InPatients/>} />
          <Route path='/outPatients' element={<OutPatients/>} />
          <Route path='/ER' element={<ER/>} />
          <Route path='/poly' element={<Poly/>} />

          <Route path='/consultation' element={<Consultation/>} />
          <Route path='/doctorDashboard' element={<DoctorDashboard/>} />


          <Route path='test' element={<Test/>} />

        </Routes>
        
      </main>
    </section>
  )
}

export default App
