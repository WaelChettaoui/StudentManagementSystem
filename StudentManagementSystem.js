
var numberOfStudents = 0
var students = []
var esm, initial
var firstName, lastName

function addStudent(esm) {
    students.push(esm)
    numberOfStudents = students.length
   }

function getNumberOfStudent(){
    return numberOfStudents
}

function clearStudents()
{
    for (i=0; i<=students.length; i++)
    {
        students.pop()
    }
    numberOfStudents = 0
} 

function createFullName(firstName, lastName)
{
    return `${firstName} ${lastName}`
}

function isFullName(esm)
{
   var poopy = esm.split(" ")
   if (poopy.length > 1) 
    {return true}
}

function getStudentsByInitials(initial)
{
    i=0
    var initstudents = []
    while (i < students.length) 
    {   
        if (students[i].charAt(0) === initial)
        {initstudents.push(students[i])}
        i++
    }
    console.log(initstudents)
}






console.log(students) 
addStudent("Josh")
console.log(students) 
addStudent("John")
addStudent("Jamel")
addStudent("Wael")
addStudent("Jalel")
addStudent("Monia")
addStudent("Jannet")
addStudent("Moncef")
console.log(students)
console.log(getNumberOfStudent()) 
console.log(students)
getStudentsByInitials("J")



