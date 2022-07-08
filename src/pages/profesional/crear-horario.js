import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectLogin } from "../../redux/login/reducer";
import { useRouter } from "next/router";
import { joiResolver } from "@hookform/resolvers/joi";
import createScheduleSchema from "../../validators/createScheduleValidator";
import Image from "next/image";

export async function getStaticProps() {
  const res = await fetch(`${process.env.BACKEND_URL}/block`);
  const blocks = await res.json();
  return {
    props: {
      blocks: blocks,
    },
  };
}

export default function CrearHorario({ blocks }) {
  const { token, id_professional } = useSelector(selectLogin);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      currentDate: "",
      id_block: "1",
    },
    resolver: joiResolver(createScheduleSchema),
  });
  const onSubmit = async (data) => {
    const payload = {
      ...data,
      id_block: Number(data.id_block),
      id_professional: Number(id_professional),
    };
    const res = await fetch(`${process.env.BACKEND_URL}/schedule/create`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    push("/profesional/panel");
  };
  const onExit = async () => {
    push("/profesional/panel");
  };
  if (!token) {
    push("/");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 mx-auto mt-4 justify-content-center">
          <div className="card">
            <div className="text-center">
              <Image
                src="/logo.png"
                width={350}
                height={350}
                className="card-img-top m-4 p-4"
              />
            </div>
            <div className="card-body">
              <h5 class="card-title">Agregar horario - simple</h5>
              <br></br>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label">día de atención</label>
                  <input
                    className="form-control"
                    type="date"
                    {...register("currentDate")}
                  />
                  <small className="invalid">
                    {errors.currentDate?.message}
                  </small>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">bloque horario</label>
                  <select className="form-select" {...register("id_block")}>
                    {blocks.map((block) => {
                      return (
                        <option
                          value={block.id}
                        >{`${block.description} - ${block.startTime} / ${block.finishTime}`}</option>
                      );
                    })}
                  </select>
                  <small className="invalid">{errors.id_block?.message}</small>
                </div>
                <button
                  className="btn btn-success m-1"
                  onClick={handleSubmit(onSubmit)}
                >
                  {" "}
                  crear{" "}
                </button>
                <button className="btn btn-primary m-1" onClick={onExit}>
                  {" "}
                  atrás{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
