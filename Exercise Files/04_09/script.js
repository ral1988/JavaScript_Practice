var course = new Object();

course.title = "JavaScript Essential Training";
course.instructor ="Morten Rand-Hendriksen";
course.level = "1";
course.published = true;
course.views = 0;

function updateViews() {
    return ++course.views;
}

//or

var courseOther = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++courseOther.views;
    }
}

console.log(course);
console.log(courseOther);
courseOther.updateViews();
updateViews();
console.log(course);
console.log(courseOther);
