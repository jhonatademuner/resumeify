import React from 'react'

interface FormDividerProps {
    title: string;
}

const FormDivider = ({ title }: FormDividerProps) => {
    return (
        <div className="flex justify-center items-center w-full ">
            <div className="w-full bg-form-fields h-0.5 opacity-70"></div>
            <h3 className="text-form-fields text-xl font-bold py-1 px-2 opacity-80">
                {title}
            </h3>
            <div className="w-full bg-form-fields h-0.5 opacity-70"></div>
        </div>
    )
}

export default FormDivider