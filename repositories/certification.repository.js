const Certification = require("../models/certification.model");

exports.getCertificate = async (n_id) => {
  try {
    const certificate = await Certification.find({
      n_id: n_id,
    });
    console.log(certificate[0]);
    return certificate[0];
  } catch (error) {
    console.error("Error fetching certificate details:", error);
    throw error;
  }
};

exports.createCertificate = async (name, n_id, vaccinations) => {
  try {
    const certificate = new Certification({
      name,
      n_id,
      vaccinations,
    });

    const savedCertificate = await certificate.save();
    return savedCertificate;
  } catch (error) {
    console.error("Error creating certificate:", error);
    throw error;
  }
};