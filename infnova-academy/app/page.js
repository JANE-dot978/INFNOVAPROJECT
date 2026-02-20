// /**
//  * Route: "/"  — Courses Listing Page
//  * Server Component: data is fetched on the server before HTML is sent.
//  */
// import { getCourses } from "@/lib/api";
// import ErrorMessage from "@/components/ErrorMessage";
// import CoursesClient from "./CoursesClient";
// import styles from "./page.module.css";

// export default async function HomePage() {
//   let courses = [];
//   let error = null;

//   try {
//     courses = await getCourses();
//   } catch (err) {
//     error = err.message;
//   }

//   return (
//     <>
//       {/* Orange Hero */}
//       <section className={styles.hero}>
//         <h1 className={styles.heroTitle}>Explore Our Courses</h1>
//         <p className={styles.heroSub}>
//           Master new skills with expert-led courses designed for the modern
//           learner. Start your learning journey today with INFNOVA Academy.
//         </p>
//       </section>

//       {/* Search + Grid */}
//       <section className={styles.container}>
//         {error ? (
//           <ErrorMessage message={error} />
//         ) : (
//           <CoursesClient courses={courses} />
//         )}
//       </section>
//     </>
//   );
// }