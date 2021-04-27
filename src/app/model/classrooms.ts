export interface classrooms{
    classroomId:String
    classroomName:String
    classStudent:student
    classTeacher:teacher
}
export interface student{
    studentId:String
    studentName:String
    studentAge:String
    studentTel:String
}
export interface teacher{
    teacherId:String
    teacherName:String
    teacherTel:String
    subjectTaught:String
}