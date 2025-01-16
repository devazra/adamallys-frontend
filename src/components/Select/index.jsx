import React from 'react'

const Select = (props) => {
    const { value, onChange, placeholder = 'Select', options = [] } = props;
    return (
        <select
            value={value}
            onChange={onChange}
            className="w-full lg:max-w-[414px] h-[55px] px-2 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
            style={{
                background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                backgroundSize: '15px 7.5px',
            }}
        >
            <option value="" disabled selected>
                {placeholder}
            </option>
            {options?.map((item, idx) => (
                <option
                    key={idx}
                    value={item?.value}
                >
                    {item?.label}
                </option>
            ))}
        </select>
    )
}

export default Select