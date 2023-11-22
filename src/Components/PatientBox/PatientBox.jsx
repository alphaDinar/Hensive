import { useEffect, useState } from 'react';
import styles from './patientBox.module.css';

const PatientBox = ({ props }) => {
  const { patientBoxHeaders } = props;
  const { headerType } = props;

  const [headerStyle, setHeaderStyle] = useState(null);

  useEffect(() => {
    console.log(headerType)
    if (headerType === 1) {
      setHeaderStyle(styles.headerStyle1)
    }
    console.log(headerStyle)
  }, [])


  const profile = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp';

  const patient = {
    pid : '001',
    img : profile,
    name : 'Osei Andrews',
    coverage : 'Private',
    toSee : 'Doctor',
    specialty : 'Emergency Consultation (Adult)' 
  }

  return (
    <section className={styles.patientBox}>
      <header className={headerStyle}>
        {patientBoxHeaders.map((el) => (
          <strong>{el}</strong>
        ))}
      </header>
      {Array(5).fill().map((el) => (
        <li className={headerStyle}>
          <span>001</span>
          <p>
            <img src={profile} />
            <span>Osei Andrews</span>
          </p>
        </li>
      ))}
    </section>
  );
}

export default PatientBox;