

const BASE_URL = "https://infnova-course-api.vercel.app";


export async function getCourses() {
  const res = await fetch(`${BASE_URL}/api/courses`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch courses (status ${res.status})`);
  }

  return res.json();
}


export async function getCourseById(id) {
  const res = await fetch(`${BASE_URL}/api/courses/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Course not found (status ${res.status})`);
  }

  return res.json();
}