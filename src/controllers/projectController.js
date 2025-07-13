const Project = require("../models/projectModel");

exports.createProject = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    console.log("req.file: ", req.file);

    const { title, description, githubProjectLink, previewProjectLink, slug, tech } =
      req.body;

    const image = req.file ? req.file.path : null;

    const newProject = new Project({
      title,
      description,
      image,
      githubProjectLink,
      previewProjectLink,
      slug,
      tech,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(400).json({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "project deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjectsByTech = async (req, res) => {
  try {
    const projects = await Project.find({ tech: req.params.tech });

    if (!projects.length) {
      return res.status(404).json({ error: "No projects found for this tech" });
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.find({ slug: req.params.slug })
    if(!project) {
      return res.status(404).json({ error: "Error while fetching project" })
    }

    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});

    if (!projects.length) {
      return res.status(404).json({ error: "No projects found" });
    }
    
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.createProject = async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(201).json(project);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
