import { SearchIcon } from 'lucide-react';

const Input = ({ searchPlaceholder, searchTerm, handleSearchChange }: { searchPlaceholder: string; searchTerm: string; handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="dark:bg-dark-900 h-[42px] w-full rounded-full border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
        />
      </div>
    </form>
  );
};

export default Input;
