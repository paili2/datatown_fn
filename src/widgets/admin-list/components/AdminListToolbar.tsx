import Input from '@/shared/ui/input/Input';
import BaseButton from '@/shared/ui/button/BaseButton';
import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import { useAdminListSearch } from '@/widgets/list-view/hooks/useAdminListSearch';

const styles = {
  container: 'flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6',
  subtitle: 'px-5 mb-4 sm:px-6',
  buttonGroup: 'flex gap-2',
};

const AdminListToolbar = () => {
  return (
    <div>
      <Subtitle className={styles.subtitle}>관리자 목록</Subtitle>
      <div className={styles.container}>
        <Input searchPlaceholder="관리자 검색" {...useAdminListSearch()} />
        <div className={styles.buttonGroup}>
          <BaseButton variant="secondary" color="default" children="delete" />
          <BaseButton variant="primary" color="default" children="add" />
        </div>
      </div>
    </div>
  );
};

export default AdminListToolbar;
