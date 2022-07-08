import { useForm } from "react-hook-form";
import {
  createUserThunk,
  selectProfessional,
} from "../../redux/professional/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { joiResolver } from "@hookform/resolvers/joi";
import firstDataSchema from "../../validators/firstDataValidator";
import Image from "next/image";

export default function FirstData() {
  const dispatch = useDispatch();
  const { user: {goTo}, queryError } = useSelector(selectProfessional);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      dni: "",
      names: "",
      surnames: "",
      birthdate: "",
    },
    resolver: joiResolver(firstDataSchema),
  });
  const onSubmit = async (data) => {
    dispatch(createUserThunk(data));
    push('')
  };
  useEffect(() => {
    push({
      pathname: goTo,
      query: queryError,
    });
  }, [goTo]);
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
                <h5 class="card-title">Cuentanos de ti</h5>
                <br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-4">
                    <label className="form-label">RUN o DNI</label>
                    <br></br>
                    <input
                      type="text"
                      className="form-control"
                      {...register("dni")}
                      placeholder="Ej: 123456789"
                    />
                    <small className="invalid">{errors.dni?.message}</small>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Nombres</label>
                    <br></br>
                    <input
                      type="text"
                      className="form-control"
                      {...register("names")}
                      placeholder="Ej: John"
                    />
                    <small className="invalid">{errors.names?.message}</small>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Apellidos</label>
                    <br></br>
                    <input
                      type="text"
                      className="form-control"
                      {...register("surnames")}
                      placeholder="Ej: Doe Knou"
                    />
                    <small className="invalid">
                      {errors.surnames?.message}
                    </small>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <br></br>
                    <input
                      type="Date"
                      className="form-control"
                      {...register("birthdate")}
                    />
                    <small className="invalid">
                      {errors.birthdate?.message}
                    </small>
                  </div>
                  <button className="btn btn-success">continuar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
