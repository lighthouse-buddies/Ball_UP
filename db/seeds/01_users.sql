INSERT INTO Users (name, email, password) VALUES
  ('John Doe', 'johndoe@example.com', 'password123'),
  ('Jane Smith', 'janesmith@example.com', 'qwerty123'),
  ('Mike Johnson', 'mikejohnson@example.com', 'pass123');

INSERT INTO Games (user_id, courts_id, time_start, time_end, capacity) VALUES
  (1, 1, '09:00', '10:00', 5),
  (2, 2, '14:00', '16:00', 8),
  (3, 3, '18:30', '19:30', 3);

INSERT INTO Courts (location, number_backboards, full_court, lights, created_by) VALUES
  (point(43.791100, -79.406305), 2, true, false, 1),
  (point(43.795041, -79.398053), 1, false, false, 2),
  (point(43.776696, -79.425260), 1, true, true, 3);