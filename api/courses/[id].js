import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../db.json');

const getCourses = async () => {
  const raw = await readFile(dbPath, 'utf-8');
  const data = JSON.parse(raw);
  return data.courses || [];
};

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const courses = await getCourses();
    const course = courses.find((item) => item.id === Number(id));
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.error('Error reading course:', error);
    res.status(500).json({ error: 'Unable to load course' });
  }
}
