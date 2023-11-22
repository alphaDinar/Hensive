import { Link } from "react-router-dom";
import { icon } from "../../External/design";
import { useState } from "react";
import { useSidebarToggled } from "../../main";

const Sidebar = () => {
  // const [sidebarToggled, setSidebarToggled] = useState(true);

  const {sidebarToggled, setSidebarToggled} = useSidebarToggled();

  const toggleSidebar =()=>{
    sidebarToggled ? setSidebarToggled(false) : setSidebarToggled(true);
  }

  return (
    <section className={sidebarToggled ? 'sidebar' : 'sidebar change'}>
      <sup onClick={toggleSidebar}>
        {icon('menu')}
      </sup>

      <header>
        <strong>Hensive Health</strong>
        {icon('health_and_safety')}
      </header>

      <nav>
        <article>
          <h5>RECORDS OFFICE</h5>
          <p>
            <Link to={'/'}>{icon('group')} <small>Patients</small></Link>
          </p>
        </article>

        <article>
          <h5>NURSES</h5>
          <p>
            <Link to={'/inPatients'} className="flipBox">{icon('outpatient_med')} <small>In Patients</small></Link>
            <Link to={'/outPatients'}>{icon('outpatient_med')} <small>Out Patients</small></Link>
            <Link to={'/ER'}>{icon('vital_signs')} <small>ER</small></Link>
            <Link to={'/poly'}>{icon('home_health')} <small>Poly</small></Link>
          </p>
        </article>

        <article>
          <h5>DOCTORS</h5>
          <p>
            <Link>{icon('dashboard')} <small>Dashboard</small></Link>
            <Link>{icon('sms')} <small>Consultation</small></Link>
            <Link>{icon('assignment')} <small>Appointment</small></Link>
          </p>
        </article>

        <article>
          <h5>PHARMACY</h5>
          <p>
            <Link>{icon('dashboard')} <small>Doctor's Prescription</small></Link>
            <Link className="flipBox">{icon('outpatient_med')} <small>In Patients</small></Link>
          </p>
        </article>

        <article>
          <h5>REQUISITION</h5>
          <p>
            <Link>{icon('outpatient_med')} <small>Outgoing</small></Link>
            <Link className="flipBox">{icon('outpatient_med')} <small>Incoming</small></Link>
            <Link>{icon('payments')} <small>Medical Purchase</small></Link>
            <Link>{icon('pill')} <small>Drug Stock</small></Link>
            <Link>{icon('description')} <small>General Info</small></Link>
          </p>
        </article>

        <article>
          <h5>CASHIER</h5>
          <p>
            <Link>{icon('dashboard')} <small>Dashboard</small></Link>
            <Link>{icon('payments')} <small>Payments</small></Link>
          </p>
        </article>

        <article>
          <h5>LABORATORY</h5>
          <p>
            <Link>{icon('dashboard')} <small>Dashboard</small></Link>
            <Link>{icon('monitor_heart')} <small>Radiology</small></Link>
          </p>
        </article>
      </nav>

    </section>
  );
}

export default Sidebar;