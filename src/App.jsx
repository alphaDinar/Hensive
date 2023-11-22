import Patients from './Admin/Patients/Patients';
import Sidebar from './Components/Sidebar/Sidebar'
import { icon, iconFont } from './External/design'
import { useSidebarToggled } from './main'
import './styles/app.css'

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
        <Patients/>
      </main>
    </section>
  )
}

export default App
