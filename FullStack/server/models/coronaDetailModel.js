import mongoose from 'mongoose';


const coronaDetailSchema = mongoose.Schema(
    {
        id_number: {type: String, required: true, unique: true},
        vaccinations: [
            {
              date_of_vaccination: { type: Date },
              manufacturer: { type: String}
            }],
        positive_corona: {type: Date},
        date_of_recovery: {type: Date},
    },
    {
      timestamps: true,
    }
    );
    
const CoronaDetail = mongoose.model('CoronaDetail', coronaDetailSchema);
    
export default CoronaDetail;