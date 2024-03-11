let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {

  let commonCourses = courses1.filter(function(course) {
    return courses2.includes(course);
  });

 
  if (commonCourses.length > 0) {
    console.log('Common courses: ' + commonCourses.join(', '));
  } else {
    console.log('No common courses found.');
  }
}


findCommonCourses(student1Courses, student2Courses);