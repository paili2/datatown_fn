import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import Input from '@/shared/ui/input/Input';

const AdminListToolbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // onSearch?.(value);
  };

  return (
    <div>
      {/* 제목 */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 px-5 mb-4 sm:px-6">관리자 목록</h3>
      <div className={`flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 `}>
        {/* 검색창 */}
        {showSearch && <Input searchPlaceholder="검색" searchTerm={searchTerm} handleSearchChange={handleSearchChange} />}

        {/* <div className="flex gap-2">
          {buttons &&
            buttons.length > 0 &&
            buttons.map((button, index) => (
              <Button key={index} variant={button.variant || 'primary'} size="sm" onClick={button.handler} className={index > 0 ? 'ml-2' : ''}>
                {button.text}
              </Button>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default AdminListToolbar;
