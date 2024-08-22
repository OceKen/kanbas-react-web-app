export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{marginLeft: "110px"}}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row" style={{marginLeft:"20px"}}>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/5678/Home"
              >
                <img src="/images/angular.png" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Angular
                  </h5>
                  <p className="card-text">Frontend Development</p>
                  <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/9101/Home"
              >
                <img src="/images/vue.png" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS9101 Vue.js
                  </h5>
                  <p className="card-text">Modern Web Development</p>
                  <p className="card-text">202410_2 Fall 2023 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1121/Home"
              >
                <img src="/images/node.png" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1121 Node.js
                  </h5>
                  <p className="card-text">Backend Development</p>
                  <p className="card-text">245610_1 Fall 2024 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/3141/Home"
              >
                <img src="/images/python.jpg" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3141 Python
                  </h5>
                  <p className="card-text">Data Science</p>
                  <p className="card-text">203410_1 Fall 2023 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/5161/Home"
              >
                <img src="/images/java.png" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5161 Java
                  </h5>
                  <p className="card-text">Enterprise Applications</p>
                  <p className="card-text">202410_1 Fall 2024 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/7181/Home"
              >
                <img src="/images/cplusplus.png" width={200} height={100} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7181 C++
                  </h5>
                  <p className="card-text">System Programming</p>
                  <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
