/**
 * Route: "/courses/:id" — Course Detail Page
 * Server Component: fetches single course SSR.
 */
import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "@/lib/api";
import ErrorMessage from "@/components/ErrorMessage";
import styles from "./detail.model.css";

export async function generateMetadata({ params }) {
  try {
    const course = await getCourseById(params.id);
    return { title: `${course.title} — INFNOVA Academy` };
  } catch {
    return { title: "Course — INFNOVA Academy" };
  }
}

export default async function CourseDetailPage({ params }) {
  let course = null;
  let error = null;

  try {
    course = await getCourseById(params.id);
  } catch (err) {
    error = err.message;
  }

  if (error || !course) {
    return (
      <div style={{ padding: "40px" }}>
        <ErrorMessage message={error ?? "Course not found."} />
      </div>
    );
  }

  const levelClass = {
    Beginner: "badge-beginner",
    Intermediate: "badge-intermediate",
    Advanced: "badge-advanced",
  }[course.level] ?? "badge-beginner";

  return (
    <div className={styles.page}>
      {/* Back link */}
      <Link href="/" className={styles.backLink}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Back to Courses
      </Link>

      {/* Orange Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadges}>
            <span className={styles.heroCatBadge}>{course.category}</span>
            <span className={`badge ${levelClass}`}>{course.level}</span>
          </div>
          <h1 className={styles.heroTitle}>{course.title}</h1>
          <p className={styles.heroDesc}>{course.description}</p>
          <div className={styles.heroMeta}>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
              Instructor: {course.instructor}
            </span>
            <span>⏱ {course.duration}</span>
            <span>👥 {course.enrolled?.toLocaleString()} enrolled</span>
            <span>★ {course.rating} rating</span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="220px"
            className={styles.thumbImg}
          />
        </div>
      </div>

      {/* Two-column layout */}
      <div className={styles.layout}>
        {/* Left */}
        <div className={styles.left}>
          {/* What You'll Learn */}
          <div className={styles.box}>
            <h2 className="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              What You&apos;ll Learn
            </h2>
            <ul className={styles.skillsGrid}>
              {course.skills?.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="var(--green)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className={styles.box}>
            <h2 className="section-title">Course Description</h2>
            <p className={styles.descText}>{course.description}</p>
            <p className={styles.descText} style={{ marginTop: "12px" }}>
              By the end of this course, you will have the skills and confidence
              to apply your knowledge in real-world industry scenarios immediately.
              Suitable for professionals and beginners alike.
            </p>
          </div>

          {/* Instructor */}
          <div className={styles.box}>
            <h2 className="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Your Instructor
            </h2>
            <div className={styles.instructorRow}>
              <div className={styles.avatar}>
                {course.instructor.charAt(0)}
              </div>
              <div>
                <p className={styles.instructorName}>{course.instructor}</p>
                <p className={styles.instructorTitle}>
                  Lead {course.category} Specialist
                </p>
                <p className={styles.instructorBio}>
                  Expert {course.category} professional with years of industry
                  experience. Passionate about teaching and helping students
                  achieve their career goals through practical, hands-on learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.enrollBox}>
            <h3 className={styles.enrollTitle}>Enroll Today</h3>
            <span className={styles.seatsWarning}>
              Only a few seats remaining!
            </span>
            <button className={`btn-orange ${styles.enrollBtn}`}>
              Enroll Now
            </button>
            <button className={styles.wishlistBtn}>Add to Wishlist</button>

            <div className={styles.includes}>
              <h4 className={styles.includesTitle}>This course includes:</h4>
              {[
                { icon: "⏱", text: `${course.duration} of content` },
                { icon: "📄", text: "Certificate of completion" },
                { icon: "📱", text: "Access on mobile and desktop" },
                { icon: "⬇️", text: "Downloadable resources" },
              ].map(({ icon, text }) => (
                <div key={text} className={styles.includeItem}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}