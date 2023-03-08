import { getAllResumes } from "../apis/admin.js";

let allResumeInfo = JSON.parse(localStorage.getItem('AllResumeInfo'))

getAllResumes(allResumeInfo)

console.log(allResumeInfo);