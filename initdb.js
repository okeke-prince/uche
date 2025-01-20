const sqlite = require("better-sqlite3");

const db = sqlite("destination.sqlite");

// Create `destination_types` table
db.prepare(`CREATE TABLE IF NOT EXISTS destination_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);`).run();

// Populate `destination_types` table
// db.prepare(`INSERT INTO destination_types (name) VALUES 
//     ('Landmark'), ('Natural Wonder'), ('Historic'), ('Island'), ('Mountain');`).run();

// Create `destinations` table
db.prepare(`CREATE TABLE IF NOT EXISTS destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    description TEXT,
    current_weather TEXT,
    img_url TEXT,
    best_time_to_visit TEXT,
    destination_type_name VARCHAR(100) NOT NULL,
    estimated_budget REAL,
    latitude REAL,
    longitude REAL,
    type_id INTEGER,
    FOREIGN KEY (type_id) REFERENCES destination_types(id) ON DELETE SET NULL
);`).run();

// Insert data into `destinations`
// db.prepare(
//     `INSERT INTO destinations (name, country, description, current_weather, img_url, best_time_to_visit, destination_type_name, estimated_budget, latitude, longitude, type_id) 
//     VALUES 
//     ('Eiffel Tower', 'France', 'Iconic iron structure in Paris.', 'Cloudy, 12°C', 'paris.jpg,paris1.jpg,paris2.jpg,paris3.jpg', 'April to June', 'Landmark', 1500.00, 48.8584, 2.2945, 1),
//     ('Grand Canyon', 'USA', 'Massive natural canyon in Arizona.', 'Sunny, 25°C', 'la1.jpg', 'March to May', 'Natural Wonder', 1200.00, 36.1069, -112.1129, 2),
//     ('Great Wall', 'China', 'Historic wall spanning China.', 'Clear, 18°C', 'rom1.jpg,rom2.jpg,rom3.jpg', 'September to November', 'Historic', 1000.00, 40.4319, 116.5704, 3),
//     ('Sydney Opera House', 'Australia', 'Famous architectural marvel.', 'Rainy, 20°C', 'beach1.jpg,beach2.jpg,beach3.jpg', 'October to February', 'Landmark', 2000.00, -33.8568, 151.2153, 1),
//     ('Mount Kilimanjaro', 'Tanzania', 'Highest peak in Africa.', 'Sunny, 15°C', 'saf1.jpg,saf2.jpg,saf3.jpg', 'June to October', 'Mountain', 2500.00, -3.0674, 37.3556, 5),
//     ('Santorini', 'Greece', 'Beautiful island with white-washed houses.', 'Clear, 22°C', 'thai1.jpg,thai2.jpg,thai3.jpg,thai4.jpg', 'May to October', 'Island', 1800.00, 36.3932, 25.4615, 4);`
// ).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();