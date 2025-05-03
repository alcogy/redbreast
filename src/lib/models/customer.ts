export interface Customer {
  id: string;
  name: string;
  address: string;
  tel: string;
  email: string;
  representative: string;
  industry: string;
}

export const sampleCustomers: Customer[] = [
  {
    id: '123456-123456',
    name: 'The company',
    address: '123 Street 6 Dublin',
    tel: '123-1234-123',
    email: 'mail@thecompany.ie',
    representative: 'John Smith',
    industry: 'Tech/IT',
  },
  {
    id: '123456-223451',
    name: 'Guinness corp.',
    address: '11 Street 7 Dublin',
    tel: '322-2334-754',
    email: 'info@guinness.com',
    representative: 'Bun Kilkenny',
    industry: 'Architecture',
  },
  {
    id: '123456-23423',
    name: 'Irish Tech',
    address: '1-1 Street 1 Cork',
    tel: '43-236-7123',
    email: 'email@irishtech.ie',
    representative: 'Salyu Edihn',
    industry: 'Food',
  },

]