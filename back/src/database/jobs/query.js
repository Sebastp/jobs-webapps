import {jobsDb} from '~/core/db'

const Query = {
  jobs: () => {
    return jobsDb.read();
  }
}

export default {
  Query
}
