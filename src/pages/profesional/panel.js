import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutProfessionalThunk, RESET, selectLogin } from "../../redux/login/reducer";


export default function Panel() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectLogin);
  const [logout, setLogout] = useState(false);
  const { push } = useRouter();
  const onClickLogout =  () => {
    console.log("click!");
    setLogout(true);
  }
  useEffect(() => {
    (() => {
      if(logout){
        dispatch(logoutProfessionalThunk());
      }
    })()
  }, [logout]);

  if(!token) {
    push('/');
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-text">
            Professional
          </span>
          <button className="btn btn-primary" onClick={onClickLogout}>logout</button>
        </div>
      </nav>
    </>
  );
}
