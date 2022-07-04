import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-4 mt-4">
          <div className="text-center">
              <Image 
              src="/logo.png" 
              width={350} 
              height={350} />
            </div>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
                <label className="form-label" forhtml="form2Example1">
                  Usuario
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
                <label className="form-label" forhtml="form2Example2">
                  Contraseña
                </label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label className="form-check-label" forhtml="form2Example31">
                      {" "}
                      recuerdame{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">olvidaste tu contraseña?</a>
                </div>
              </div>

              <button type="button" className="btn btn-primary btn-block mb-4">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
