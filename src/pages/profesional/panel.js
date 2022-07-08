import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutProfessionalThunk,
  selectLogin,
} from "../../redux/login/reducer";
import TableSchedule from "../../components/tableSchedules";

export default function Panel() {
  const dispatch = useDispatch();
  const { token, id_professional } = useSelector(selectLogin);
  const [schedules, setSchedules] = useState([]);
  const [logout, setLogout] = useState(false);
  const { push } = useRouter();
  
  const onClickLogout = () => {
    setLogout(true);
  };

  useEffect(() => {
    (() => {
      if (logout) {
        dispatch(logoutProfessionalThunk());
      }
    })();
  }, [logout]);

  useEffect(() => {
    const info = async () => {
      const res = await fetch(
        `${process.env.BACKEND_URL}/schedule/professional/${id_professional}`
      );
      const schedules = await res.json();
      setSchedules(schedules);
    };
    info();
  }, []);

  const handlecreateSchedule = () => {
    push('/profesional/crear-horario');
  }
  if (!token) {
    push("/");
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-text">Profesional</span>
          <button className="btn btn-primary" onClick={onClickLogout}>
            logout
          </button>
        </div>
      </nav>
      <div className="container justify-content-center">
        <div className="d-flex flex-row m-3">
          <button className="btn btn-primary" onClick={handlecreateSchedule}> crear horario</button>
        </div>
      </div>
      <TableSchedule schedules={schedules} />
    </>
  );
}
