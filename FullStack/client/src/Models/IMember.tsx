
export default interface IMember {
  first_name: string,
  last_name: string, 
  id_number: number,
  email: string, 
  city?: string,
  street?: string,
  house_number?: string, 
  birth_date?: Date,
  phone_number?: string,
  mobile_number?: string,
  image?: string
}