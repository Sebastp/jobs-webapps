import dataBase from '~/core/db'


const Query = {
  characteristics: () => {
    return dataBase.get('jobs').value();
  }
}

export default {
  Query
}
