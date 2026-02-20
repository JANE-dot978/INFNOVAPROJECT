/**
 * Client Component — handles live search filter.
 * Receives pre-fetched courses from the Server Component parent.
 */
"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import styles from "./page.module.css";

export default function CoursesClient({ courses }) {
  const [query, setQuery] = useState("");

  const filtered = courses.filter((c) => {
    const q = query.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Search bar */}
      <div className={styles.searchBar}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search courses, instructors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        {query && (
          <button onClick={() => setQuery("")} className={styles.clearBtn}>✕</button>
        )}
      </div>

      {/* Count */}
      <p className={styles.showing}>
        Showing <strong>{filtered.length}</strong> of {courses.length} courses
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No courses match &ldquo;{query}&rdquo;. Try a different keyword.</p>
        </div>
      )}
    </>
  );
}