import Input from '@/shared/ui/input/Input';
import BaseButton from '@/shared/ui/button/BaseButton';
import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import { useAdminListSearch } from '@/widgets/list-view/hooks/useAdminListSearch';

const AdminListToolbar = () => {
  return (
    <div>
      <Subtitle className="px-5 mb-4 sm:px-6">관리자 목록</Subtitle>
      <div className={`flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 `}>
        <Input searchPlaceholder="관리자 검색" {...useAdminListSearch()} />
        <div className="flex gap-2">
          <BaseButton variant="secondary" color="default" children="delete" />
          <BaseButton variant="primary" color="default" children="add" />
        </div>
      </div>
    </div>
  );
};

export default AdminListToolbar;
