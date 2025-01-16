import { useState, useEffect, useRef } from 'react';

const Select = (props) => {
  const { value = '', onChange, placeholder = 'Select', isSearchAble, options = [] } = props;
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full lg:max-w-[414px]" ref={dropdownRef}>
      <div
        className="w-full flex items-center h-[55px] px-2 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
        onClick={handleToggleDropdown}
        style={{
          backgroundSize: '15px 7.5px',
          background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
        }}
      >
        <span className='text-lg'>{value ? options?.find(opt => opt?.value === value)?.label : placeholder}</span>
      </div>

      {isDropdownOpen && (
        <div
          className="hideScrollBar absolute z-10 w-full bg-white border border-theme-main mt-0 max-h-60 overflow-y-auto shadow-lg"
          style={{
            maxHeight: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
          }}
        >
          {isSearchAble &&
            <div className="p-2 border-b border-theme-main">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="rounded block w-full px-4 py-2 border border-theme-main focus:outline-none"
              />
            </div>
          }

          {filteredOptions?.length === 0 ? (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          ) : (
            filteredOptions?.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-theme-main"
                onClick={() => handleOptionSelect({ target: { value: item?.value } })}
              >
                {item?.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Select;