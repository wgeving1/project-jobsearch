create extension if not exists pgcrypto;
create extension if not exists pg_stat_statements;

create table if not exists users
(
  user_handle uuid primary key default gen_random_uuid(),
  username text, 
  first_name text, 
  surname text, 
  email text not null unique, 
  joined_date timestamp default now(), 
  verified boolean
):