import { getJSON } from './utils/main'

const main = async () => {
  console.log(await getJSON('./json/constants.json'));
}

main()
  .then(val => console.log(val))
  .catch(err => console.error(err));