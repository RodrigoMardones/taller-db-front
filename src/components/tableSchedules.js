export default function TableSchedule({ schedules }) {
  return (
    <div className="container justify-content-center">
      <table className="table">
        <thead className="table-light">
            <tr>
                <th scope="col">id</th>
                <th scope="col">descripcion</th>
                <th scope="col">fecha de la cita</th>
                <th scope="col">hora inicio</th>
                <th scope="col">hora término</th>
            </tr>
        </thead>
        <tbody>
            { schedules.map((schedule) => {
                return(
                    <tr>
                        <th scope="row">{schedule.id}</th>
                        <th scope="row"> {schedule.BLOCK.description}</th>
                        <th scope="row"> {schedule.currentDate}</th>
                        <th scope="row"> {schedule.BLOCK.startTime}</th>
                        <th scope="row"> {schedule.BLOCK.finishTime}</th>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}
