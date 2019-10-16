import dataBase from '~/core/db'


const Query = {
  characteristics: () => {
    return dataBase.get('characteristics').value();
  }
}

export default {
  Query
}
