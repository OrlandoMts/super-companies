import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as CompanyServer from '../../utils/CompanyServer';

const AddEmployee = ({setVisible}) => {

    const [options, setOptions] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)

    const listOptions =  async () => {
        try {
            const response = await CompanyServer.listCompanies();
            const data = await response.json();
            setOptions(data.companies);
        } catch (error) {
            console.log('FETCH ERROR: ', error)
        }
    }

    useEffect(()=>{
        listOptions()
    },[])
    // const onSubmit = async (company) => {
    //     try {
    //         let res;
    //         res = await CompanyServer.registerCompany(company);
    //         const data = await res.json();
    //         console.log(data);

    //         data.message === 'Success' && form.current.reset();
    //     } catch (error) {
    //         console.log('ERROR SUBMIT: ', error)
    //     }
    // };

    const form = useRef(null);

    const handleClose = () => {
        setVisible(false)
    }

    return (
        <section className="bg-white w-10/12 sm:w-9/12 h-auto p-3 flex flex-col content-center justify-items-center absolute top-10 drop-shadow-xl rounded-md">
            <h3 className='font-bold text-center'>Registrar empleado</h3>
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <div className='flex justify-evenly mt-10'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        maxLength="50"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 h-10 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            }
                        })}
                    />
                    {errors.name && <span className="text-red-600 font-semibold text-xs">{errors.name.message}</span>}
                </div>
                <div className='flex justify-evenly mt-4'>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input
                        type="text"
                        name="lastName"
                        maxLength="100"
                        id="lastName"
                        autoComplete=""
                        className="mt-1 h-10 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            }
                        })}
                    />
                    {errors.lastName && <span className="text-red-600 font-semibold text-xs">{errors.lastName.message}</span>}
                </div>
                <div className='flex justify-evenly mt-4'>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Edad</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        min={18}
                        max={70}
                        autoComplete=""
                        className="mt-1 h-10 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("age", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            }
                        })}
                    />
                    {errors.age && <span className="text-red-600 font-semibold text-xs">{errors.age.message}</span>}
                </div>
                <div className='flex justify-evenly mt-4'>
                    <label htmlFor="companyId_id" className="block text-sm font-medium text-gray-700">Empresa</label>
                    <select
                        defaultValue=""
                        name="companyId_id"
                        id="companyId_id"
                        className="mt-1 h-10 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("companyId_id", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            }
                        })}
                    >
                        <option value="" disabled>Elige una empresa ...</option>
                        {
                            options.map(ele => (
                                <option key={ele.id} value={ele.id}>{ele.name}</option>
                            ))
                        }
                    </select>
                    {errors.companyId_id && <span className="text-red-600 font-semibold text-xs">{errors.companyId_id.message}</span>}                
                </div>
                <div className='flex justify-end mt-10'>
                    <input type="submit" value="Registrar" className='cursor-pointer bg-blue-500 rounded-md text-white w-15 h-8 pl-2 pr-2'/>
                    <input type="button" value="Regresar" className='cursor-pointer bg-red-500 rounded-md text-white w-15 h-8 ml-5 pl-2 pr-2' onClick={handleClose}/>
                </div>
            </form>
        </section>
    )
}

export default AddEmployee