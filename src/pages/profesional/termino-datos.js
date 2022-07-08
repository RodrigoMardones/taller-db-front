import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import {createProfesionalThunk, selectProfessional} from '../../redux/professional/reducer';
import { useEffect } from "react";

export default function FinalData({ specialities }) {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { goTo } = useSelector(selectProfessional);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
      speciality: "1",
    },
  });
  const onSubmit = async (data) => {
    dispatch(createProfesionalThunk(data));
  };
  useEffect(() => {
    push({
      query: goTo
    })
  }, [goTo])
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mx-auto m-4">
            <div className="card">
            <div className="text-center">
              <Image
                src="/new-logo.png"
                width={200}
                height={200}
                className="card-img-top m-4 p-4"
              />
            </div>
              <div className="card-body">
              <h5 class="card-title">Datos asociados a Profesional</h5>
              <br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-4">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("username")}
                      placeholder="Ej: myUser"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Especialidad </label>
                    <select {...register("speciality")} className="form-select">
                      {specialities.map((speciality) => (
                        <option value={Number(speciality.id)}>
                          {speciality.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                      placeholder="Ej: MyPassword"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      {...register("repeatPassword")}
                      placeholder="Ej: MyPassword"
                    />
                  </div>
                  <button className="btn btn-success" type="submit">
                    crear cuenta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(`${process.env.FRONTEND_URL}/api/speciality/getAll`);
  const specialities = await res.json();
  return {
    props: {
      specialities: specialities,
    },
  };
}