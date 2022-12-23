const mongoose = require("mongoose")
const propertyschema = new mongoose.Schema({
    propertyType: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    propertyAge: {
        type: String,
        required:true
    },
    propertyDiscription: {
        type: String,
        required:true
    },
    negotiable: {
        type: String,
        required:true
    },
    ownership: {
        type: String,
        required:true
    },
    propertyApproved: {
        type: String,
        required:true
    },
    bankLoan: {
        type: String,
        required:true
    },
    length: {
        type: String,
        required:true
    },
    breadth: {
        type: String,
        required:true
    },
    totalArea: {
        type: String,
        required:true
    },
    areaUnit: {
        type: String,
        required:true
    },
    noOfBHK: {
        type: String,
        required:true
    },
    noOfFloor: {
        type: String,
        required:true
    },
    attached: {
        type: String,
        required:true
    },
    westernToilet: {
        type: String,
        required:true
    },
    furnished: {
        type: String,
        required:true
    },
    carParking: {
        type: String,
        required:true
    },
    lift: {
        type: String,
        required:true
    },
    electricity: {
        type: String,
       required:true
    },
    facing: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    },
    postedBy: {
        type: String,
        required:true
    },
    saleType: {
        type: String,
        required:true
    },
    featuredPackage: {
        type: String,
        required:true
    },
    PPDPackage: {
        type: String,
        require: [true, "Please Select PPD Package Type"]
    },
    email: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    area: {
        type: String,
        require: [true, "Please Select Area"]
    },
    pincode: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    landmark: {
        type: String,
        require: [true, "Please Add Landmark"]
    },
    latitude: {
        type: String,
        require: [true, "Please Add Latitude"]
    },
    longitude: {
        type: String,
        require: [true, "Please Add Longitude"]
    },
    views: String,
    Status: String,
    daysLeft: String
});

const PropertyDetailsModel = mongoose.model('PropertyDetailsModel', propertyschema);

module.exports = PropertyDetailsModel;
