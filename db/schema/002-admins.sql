create table if not exiats admins
(
  id uuid primary key default gen_random_uuid(),
  user_handle uuid references user(user_handle)
);