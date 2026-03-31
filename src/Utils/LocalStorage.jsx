const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumber: { active: 2, newTask: 2, completed: 2, failed: 2 },
    tasks: [
      { title: "Fix login bug", description: "Resolve issue", date: "2026-03-28", category: "Dev", active: true, newTask: false, completed: false, failed: false },
      { title: "Update UI", description: "Improve design", date: "2026-03-27", category: "Design", active: false, newTask: false, completed: true, failed: false },
      { title: "Write tests", description: "Unit testing", date: "2026-03-26", category: "Testing", active: false, newTask: true, completed: false, failed: false },
      { title: "Fix API", description: "Handle errors", date: "2026-03-25", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { title: "Refactor code", description: "Clean code", date: "2026-03-24", category: "Dev", active: true, newTask: false, completed: false, failed: false },
      { title: "Design icons", description: "UI icons", date: "2026-03-23", category: "Design", active: false, newTask: false, completed: true, failed: false },
      { title: "Setup CI", description: "Pipeline setup", date: "2026-03-22", category: "DevOps", active: false, newTask: true, completed: false, failed: false },
      { title: "Fix crash", description: "App crash fix", date: "2026-03-21", category: "Debug", active: false, newTask: false, completed: false, failed: true }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: { active: 3, newTask: 1, completed: 2, failed: 2 },
    tasks: [
      { title: "Create API", description: "REST API", date: "2026-03-28", category: "Backend", active: true, newTask: false, completed: false, failed: false },
      { title: "Fix CSS", description: "Responsive", date: "2026-03-27", category: "Frontend", active: true, newTask: false, completed: false, failed: false },
      { title: "Debug error", description: "Console fix", date: "2026-03-26", category: "Debug", active: false, newTask: false, completed: true, failed: false },
      { title: "Optimize API", description: "Speed up", date: "2026-03-25", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { title: "Add feature", description: "New feature", date: "2026-03-24", category: "Dev", active: true, newTask: false, completed: false, failed: false },
      { title: "Fix layout", description: "UI fix", date: "2026-03-23", category: "Frontend", active: false, newTask: true, completed: false, failed: false },
      { title: "Write docs", description: "Documentation", date: "2026-03-22", category: "Docs", active: false, newTask: false, completed: true, failed: false },
      { title: "Crash issue", description: "Fix crash", date: "2026-03-21", category: "Debug", active: false, newTask: false, completed: false, failed: true }
    ]
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 2, completed: 3, failed: 2 },
    tasks: [
      { title: "DB schema", description: "Design DB", date: "2026-03-28", category: "DB", active: false, newTask: true, completed: false, failed: false },
      { title: "Optimize DB", description: "Performance", date: "2026-03-27", category: "DB", active: false, newTask: false, completed: true, failed: false },
      { title: "Fix crash", description: "Null fix", date: "2026-03-26", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { title: "Add indexes", description: "Indexing", date: "2026-03-25", category: "DB", active: true, newTask: false, completed: false, failed: false },
      { title: "Backup DB", description: "Backup", date: "2026-03-24", category: "DB", active: false, newTask: false, completed: true, failed: false },
      { title: "Migration", description: "Migrate data", date: "2026-03-23", category: "DB", active: false, newTask: true, completed: false, failed: false },
      { title: "Fix query", description: "Slow query", date: "2026-03-22", category: "DB", active: false, newTask: false, completed: true, failed: false },
      { title: "DB crash", description: "Fix issue", date: "2026-03-21", category: "DB", active: false, newTask: false, completed: false, failed: true }
    ]
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskNumber: { active: 2, newTask: 1, completed: 1, failed: 4 },
    tasks: [
      { title: "Landing page", description: "UI design", date: "2026-03-28", category: "UI", active: true, newTask: false, completed: false, failed: false },
      { title: "Fix navbar", description: "Align menu", date: "2026-03-27", category: "Frontend", active: false, newTask: false, completed: false, failed: true },
      { title: "Animation bug", description: "Fix animation", date: "2026-03-26", category: "Frontend", active: false, newTask: false, completed: false, failed: true },
      { title: "Add footer", description: "Footer UI", date: "2026-03-25", category: "UI", active: true, newTask: false, completed: false, failed: false },
      { title: "Fix grid", description: "Layout", date: "2026-03-24", category: "Frontend", active: false, newTask: true, completed: false, failed: false },
      { title: "UI bug", description: "Fix UI", date: "2026-03-23", category: "UI", active: false, newTask: false, completed: true, failed: false },
      { title: "Crash UI", description: "Fix crash", date: "2026-03-22", category: "Frontend", active: false, newTask: false, completed: false, failed: true },
      { title: "CSS bug", description: "Fix CSS", date: "2026-03-21", category: "Frontend", active: false, newTask: false, completed: false, failed: true }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumber: { active: 1, newTask: 3, completed: 2, failed: 2 },
    tasks: [
      { title: "Deploy app", description: "Deploy", date: "2026-03-28", category: "DevOps", active: false, newTask: true, completed: false, failed: false },
      { title: "Fix build", description: "Build issue", date: "2026-03-27", category: "DevOps", active: false, newTask: true, completed: false, failed: false },
      { title: "Server crash", description: "Fix crash", date: "2026-03-26", category: "Backend", active: false, newTask: false, completed: true, failed: false },
      { title: "CI/CD setup", description: "Pipeline", date: "2026-03-25", category: "DevOps", active: true, newTask: false, completed: false, failed: false },
      { title: "Logs system", description: "Logging", date: "2026-03-24", category: "Backend", active: false, newTask: false, completed: true, failed: false },
      { title: "Monitor server", description: "Monitoring", date: "2026-03-23", category: "DevOps", active: false, newTask: true, completed: false, failed: false },
      { title: "Fix downtime", description: "Server issue", date: "2026-03-22", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { title: "Security patch", description: "Update", date: "2026-03-21", category: "Security", active: false, newTask: false, completed: false, failed: true }
    ]
  }
];
  const admins = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }];
export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admins', JSON.stringify(admins));



}

export const getLocalStorage= ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admins = JSON.parse(localStorage.getItem('admins'));
    
   return{employees,admins}

}