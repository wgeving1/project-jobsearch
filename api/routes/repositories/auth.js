import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'

export async function login(userHandle) {
  const query = sql`select * from passhash where user_handle = ${userHandle}`

  const userAuths = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle, 
    passhash: row.passhash
  }))
  return userAuths[0]
}

export async function createPasshashEntry(userHandle, passhash) {
  const statement = sql`insert into passhash(user_handle, passhash) values (${userHandle}, ${passhash}) on conflict do nothing;`
  await PGWrapper.sql(statement)
}