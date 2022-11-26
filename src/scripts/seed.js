import appSeeder from '../database/seeders/app.seeder.js'

console.log('the seed has started')
appSeeder()
  .then(() => {
    console.log('the seed has finished')
  })
  .catch((error) => {
    console.error(error)
  })
