import { getAllResumes } from "./../apis/admin.js";
import { fetchResume } from "./../apis/resume.js";

getAllResumes();
populateTable();

function populateTable() {
  const allResumeInfo = JSON.parse(localStorage.getItem('AllResumeInfo'));
  const tableBody = document.getElementById('resume-table');
  allResumeInfo.result.forEach(resume => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const viewCell = document.createElement('td');
    const deleteCell = document.createElement('td');
    const viewBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    nameCell.textContent = resume.person.fullName;
    dateCell.textContent = resume.person.creationTime.slice(0,10);
    viewBtn.textContent = 'View';
    deleteBtn.textContent = 'Delete';

    viewBtn.addEventListener('click', async () => {
      const resumeId = resume.id;
      const resumeInfo = await fetchResume(resumeId);
      localStorage.setItem('ResumeInfo', JSON.stringify(resumeInfo));
      window.location.href = './../CV_generated/index.html';
    });
    
    deleteBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete this row?")) {
    row.parentNode.removeChild(row);
  }
});
    
    viewCell.appendChild(viewBtn);
    deleteCell.appendChild(deleteBtn);
    row.appendChild(nameCell);
    row.appendChild(dateCell);
    row.appendChild(viewCell);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
  });
}
