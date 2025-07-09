export interface KResource {
  country_code: string;
  id: number;
  name: string;
  resource_type: string;
  status: "active" | "inactive";
  tags: string[];
  owner: {
    display_name: string;
  };
}
