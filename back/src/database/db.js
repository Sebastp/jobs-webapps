import low from 'lowdb';

const jobsDb = low('../@src/docs/jobs.json');
const characterDb = low('../@src/docs/characteristics.json');

export default {jobsDb, characterDb};
