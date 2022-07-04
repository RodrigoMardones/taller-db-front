import { useForm } from "react-hook-form";

export async function getStaticProps() {
  const res = await fetch(`${process.env.FRONTEND_URL}/api/speciality/getAll`);
  const specialities = await res.json();
  return {
    props : {
      specialities : specialities
    }
  }
}

export default function FinalData({ specialities }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
        username: '',
        password: '',
        repeatPassword: '',
        speciality: null
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-4" style={{borderWidth: 10}}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-outline mb-4">
                <label className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" {...register('username')} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Especialidad </label>
                <select {...register('speciality')}>
                  {
                    specialities.map((speciality) => (<option value={speciality.id}>{speciality.name}</option>))
                  }
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">contraseña</label>
                <input type="password" className="form-control" {...register('password')} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Confirmar Contraseña</label>
                <input type="password" className="form-control" {...register('repeatPassword')}/>
              </div>
              <button className="btn btn-success" type="submit">crear cuenta</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}