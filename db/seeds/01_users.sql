INSERT INTO users (name, email, password) VALUES
  ('John Doe', 'johndoe@example.com', 'password123'),
  ('Jane Smith', 'janesmith@example.com', 'qwerty123'),
  ('Mike Johnson', 'mikejohnson@example.com', 'pass123');

INSERT INTO games (user_id, courts_id, time_start, time_end, capacity) VALUES


INSERT INTO courts (location, number_backboards, full_court, lights, created_by) VALUES
  (point(43.791100, -79.406305), 2, true, false, 1),
  (point(43.795041, -79.398053), 1, false, false, 2),
  (point(43.776696, -79.425260), 1, true, true, 3);