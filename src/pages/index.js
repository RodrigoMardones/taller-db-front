import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  loginProfessionalThunk,
  selectLogin
} from "../redux/login/reducer";
import { joiResolver } from '@hookform/resolvers/joi';
import loginValidatorSchema from "../validators/loginValidator";

const AlertMessage = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <span>{message}</span>
    </div>
  );
};


export default function Home() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { token, loaded, loading } = useSelector(selectLogin);
  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver : joiResolver(loginValidatorSchema)
  });
  
  
  const onSubmit = async (data) => {
    dispatch(loginProfessionalThunk(data));
  };
  
  const handleCreateProfessional = () => {
    push('/profesional/primeros-datos');
  }
  useEffect(() => {
    (() => {
      if (token) push({ pathname: "/profesional/panel" });
    })();
  }, [token]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto mt-4">
            <div className="card">
              <div className="text-center">
                <Image
                  src="/new-logo.png"
                  width={350}
                  height={350}
                  className="card-img-top m-4 p-4"
                />
              </div>
              <div className="card-body">
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" forhtml="form2Example1">
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ej: usuario123"
                      {...register("username")}
                    />
                    <small className="invalid">{errors.username?.message}</small>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" forhtml="form2Example2">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="tu contraseña"
                      {...register("password")}
                    />
                  <small className="invalid">{errors.password?.message}</small>
                  </div>
                  {loaded && (
                    <AlertMessage message={"usuario o contraseña incorrecta"} />
                  )}
                </form>
                <button
                    onClick={handleSubmit(onSubmit)}
                    className="btn btn-success btn-block m-1"
                  >
                    {loading ? "cargando" : "entrar"}
                  </button>
                  <button className="btn btn-primary m-1" onClick={handleCreateProfessional}>crear usuario</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
