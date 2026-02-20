import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "@/lib/api";
import ErrorMessage from "@/components/ErrorMessage";
import styles from "./detail.module.css";

export async function generateMetadata({ params }) {
  try {
    const course = await getCourseById(params.id);
    return { title: `${course.title} - INFNOVA Academy` };
  } catch {
    return { title: "Course - INFNOVA Academy" };
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
  }[course.level] ?? "badge-intermediate";

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

      {/* Orange Hero Banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroCatLabel}>{course.category.toUpperCase()}</p>
          <h1 className={styles.heroTitle}>{course.title}</h1>
          <p className={styles.heroDesc}>{course.description}</p>

          <div className={styles.heroMeta}>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
              Instructor: <strong>{course.instructor}</strong>
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {course.duration}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              {course.enrolled?.toLocaleString()} enrolled
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              {course.rating} rating
            </span>
          </div>

          {/* Level badge */}
          <div style={{ marginTop: "14px" }}>
            <span className={`badge ${levelClass}`}>{course.level} Level</span>
          </div>
        </div>

        {/* Thumbnail */}
        <div className={styles.heroImage}>
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="280px"
            className={styles.thumbImg}
          />
        </div>
      </div>

      {/* Two-column layout */}
      <div className={styles.layout}>

        {/* LEFT COLUMN */}
        <div className={styles.left}>

          {/* What You'll Learn */}
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#f97316" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              What You&apos;ll Learn
            </h2>
            <ul className={styles.skillsGrid}>
              {course.skills?.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#10b981" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Description */}
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Course Description</h2>
            <p className={styles.descText}>{course.description}</p>
            <p className={styles.descText} style={{ marginTop: "14px" }}>
              This comprehensive course is designed to provide you with practical,
              hands-on experience and real-world skills. You will work on projects
              that simulate actual industry scenarios, giving you the confidence to
              apply your knowledge immediately.
            </p>
          </div>

          {/* Instructor */}
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Your Instructor</h2>
            <div className={styles.instructorRow}>
              <div className={styles.avatar}>
                {course.instructor.charAt(0)}
              </div>
              <div>
                <p className={styles.instructorName}>{course.instructor}</p>
                <p className={styles.instructorBio}>
                  Expert Cloud Computing professional with over 10 years of industry
                  experience. Passionate about teaching and helping students achieve
                  their career goals.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN — Enroll Sidebar */}
        <aside>
          <div className={styles.enrollBox}>
            <h3 className={styles.enrollTitle}>Enroll Today</h3>
            <p className={styles.enrollSub}>
              Join {course.enrolled?.toLocaleString()} students already enrolled
            </p>

            <button className={styles.enrollBtn}>Enroll Now</button>
            <button className={styles.wishlistBtn}>Add to Wishlist</button>

            <div className={styles.includes}>
              <p className={styles.includesTitle}>This course includes:</p>
              {[
                { icon: "✅", text: `${course.duration} of content` },
                { icon: "✅", text: "Lifetime access" },
                { icon: "✅", text: "Certificate of completion" },
                { icon: "✅", text: "Access on mobile and desktop" },
                { icon: "✅", text: "Downloadable resources" },
              ].map(({ icon, text }) => (
                <div key={text} className={styles.includeItem}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#10b981" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}