const FileSync = require('lowdb/adapters/FileSync')
import low from 'lowdb';

const jobsDb = low(new FileSync('../docs/jobs.json'))
const characterDb = low(new FileSync('../docs/characteristics.json'))

// export default jobsDb
// export default characterDb
export default {jobsDb, characterDb};
