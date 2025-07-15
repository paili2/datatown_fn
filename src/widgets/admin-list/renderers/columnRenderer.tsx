import React from 'react';
import { TableCell } from '@/shared/ui/table';
import { adminColumns } from '../config/columns';
import { AdminUser } from '@/entities/admins/model';

type TableCellVariant = 'header' | 'body';

interface RenderCellsProps {
  variant: TableCellVariant;
  user?: AdminUser;
  cellClass?: string;
}

export const renderCells = ({ variant, user, cellClass = '' }: RenderCellsProps) => {
  return adminColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {variant === 'header' ? col.header : user && col.render(user)}
    </TableCell>
  ));
};
