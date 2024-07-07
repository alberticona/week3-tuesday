const Country = require("./Country");
const Degree = require("./Degree");
const Student = require("./Student");

Student.belongsTo(Degree) // Students -> degreeId
Degree.hasMany(Student)

Student.belongsTo(Country) // Students -> countryId
Country.hasMany(Student)