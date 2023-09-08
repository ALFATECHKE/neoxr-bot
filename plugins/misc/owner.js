exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: 'ALFA',
         number: env.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'ALFATECH MANAGEMENT',
         website: 'https://alfatech.co.ke',
         email: 'mwangialfa9@gmail.com / info@alfatech.co.ke'
      })
   },
   error: false,
   cache: true,
   location: __filename
}
