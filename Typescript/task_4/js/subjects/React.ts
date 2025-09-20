/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    class React extends Subject{
        getRequirements(){
            return "Here is the list of requirements for React"
        }

        getAvailableTeacher(){
            if (this.teacher.experienceTeachingReact) {
                return "Available Teacher:" + this.teacher.firstName
            }
            
            return "No available teacher"
        }
    }
}