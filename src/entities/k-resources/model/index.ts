export type KResource = {
  country_code: string;
  resource_id: number;
  resource_name: string;
  type: 'Artist' | 'Group' | 'Band' | 'Solo';
  status: 'Active' | 'Inactive';
  tags: string[];
  partner: string;
};
