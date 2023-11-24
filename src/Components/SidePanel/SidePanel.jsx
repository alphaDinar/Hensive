import { icon } from '../../External/design';
import styles from './sidePanel.module.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from 'react';

const SidePanel = () => {
  const [sidePanelToggled, setSidePanelToggled] = useState(false);

  const toggleSidePanel =()=>{
    sidePanelToggled ? setSidePanelToggled(false) : setSidePanelToggled(true);
  }

  return (
    <>
      <section className={sidePanelToggled ? `${styles.sidePanel} ${styles.change}` : styles.sidePanel }>
        <sup onClick={toggleSidePanel} className={styles.dashToggle}>{icon('linear_scale')}</sup>

        <section className={styles.calendarBox}>

          <FullCalendar
            contentHeight={'auto'}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={(e) => { console.log(e.date) }}
          />
        </section>

        <section className={styles.todoBox}>
          <h1>Todos</h1>

          <section>
            {Array(6).fill().map(() => (
              <article>
                {icon('task_alt')}
                <p>
                  <strong>Review Lab Results</strong>
                  <span>Patients case book need to be signed.</span>
                </p>
                {icon('more_vert')}
              </article>
            ))}
          </section>
        </section>
      </section>
      <section onClick={toggleSidePanel} className={sidePanelToggled ? `${styles.sheet} ${styles.change}` : styles.sheet }>

      </section>
    </>
  );
}

export default SidePanel;