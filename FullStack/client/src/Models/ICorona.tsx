
type vaccinationType = {
    date_of_vaccination: Date;
    manufacturer: string;
  };
  
export default interface ICorona {
    id_number: number,
    vaccinations: vaccinationType[],
    positive_corona?: Date,
    date_of_recovery?: Date
}