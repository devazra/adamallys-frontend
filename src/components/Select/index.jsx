import { useState, useEffect, useRef } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Select = (props) => {
  const { onClear, name = "", value = '', onChange, placeholder = 'Select', isSearchAble, options = [] } = props;
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const filteredOptions = options?.filter((item) =>
    item?.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOptionSelect = (e) => {
    onChange(e);
    setSearch('');
    setIsDropdownOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleClear = () => {
    onClear({ target: { name, value: "" } })
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full lg:max-w-[414px]" ref={dropdownRef}>
      <div
        className="w-full flex items-center h-[55px] px-6 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
        onClick={handleToggleDropdown}
        style={{
          backgroundSize: '15px 7.5px',
          background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
        }}
      >
        <p className='text-lg flex-1'>{value ? options?.find(opt => opt?.value === value)?.label : placeholder}</p>
        {value &&
          <MdOutlineCancel className='mr-2 cursor-pointer'
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
          />
        }
      </div>

      {isDropdownOpen && (
        <div
          className="absolute z-10 w-full bg-white border border-theme-main mt-0 shadow-lg"
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
          }}
        >
          {isSearchAble &&
            <div className="p-2 border-b border-theme-main">
              <input
                name={name}
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="text-theme-main rounded block w-full px-6 py-2 border border-theme-main focus:outline-none"
              />
            </div>
          }
          <div className="customScrollbar max-h-[320px] overflow-y-auto">
            {filteredOptions?.length === 0 ? (
              <div className="px-6 py-2 text-gray-500">No results found</div>
            ) : (
              filteredOptions
                ?.sort((a, b) => a.label.localeCompare(b.label))  // Sort options alphabetically by label
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-theme-main"
                    onClick={() => handleOptionSelect({ target: { name, value: item?.value } })}
                  >
                    {item?.label}
                  </div>
                ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;