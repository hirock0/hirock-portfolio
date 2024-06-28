import mongoose from "mongoose";
import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";

ConnectionToDB();

const ProjectsSchema = new mongoose.Schema({
  nanoId: {
    type: String,
    required: false,
  },
  projectName: {
    type: String,
    required: false,
  },
  projectImage: {
    type: String,
    required: false,
  },
  projectLink: {
    type: String,
    required: false,
  },
  projectTitle: {
    type: String,
    required: false,
  },
  recentDate: {
    type: String,
    required: false,
  },
  dateFeild: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export const ProjectSchemaData =
  mongoose.models.my_projects || mongoose.model("my_projects", ProjectsSchema);

const SignupData = new mongoose.Schema({
  nanoId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  emailOrnumber: {
    type: String,
    required: [false, "fill the data"],
  },
  password: {
    type: String,
    required: [false, "fill the data"],
  },

  address: {
    type: String,
    required: [false, "fill the data"],
  },
  image: {
    type: String,
    required: [false, "fill the data"],
  },
  recentDate: {
    type: String,
    required: [false, "fill the data"],
  },
  // My_Profile_start
  contact: {
    type: String,
    required: [false, "fill the data"],
  },
  district: {
    type: String,
    required: [false, "fill the data"],
  },
  // My_Profile_end

  // Additiona_data_start
  gender: {
    type: String,
    required: [false, "fill the data"],
  },
  martial_staus: {
    type: String,
    required: [false, "fill the data"],
  },
  self_independent: {
    type: String,
    required: [false, "fill the data"],
  },
  belongs_to: {
    type: String,
    required: [false, "fill the data"],
  },
  nationality: {
    type: String,
    required: [false, "fill the data"],
  },
  hobbies: {
    type: String,
    required: [false, "fill the data"],
  },

  // Aditioan_data_end

  // Address_start
  village_city: {
    type: String,
    required: [false, "fill the data"],
  },
  home_town: {
    type: String,
    required: [false, "fill the data"],
  },
  county: {
    type: String,
    required: [false, "fill the data"],
  },
  post_code: {
    type: String,
    required: [false, "fill the data"],
  },

  // Address_end

  // education_start
  degree: {
    type: String,
    required: [false, "fill the data"],
  },
  institution: {
    type: String,
    required: [false, "fill the data"],
  },
  educational_duration: {
    type: String,
    required: [false, "fill the data"],
  },
  skills: {
    type: String,
    required: [false, "fill the data"],
  },
  experience: {
    type: String,
    required: [false, "fill the data"],
  },
  languages: {
    type: String,
    required: [false, "fill the data"],
  },
  testimonials: {
    type: String,
    required: [false, "fill the data"],
  },

  // education_end

  // important_links_start
  github: {
    type: String,
    required: [false, "fill the data"],
  },
  linkedin: {
    type: String,
    required: [false, "fill the data"],
  },
  facebook: {
    type: String,
    required: [false, "fill the data"],
  },
  whatsapp: {
    type: String,
    required: [false, "fill the data"],
  },

  // important_Links_end

  dateField: {
    type: Date,
    default: Date.now,
    required: [false, "fill the data"],
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
});

export const SignUpSchema =
  mongoose.models.signup_users || mongoose.model("signup_users", SignupData);


  // --------------------------------------------------------------------------------------------


  const GeneralandMejorProjects = new mongoose.Schema({
    nanoId: {
      type: String,
      required: false,
    },
    projectName: {
      type: String,
      required: false,
    },
    projectType:{
      type: String,
      required: false,
    },
    projectImage: {
      type: String,
      required: false,
    },
    projectLink: {
      type: String,
      required: false,
    },
    projectTitle: {
      type: String,
      required: false,
    },
    recentDate: {
      type: String,
      required: false,
    },
    project_descriptions:{
      type: String,
      required: false,
    },
    dateFeild: {
      type: Date,
      default: Date.now,
      required: false,
    },
  });

  export const GeneralAndMejorProjectsSchema =
  mongoose.models.general_and_mejor_projects  || mongoose.model("general_and_mejor_projects", GeneralandMejorProjects);
  