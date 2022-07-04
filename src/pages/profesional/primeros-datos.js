import { useForm } from 'react-hook-form';
import { createUser, selectProfessional  } from '../../redux/professional/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FirstData() {
    const dispatch = useDispatch();
    const {goTo, queryError } = useSelector(selectProfessional);
    const { push } = useRouter();
    const { register, handleSubmit } = useForm({
        defaultValues : {
            dni : '',
            names: '',
            surnames: '',
            birthdate: ''
        }
    })
    const onSubmit = async (data) => {
        dispatch(createUser(data));
    };
    useEffect(() => {
        push({
            pathname : goTo,
            query : queryError
        });
    }, [goTo]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-4 mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline mb-4">
                                <label className="form-label">
                                    RUN o DNI
                                </label>
                                <br></br>
                                <input type="text"
                                className='form-control' 
                                {...register('dni')}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">
                                    Nombres
                                </label>
                                <br></br>
                                <input type="text"
                                className='form-control' 
                                {...register('names')}
                                
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">
                                    Apellidos
                                </label>
                                <br></br>
                                <input type="text"
                                className='form-control' 
                                {...register('surnames')}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">
                                    Fecha de Nacimiento
                                </label>
                                <br></br>
                                <input type="Date"
                                className='form-control'
                                {...register('birthdate')}
                                />
                            </div>
                            <button className="btn btn-success">continuar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}