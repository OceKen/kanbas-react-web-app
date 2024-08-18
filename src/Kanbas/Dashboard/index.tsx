export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <img src="/images/angular.png" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/5678/Home"
          >
            CS5678 Angular
          </a>
          <p className="wd-dashboard-course-title">Frontend Development</p>
          <a href="#/Kanbas/Courses/5678/Home"> Go </a>
        </div>
        <img src="/images/vue.png" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/9101/Home"
          >
            CS9101 Vue.js
          </a>
          <p className="wd-dashboard-course-title">Modern Web Development</p>
          <a href="#/Kanbas/Courses/9101/Home"> Go </a>
        </div>
        <img src="/images/node.png" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/1121/Home"
          >
            CS1121 Node.js
          </a>
          <p className="wd-dashboard-course-title">Backend Development</p>
          <a href="#/Kanbas/Courses/1121/Home"> Go </a>
        </div>
        <img src="/images/python.jpg" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/3141/Home"
          >
            CS3141 Python
          </a>
          <p className="wd-dashboard-course-title">Data Science</p>
          <a href="#/Kanbas/Courses/3141/Home"> Go </a>
        </div>
        <img src="/images/java.png" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/5161/Home"
          >
            CS5161 Java
          </a>
          <p className="wd-dashboard-course-title">Enterprise Applications</p>
          <a href="#/Kanbas/Courses/5161/Home"> Go </a>
        </div>
        <img src="/images/cplusplus.png" width={200} alt="" />
        <div>
          <a
            className="wd-dashboard-course-link"
            href="#/Kanbas/Courses/7181/Home"
          >
            CS7181 C++
          </a>
          <p className="wd-dashboard-course-title">System Programming</p>
          <a href="#/Kanbas/Courses/7181/Home"> Go </a>
        </div>
      </div>
    </div>
  );
}
