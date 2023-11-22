import { useState } from "react";
import PatientBox from "../../Components/PatientBox/PatientBox";
import { icon } from "../../External/design";
import { wardTypeList } from "../../External/lists";

const ER = () => {
  const [activeWardTab, setActiveWardTab] = useState(null);

  const patientBoxHeaders = [
    'ID',
    "Patient's Details",
    'Gender',
    'Age',
    'Marital Status',
    'Date Admitted',
    'Bed Number',
  ];

  const patient = {
    pid: '001',
    img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp',
    name: 'Osei Andrews',
    gender : 'Male',
    age: '32',
    maritalStatus: 'Single',
    dateAdmitted : '23rd March, 2023',
    bedNumber : 'N003'
  }

  return ( 
    <section className="wrapper">
      <header className="titleBox">
        <strong>ER</strong>
      </header>

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

      <PatientBox props={{dataType : 'outPatient', headerType : 2, patientBoxHeaders, patient}} />

    </section>
   );
}
 
export default ER;