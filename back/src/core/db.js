const FileSync = require('lowdb/adapters/FileSync')
import low from 'lowdb';


const dataBase = low(new FileSync('db.json'))

// dataBase.defaults({ jobs: [
//       {"title":"John", "description":"Hancock", "similarJobs": "ase"},
//       {"title":"John", "description":"Hancock", "similarJobs": "ase"},
//       {"title":"John", "description":"Hancock", "similarJobs": "ase"}
//     ]
//   }).write();

// dataBase.read().then(() => console.log('Content of my_project/db.json is loaded'))
// dataBase.defaults(jobs: [{ title: '', description: '', similarJobs: '' }]).write()

// export default jobsDb
// export default characterDb
export default dataBase
