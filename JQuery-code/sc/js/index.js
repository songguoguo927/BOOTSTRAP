$(function() {
$(".content").load("./pages/student.html");
  $(".sc-body li").click(function(e) {
    // e.preventDefault();
    var text = $(e.target).text();
    switch (text) {
    //   case "学生管理"://相对的是index.html,而不是相对js的路径
       
    //     break;
      case "班级管理":
        $(".content").load("./pages/class.html");
        break;
      case "年级管理":
        $(".content").load("./pages/grade.html");
        break;
      case "课程管理":
        $(".content").load("./pages/course.html");
        break;
      case "教师管理":
        $(".content").load("./pages/teacher.html");
        break;
      default:
        break;
    }
  });
});
