/**
 * lib/api.js
 * Centralised API helper.
 * All fetch calls live here — one place to change the base URL
 * or add auth headers if needed in the future.
 */

const BASE_URL = "https://infnova-course-api.vercel.app";

/**
 * GET /api/courses — returns all 8 courses
 */
export async function getCourses() {
  const res = await fetch(`${BASE_URL}/api/courses`, {
    next: { revalidate: 60 }, // ISR: re-fetch at most once per minute
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch courses (status ${res.status})`);
  }

  return res.json();
}

/**
 * GET /api/courses/:id — returns one course with full details + skills[]
 */
export async function getCourseById(id) {
  const res = await fetch(`${BASE_URL}/api/courses/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Course not found (status ${res.status})`);
  }

  return res.json();
}