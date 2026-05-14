import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db.json');

const getCourses = async () => {
  const raw = await readFile(dbPath, 'utf-8');
  const data = JSON.parse(raw);
  return data.courses || [];
};

export default async function handler(req, res) {
  try {
    const courses = await getCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error reading courses:', error);
    res.status(500).json({ error: 'Unable to load courses' });
  }
}
