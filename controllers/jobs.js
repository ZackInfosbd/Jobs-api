const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

const getJob = async (req, res) => {
  res.send('get job');
};

const createJob = async (req, res) => {
  res.send(req.user);
};

const updateJob = async (req, res) => {
  res.send('create job');
};

const deleteJob = async (req, res) => {
  res.send('delet job');
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
