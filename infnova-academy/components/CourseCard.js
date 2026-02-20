// import Link from "next/link";
// import Image from "next/image";
// import styles from "./CourseCard.module.css";

// const levelClass = {
//   Beginner: "badge-beginner",
//   Intermediate: "badge-intermediate",
//   Advanced: "badge-advanced",
// };

// export default function CourseCard({ course }) {
//   return (
//     <Link href={`/courses/${course.id}`} className={styles.card}>
//       <div className={styles.imageWrapper}>
//         <Image
//           src={course.thumbnail}
//           alt={course.title}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className={styles.image}
//         />
//         <span className={`badge ${levelClass[course.level] ?? "badge-beginner"} ${styles.badge}`}>
//           {course.level}
//         </span>
//       </div>

//       <div className={styles.body}>
//         <p className={styles.category}>{course.category}</p>
//         <h3 className={styles.title}>{course.title}</h3>
//         <p className={styles.instructor}>Instructor: {course.instructor}</p>
//         <div className={styles.meta}>
//           <span>⏱ {course.duration}</span>
//           <span>👥 {course.enrolled.toLocaleString()}</span>
//           <span className={styles.rating}>★ {course.rating}</span>
//         </div>
//       </div>
//     </Link>
//   );
// }