// 1. Job listings data
const jobs = [
  {
    title: "Medical Laboratory Technician",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    pdf: "20220225122658 Med Lab Tech Gr 11.pdf", // ← ✅ PDF link to download JD
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
    </ul>
    `
  }
];

// 2. Function to load and display all jobs on page load
function loadJobs() {
  const container = document.getElementById("jobList");
  container.innerHTML = "";
  jobs.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.onclick = () => showJob(index);
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Department:</strong> ${job.dept}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Vacancies:</strong> ${job.vacancies} | <strong>Deadline:</strong> ${job.deadline}</p>
    `;
    container.appendChild(card);
  });
}

// 3. Function to filter job cards based on user input
function filterJobs() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(keyword) ||
    job.dept.toLowerCase().includes(keyword)
  );
  const container = document.getElementById("jobList");
  container.innerHTML = "";
  filtered.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.onclick = () => showJob(jobs.indexOf(job));
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Department:</strong> ${job.dept}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Vacancies:</strong> ${job.vacancies} | <strong>Deadline:</strong> ${job.deadline}</p>
    `;
    container.appendChild(card);
  });
}

// 4. Function to display selected job in modal
function showJob(index) {
  const modal = document.getElementById("jobModal");
  const content = document.getElementById("jobDetails");
  const job = jobs[index];

  const emailTo = "hr.kikorigcs@gmail.com,hr_kikorihospital@outlook.com";
  const subject = encodeURIComponent(`Application for ${job.title} – ${job.position}`);
  const mailtoLink = `mailto:${emailTo}?subject=${subject}`;

  content.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Position Number:</strong> ${job.position}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Vacancies:</strong> ${job.vacancies}</p>
    <p><strong>Deadline:</strong> ${job.deadline}</p>
    <div>${job.description}</div>
    <br>
    <a href="${mailtoLink}" class="apply-btn">📧 Apply via Email</a>
    <a href="${job.pdf}" class="download-btn" download>📄 Download Full JD</a>
  `;

  modal.style.display = "block";
}

// 5. Function to close job modal
function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}

// 6. Run loadJobs when the page loads
window.onload = loadJobs;
