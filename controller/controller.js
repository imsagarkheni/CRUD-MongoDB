const doctorData = require("../models/schema");

exports.doctorInsert = async (req, res) => {
  try {
    const docDetails = new doctorData({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      experience: req.body.experience,
      hospitalName: req.body.hospitalName,
      qualification: req.body.qualification,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
    });

    console.log("doctors detail:", docDetails);
    const savedoctorDetails = await docDetails.save();
    res.status(201).json({
      message: "data Registered",
      status: 201,
      data: savedoctorDetails,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log("error::", error);
    res.status(400).json({
      message: "data not insert",
      status: 400,
    });
  }
};

exports.docdetailID = async (req, res) => {
  try {
    var id = req.params.id;

    const data = await doctorData.find({ _id: id });
    console.log(data);
    res.status(200).json({
      message: "View By Id DetailsofDoc",
      status: 200,
      info: {
        id: data[0]._id,
        name: data[0].name,
        phone: data[0].phone,
        address: data[0].address,
        experience: data[0].experience,
        hospitalName: data[0].hospitalName,
        qualification: data[0].qualification,
        city: data[0].city,
        state: data[0].state,
        country: data[0].country,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went to Wrong",
      status: 400,
    });
  }
};

exports.docViewByname = async (req, res) => {
  try {
    const name = req.params.name;
    console.log("name:", name);
    const data = await doctorData.find({ name: name });
    console.log("data::", data);
    res.status(200).json({
      message: "View By name of Doctor",
      status: 200,
      info: {
        id: data[0]._id,
        name: data[0].name,
        phone: data[0].phone,
        address: data[0].address,
        experience: data[0].experience,
        hospitalName: data[0].hospitalName,
        qualification: data[0].qualification,
        city: data[0].city,
        state: data[0].state,
        country: data[0].country,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      status: 400,
    });
  }
};

exports.docdetailCity = async (req, res) => {
  try {
    const city = req.params.city;

    const data = await doctorData.find({ city: city });
    console.log(data);
    res.status(200).json({
      message: "View By City",
      status: 200,
      info: {
        id: data[0]._id,
        name: data[0].name,
        phone: data[0].phone,
        address: data[0].address,
        experience: data[0].experience,
        hospitalName: data[0].hospitalName,
        qualification: data[0].qualification,
        city: data[0].city,
        state: data[0].state,
        country: data[0].country,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went to Wrong",
      status: 400,
    });
  }
};

exports.docdetailAll = async (req, res) => {
  try {
    const data = await doctorData.find();
    res.send(data);
    res.status(200).json({
      message: "View By Id DetailsofDoc",
      status: 200,
      data: data,
    });
  } catch (e) {
    res.send(e);
    res.status(400).json({
      message: "Something Went to Wrong",
      status: 400,
    });
  }
};

//To update data-----------------------------------------------------------------
exports.docUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await doctorData
      .findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          $set: {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            experience: req.body.experience,
            hospitalName: req.body.hospitalName,
            qualification: req.body.qualification,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
          },
        }
      )
      .then(() => {
        res.status(200).json({
          message: "Update Data Successfully",
          status: 200,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "Update Data Not Successfully",
          status: 400,
        });
      });
  } catch (error) {
    res.status(400).json({
      message: "Somthing Went Wrong",
      status: 400,
    });
  }
};

exports.detailsDelete = async (req, res) => {
  try {
    var id = req.params.id;
    const data = await doctorData.find({ id: id });
    const del = doctorData.findByIdAndDelete(id);
    del.exec(function (err, data) {
      if (err) throw err;

      res.status(200).json({
        message: "Delete Details Data",
        status: 200,
        data: data,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Not Delete",
      status: 500,
    });
  }
};
