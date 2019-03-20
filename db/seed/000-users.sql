insert into users (user_handle, username, first_name, surname, email, joined_date) values
('243ccbc5-3abe-459e-9729-cfd116e65bf6', 'wgeving', 'William', 'Geving', 'wgeving@gmail.com', now())
on conflict do nothing;