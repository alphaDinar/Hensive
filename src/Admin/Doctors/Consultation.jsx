import PatientBox from "../../Components/PatientBox/PatientBox";
import { icon } from "../../External/design";

const Consultation = () => {
  const patientBoxHeaders = [
    'ID',
    "Patient's Details",
    'Date Of Birth',
    'Phone Number',
    'Last Attended',
    'Action'
  ];

  const patient = {
    pid: '001',
    img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp',
    name: 'Osei Andrews',
    dob : '12-10-1999',
    phoneNumber: '0558420368',
    lastAttended : '23rd March, 2023',
    action : 'view'
  }

  return ( 
    <section className="wrapper">
      <header className="titleBox">
        <strong>Consultation</strong>
      </header>

      <section className="filterBox">
        <div>
          {icon('search')}
          <input type="text" value="" placeholder="search For Patient" />
        </div>
      </section>

      <PatientBox props={{dataType : 'consultation', headerType : 3, patientBoxHeaders, patient}} />
    </section>
   );
}
 
export default Consultation;