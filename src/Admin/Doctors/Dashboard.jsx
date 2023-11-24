import { useState } from "react";
import PatientBox from "../../Components/PatientBox/PatientBox";
import { icon } from "../../External/design";
import { wardTypeList } from "../../External/lists";
import SidePanel from "../../Components/SidePanel/SidePanel";

const DoctorDashboard = () => {
  const [activeWardTab, setActiveWardTab] = useState(null);

  const patientBoxHeaders = [
    'ID',
    "Patient's Details",
    'Gender',
    'Time',
    'Priority',
    'Action',
  ];

  const patient = {
    pid: '001',
    img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp',
    name: 'Osei Andrews',
    gender : 'Male',
    time: '12:30 pm',
    priority : 'low',
  }

  return ( 
    <section className="wrapper">
      <header className="titleBox">
        <span>Good morning, Dr. Osei</span>

        <form>
          <legend>Register Patient {icon('person')}</legend>
        </form>
      </header> 

      <section className="topNavBox">
        <article>
          <p>
            <strong>10</strong>
            <span>My Queue</span>
          </p>
          {icon('group')}
        </article>
        <article>
          <p>
            <strong>4</strong>
            <span>Appointments</span>
          </p>
          {icon('notifications')}
        </article>
        <article>
          <p>
            <strong>5</strong>
            <span>Patients Treated</span>
          </p>
          {icon('personal_injury')}
        </article>
      </section>

      <section className="wardTypeBox">
        {wardTypeList.map((el,i)=>(
          <legend style={ activeWardTab === i ? {background:'salmon',color:'white'} : {background:'white', color:'black'}}  onClick={()=>{setActiveWardTab(i)}}>{el.name}</legend>
        ))}
      </section>

      <section className="filterBox">
        <div>
          {icon('search')}
          <input type="text" value="" placeholder="search For Patient" />
        </div>
      </section>

      <PatientBox props={{dataType : 'doctorDashboard', headerType : 3, patientBoxHeaders, patient}} />

      <SidePanel/>
    </section>
   );
}
 
export default DoctorDashboard;