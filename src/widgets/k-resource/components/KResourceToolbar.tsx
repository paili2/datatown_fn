import Input from '@/shared/ui/input/Input';
import BaseButton from '@/shared/ui/button/BaseButton';
import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import { useSearch } from '../hooks/useSearch';
import { PlusIcon } from 'lucide-react';

const styles = {
  container: 'flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6',
  subtitle: 'px-5 mb-4 sm:px-6',
  buttonGroup: 'flex gap-2',
};

const KResourceToolbar = () => {
  return (
    <div>
      <Subtitle className={styles.subtitle}>K-Resource Management</Subtitle>
      <div className={styles.container}>
        <Input searchPlaceholder="search" {...useSearch()} />
        <div className={styles.buttonGroup}>
          <BaseButton startIcon={<PlusIcon />} variant="primary" color="default" size="md" children="Register New" />
        </div>
      </div>
    </div>
  );
};

export default KResourceToolbar;
