const jobs = [
  {
    title: "Medical Laboratory Technician",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },
  
  {
    title: "ICT Officer",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },
  {
    title: "Nursing Officer",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },
  {
    title: "Radio Grapher",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },
  {
    title: "Accountant",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },

  {
    title: "Electrician",
    dept: "Clinics",
    position: "GUL-GCS-246",
    location: "Kapuna District Hospital",
    vacancies: 1,
    deadline: "August 15, 2025",
    description: `🧪 Medical Laboratory Technician – CHS Grade 11<br><strong>Location:</strong> Kapuna District Hospital<br>
    <strong>Salary:</strong> CHS 11<br><strong>Purpose:</strong> Manage and operate the hospital lab.<br><strong>Qualifications:</strong> Diploma/Certificate in Med Lab Studies, registered with PNG Medical Board.<br>
    <strong>Duties:</strong> Run diagnostics, maintain records, manage equipment, coordinate infection control, and work across clinical teams.`
  },
];

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

function showJob(index) {
  const modal = document.getElementById("jobModal");
  const content = document.getElementById("jobDetails");
  const job = jobs[index];
  content.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>Position Number:</strong> ${job.position}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Vacancies:</strong> ${job.vacancies}</p>
    <p><strong>Deadline:</strong> ${job.deadline}</p>
    <div>${job.description}</div>
  `;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}

window.onload = loadJobs;






function showJob(index) {
  const modal = document.getElementById("jobModal");
  const content = document.getElementById("jobDetails");
  const job = jobs[index];

  // Format mailto link
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
  `;
  modal.style.display = "block";
}

