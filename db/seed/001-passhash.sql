insert into passhash(user_handle, passhash, mod_date) values
('243ccbc5-3abe-459e-9729-cfd116e65bf6','$2b$10$sYcRCp807hq1zsXMXUNzU.e3Su7TUNuQ07KsnYmlOm.ULxDNWJPcG', now())
on conflict do nothing;