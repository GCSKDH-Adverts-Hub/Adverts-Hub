const jobs = [
  {
    positionNumber: "GCSKDH-001",
    title: "Community Health Worker (CHW)",
    location: "Kikori District Hospital",
    deadline: "August 5, 2025",
    qty: 5,
    description: `
      <p>Deliver basic health care and health education to community members in remote areas.</p>
    `,
    requirements: `
      <ul>
        <li>Certificate in Community Health or related field</li>
        <li>Basic knowledge of first aid, hygiene, and local health issues</li>
        <li>Good communication and interpersonal skills</li>
        <li>Willingness to travel to remote communities</li>
      </ul>
    `
  },
  {
    positionNumber: "GCSKDH-002",
    title: "IT Support Officer",
    location: "Kikori District Hospital",
    deadline: "August 10, 2025",
    qty: 2,
    description: `
      <p>Provide support for hospital systems including hardware, software, and network maintenance.</p>
    `,
    requirements: `
      <ul>
        <li>Diploma or Degree in Information Technology</li>
        <li>Experience in troubleshooting computer systems</li>
        <li>Knowledge of basic networking and security protocols</li>
        <li>Ability to document and manage IT assets</li>
      </ul>
    `
  },






  {
    positionNumber: "GCSKDH-006",
    title: "Nursing Officer",
    location: "Kikori District Hospital",
    deadline: "August 5, 2025",
    qty: 5,
    description: `
      <p>Deliver basic health care and health education to community members in remote areas.</p>
    `,
    requirements: `
      <ul>
        <li>Certificate in Community Health or related field</li>
        <li>Basic knowledge of first aid, hygiene, and local health issues</li>
        <li>Good communication and interpersonal skills</li>
        <li>Willingness to travel to remote communities</li>
      </ul>
    `
  },
  {
    positionNumber: "GCSKDH-002",
    title: "IT Support Officer",
    location: "Kikori District Hospital",
    deadline: "August 10, 2025",
    qty: 2,
    description: `
      <p>Provide support for hospital systems including hardware, software, and network maintenance.</p>
    `,
    requirements: `
      <ul>
        <li>Diploma or Degree in Information Technology</li>
        <li>Experience in troubleshooting computer systems</li>
        <li>Knowledge of basic networking and security protocols</li>
        <li>Ability to document and manage IT assets</li>
      </ul>
    `
  },
  {
    positionNumber: "GCSKDH-003",
    title: "Accountant",
    location: "Kikori District Hospital",
    deadline: "August 15, 2025",
    qty: 1,
    description: `
      <p>Responsible for financial records, budgeting, and reporting for the hospital.</p>
    `,
    requirements: `
      <ul>
        <li>Degree in Accounting or Finance</li>
        <li>At least 3 years experience in a similar role</li>
        <li>Knowledge of MYOB or other accounting software</li>
        <li>Strong attention to detail and reporting skills</li>
      </ul>
    `
  },
  {
    positionNumber: "GCSKDH-004",
    title: "Therapist (Physiotherapist or Occupational Therapist)",
    location: "Kikori District Hospital",
    deadline: "August 20, 2025",
    qty: 3,
    description: `
      <p>Assist patients in recovery and rehabilitation through therapeutic treatment plans.</p>
    `,
    requirements: `
      <ul>
        <li>Bachelor's Degree in Physiotherapy or Occupational Therapy</li>
        <li>Valid practicing license</li>
        <li>Empathetic, patient-focused approach</li>
        <li>Experience in rural or clinical settings preferred</li>
      </ul>
    `
  },
  {
    positionNumber: "GCSKDH-005",
    title: "Dentist",
    location: "Kikori District Hospital",
    deadline: "August 25, 2025",
    qty: 1,
    description: `
      <p>Provide dental care, treatment, and oral health education to patients at the facility.</p>
    `,
    requirements: `
      <ul>
        <li>Degree in Dental Surgery</li>
        <li>Licensed and registered to practice in PNG</li>
        <li>Skilled in basic and emergency dental procedures</li>
        <li>Good communication skills and hygiene practices</li>
      </ul>
    `
  }
];


const jobList = document.getElementById('job-list');
if (jobList) {
  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Position Number:</strong> ${job.positionNumber}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Number of Vacancies:</strong> ${job.qty}</p>
      <p><strong>Deadline:</strong> ${job.deadline}</p>
      <h4>Description</h4>
      ${job.description}
      <h4>Requirements</h4>
      ${job.requirements}
      <h4>Submit the Following Documents:</h4>
      <ul>
        <li>Cover Letter</li>
        <li>Updated CV/Resume</li>
        <li>Certified Copies of Qualifications</li>
        <li>At least two References</li>
        <li>Police Clearance (if applicable)</li>
      </ul>
      <p><em>Only shortlisted applicants will be contacted for an interview.</em></p>
    
     <a href="mailto:hr.kikorigcs@gmail.com,hr_kikorihospital@outlook.com?subject=Job Application - ${encodeURIComponent(job.title)}" class="apply-btn">Apply via Email</a>

    `;
    jobList.appendChild(jobCard);
  });
}
