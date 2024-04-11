import "./Course.css"

const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
]

const Course = ()=>{
    const mapped = courses.map(course => (
    <div className="course-container" key={course.id}>
      <div>
        <h1 className="course-title">{course.name}</h1>
      </div>
      <div>
        {course.parts.map(part => (
          <p className="course-part" key={part.id}>
            Name: {part.name}, Exercises: {part.exercises}
          </p>
        ))}
      </div>
      <div>
        <h4 className="total-exercises">
          Total exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </h4>
      </div>
    </div>
  ));

  return (
    <div className="curriculum-container">
      <h1 className="curriculum-title">Web development curriculum</h1>
      {mapped}
    </div>
  );

}

export default Course;
