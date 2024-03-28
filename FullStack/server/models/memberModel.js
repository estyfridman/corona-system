import mongoose from 'mongoose';

const memberSchema = mongoose.Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    id_number: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    city: {type: String, },
    street: {type: String, },
    house_number: {type: String }, // string to allow cases like B4  
    birth_date: {type: Date},
    phone_number: {type: String},
    mobile_number: {type: String},
    image: { type: String, default: "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg" },
},
{
  timestamps: true,
}
);

const Member = mongoose.model('Member', memberSchema);

export default Member;