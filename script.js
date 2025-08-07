// 1. Job listings data
const jobs = [
  {
    title: "Medical Lab Technician",
    dept: "Clinics",
    position: "2102GUL055",
    location: "Kapuna Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    pdf: "20220225122658 Med Lab Tech Gr 11.pdf",
    description: `🧪 <strong>Medical Laboratory Technician – CHS Grade 11</strong><br>
    <strong>Salary:</strong> CHS 11<br>
    <strong>Purpose:</strong> Manage and operate the hospital lab.<br>
    <strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.<br><br>
    <strong>Submit the following documents:</strong><br>
    <ul>
      <li>Updated CV, Cover Letter with at least 3 referees</li>
      <li>Certified copies of qualifications</li>
      <li>Recent Police Clearance (within 6 months)</li>
      <li>Copy of National ID or any valid ID</li>
    </ul>`
  }
];

// 2. Load and display all jobs on page load
function loadJobs() {
  const container = document.getElementById("jobList");
  container.innerHTML = "";
  jobs.forEach((job, index) => {
    const card = document.createElement("button");
    card.className = "job-card";
    card.onclick = () => showJob(index);
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Department:</strong> ${job.dept}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Vacancies:</strong> ${job.vacancies} | <strong>Deadline:</strong> ${job.deadline}</p>
    `;
    container.appendChild(card);
  });
}

// 3. Filter job cards based on user input
function filterJobs() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(keyword) ||
    job.dept.toLowerCase().includes(keyword)
  );
  const container = document.getElementById("jobList");
  container.innerHTML = "";
  filtered.forEach((job) => {
    const card = document.createElement("button");
    card.className = "job-card";
    card.onclick = () => showJob(jobs.indexOf(job));
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Department:</strong> ${job.dept}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Vacancies:</strong> ${job.vacancies} | <strong>Deadline:</strong> ${job.deadline}</p>
    `;
    container.appendChild(card);
  });
}

// 4. Display selected job in modal
function showJob(index) {
  const modal = document.getElementById("jobModal");
  const content = document.getElementById("jobDetails");
  const job = jobs[index];

  const emailTo = "hr.kikorigcs@gmail.com,hr_kikorihospital@outlook.com";
  const subject = encodeURIComponent(`Application for ${job.title} – ${job.position}`);
  const mailtoLink = `mailto:${emailTo}?subject=${subject}`;

  content.innerHTML = `
    <h2 id="modalTitle">${job.title}</h2>
    <p><strong>Position Number:</strong> ${job.position}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Vacancies:</strong> ${job.vacancies}</p>
    <p><strong>Deadline:</strong> ${job.deadline}</p>
    <div id="modalDesc">${job.description}</div>
    <br>
       <a href="${job.pdf}" class="download-btn" download aria-label="Download Full Job Description PDF for ${job.title}">📄 Download Full JD</a>
    <a href="${mailtoLink}" class="apply-btn" aria-label="Apply via Email for ${job.title}">📧 Apply via Email</a>
 
  `;

  modal.style.display = "block";
  modal.focus();
}

// 5. Close job modal
function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}

// 6. Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById("jobModal");
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// 7. Initialize
window.onload = loadJobs;
