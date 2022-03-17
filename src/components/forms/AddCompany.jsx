import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as CompanyServer from '../../utils/CompanyServer';

const AddCompany = ({setVisible}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (company) => {
        try {
            let res;
            res = await CompanyServer.registerCompany(company);
            const data = await res.json();
            console.log(data);

            data.message === 'Success' && form.current.reset();
        } catch (error) {
            console.log('ERROR SUBMIT: ', error)
        }
    };

    const form = useRef(null);

    const handleClose = () => {
        setVisible(false)
    }

    return (
        <section className="bg-white w-10/12 sm:w-9/12 h-auto p-3 flex flex-col content-center justify-items-center absolute top-10 drop-shadow-xl rounded-md">
            <h3 className='font-bold text-center'>Agregar empresa</h3>
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <div className='flex justify-evenly mt-10'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        maxLength="50"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
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
                    <label htmlFor="webSite" className="block text-sm font-medium text-gray-700">Sitio web</label>
                    <input
                        type="url"
                        name="webSite"
                        maxLength="100"
                        id="webSite"
                        autoComplete=""
                        className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("webSite", {
                            required: {
                                value: false,
                                message: "Campo requerido"
                            }
                        })}
                    />
                    {errors.webSite && <span className="text-red-600 font-semibold text-xs">{errors.webSite.message}</span>}
                </div>
                <div className='flex justify-evenly mt-4'>
                    <label htmlFor="foundation" className="block text-sm font-medium text-gray-700">Fundación</label>
                    <input
                        type="number"
                        name="foundation"
                        id="foundation"
                        autoComplete=""
                        className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("foundation", {
                            required: {
                                value: true,
                                message: "Campo requerido"
                            }
                        })}
                    />
                    {errors.foundation && <span className="text-red-600 font-semibold text-xs">{errors.foundation.message}</span>}
                </div>
                <div className='flex justify-end mt-10'>
                    <input type="submit" value="Registrar" className='cursor-pointer bg-blue-500 rounded-md text-white w-15 h-8 pl-2 pr-2'/>
                    <input type="button" value="Regresar" className='cursor-pointer bg-red-500 rounded-md text-white w-15 h-8 ml-5 pl-2 pr-2' onClick={handleClose}/>
                </div>
            </form>
        </section>
    )
}

export default AddCompany