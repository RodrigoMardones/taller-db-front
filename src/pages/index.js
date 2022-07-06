import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import  { loginProfessionalThunk, selectLogin, RESET as resetLogin } from '../redux/login/reducer';

const AlertMessage = ({message}) => {
  return (
  <div className="alert alert-danger" role="alert" > 
      {message}
  </div>)
}

export default function Home() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { token, loaded, loading } = useSelector(selectLogin); 
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    dispatch(loginProfessionalThunk(data))
  };
  useEffect(() => {
    (() => {
      if(token) push({ pathname : '/profesional/panel'})
    })()
  }, [token])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-4 mt-4">
            <div className="text-center">
              <Image src="/logo.png" width={350} height={350} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-outline mb-4">
                <label className="form-label" forhtml="form2Example1">
                  Usuario
                </label>
                <input
                  type="test"
                  className="form-control"
                  {...register("username")}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" forhtml="form2Example2">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password")}
                />
              </div>
                { loaded ? <AlertMessage message={"usuario o contraseña incorrecta"}/> : null}

              <button type="submit" className="btn btn-primary btn-block mb-4">
                { loading ? "espere un momento" : "entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
