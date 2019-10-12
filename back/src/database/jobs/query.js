import dataBase from '~/core/db'


const Query = {
  jobs: () => {
    return dataBase.get('jobs').value();
  }
}

export default {
  Query
}
