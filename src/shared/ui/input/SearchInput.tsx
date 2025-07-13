import { SearchIcon } from 'lucide-react';

interface SearchInputProps {
  searchPlaceholder: string;
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchPlaceholder, searchTerm, handleSearchChange }: SearchInputProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={handleSearchChange}
          className="
            h-[42px]                // 입력창 높이
            w-full                  // 전체 너비
            xl:w-[300px]            // xl 이상에서 너비 300px
            rounded-full            // 완전한 둥근 테두리
            border                  // 테두리 표시
            border-gray-300       // 밝은 회색 테두리
            bg-transparent          // 배경 투명
            py-2.5                  // 위아래 패딩
            pl-[42px]               // 왼쪽 패딩(아이콘 공간)
            pr-4                    // 오른쪽 패딩
            text-sm                 // 작은 글씨
            text-gray-800         // 진한 회색 글씨
            shadow-theme-xs         // 작은 그림자
            placeholder:text-gray-400 // 플레이스홀더 글씨 연한 회색
          "
        />
      </div>
    </form>
  );
};
export default SearchInput;
