import low from 'lowdb';

const jobsDb = low('../~/docs/jobs.json');
const characterDb = low('../~/docs/characteristics.json');

export default {jobsDb, characterDb};
