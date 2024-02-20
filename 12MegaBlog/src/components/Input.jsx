import React, {useId} from 'react'

//input is wrap up in forwardRef
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "", //default empty
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            //har bar ek unique id generate hogi
            htmlFor={id}>  
                {label}
            </label>
            }
            <input
            type={type}
            //``-> It is a JS syntax therefore it is in the {} javascript
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} //yahi chij aapko reference degi apne parent component ke andar that's is why we used forwardRef
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input