const course = {

  coursename: "js in hindi ",
  price: "999",
 courseInstructor: 'hitesh sir '
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);

// {
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }

