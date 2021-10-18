const JobTitle = require('../models/job-title');

module.exports = {
  getAll: async (req, res) => {
    const jobTitles = await JobTitle.find();

    res.render('job_titles/index', { jobTitles: jobTitles });
  },
  getCreate: (req, res) => {
    res.render('job_titles/create');
  },
  postCreate: async (req, res) => {
    try {
      req.body.code = req.body.name.replace(/ /g,"_").toLowerCase();
      await JobTitle.create(req.body);

      res.redirect('/job-titles');
    } catch (error) {
      res.render('job_titles/create', { error: error.message })
    }
  }
}
