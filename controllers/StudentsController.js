studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.addStudent = function() {
    var name = $scope.studentName;
    $scope.StudentsFactory.addStudent(name);
    $scope.studentName = null;
  };
});
