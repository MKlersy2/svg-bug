export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(
    [
      {"name": "Music 0", "reference": 0}, 
      {"name": "Music 1", "reference": 1}, 
      {"name": "Music 2", "reference": 2}
    ]
    
    );
}
