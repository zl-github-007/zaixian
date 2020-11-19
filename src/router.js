import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'signin',
            component: () =>
                import ('./views/SignIn.vue')
        },
        {
            path: '/index',
            redirect: '/index/freeadmission'
        },
        {
            path: '/index',
            component: () =>
                import ('./views/Index.vue'),
            children: [{
                    path: '/index/freeadmission',
                    component: () =>
                        import ('../src/components/FreeAdmission.vue')
                },
                {
                    path: '/index/excellentcourse',
                    component: () =>
                        import ('../src/components/ExcellentCourse.vue')
                },
                {
                    path: '/index/examinationsyllabus',
                    component: () =>
                        import ('../src/components/ExaminationSyllabus.vue')
                },
                {
                    path: '/index/realtopicovertheyears',
                    component: () =>
                        import ('../src/components/RealTopicOverTheYears.vue')
                },
                {
                    path: '/index/simulationtestpaper',
                    component: () =>
                        import ('../src/components/SimulationTestPaper.vue')
                },
                {
                    path: '/index/choicequestion',
                    component: () =>
                        import ('../src/components/ChoiceQuestion.vue')
                },
                {
                    path: '/index/shortanswerquestions',
                    component: () =>
                        import ('../src/components/ShortAnswerQuestions.vue')
                },
                {
                    path: '/index/materialanalysisquestions',
                    component: () =>
                        import ('../src/components/MaterialAnalysisQuestions.vue')
                },
                {
                    path: '/index/Twoexaminationsyllabus',
                    component: () =>
                        import ('../src/components/TwoExaminationSyllabus.vue')
                },
                {
                    path: '/index/Tworealtopicovertheyears',
                    component: () =>
                        import ('../src/components/TwoRealTopicOverTheYears.vue')
                },
                {
                    path: '/index/Twosimulationtestpaper',
                    component: () =>
                        import ('../src/components/TwoSimulationTestPaper.vue')
                },
                {
                    path: '/index/Twochoicequestion',
                    component: () =>
                        import ('../src/components/TwoChoiceQuestion.vue')
                },
                {
                    path: '/index/Twoshortanswerquestions',
                    component: () =>
                        import ('../src/components/TwoShortAnswerQuestions.vue')
                },
                {
                    path: '/index/Twomaterialanalysisquestions',
                    component: () =>
                        import ('../src/components/TwoMaterialAnalysisQuestions.vue')
                },
                {
                    path: '/index/studentssaid',
                    component: () =>
                        import ('../src/components/StudentsSaid.vue')
                },
                {
                    path: '/index/commentsfromstudents',
                    component: () =>
                        import ('../src/components/CommentsFromStudents.vue')
                },
                {
                    path: '/index/lectureotes',
                    component: () =>
                        import ('../src/components/Lectureotes.vue')
                },
                {
                    path: '/index/ordermanagement',
                    component: () =>
                        import ('../src/components/OrderManagement.vue')
                },
                {
                    path: '/index/dataoverview',
                    component: () =>
                        import ('../src/components/DataOverview.vue')
                },
                {
                    path: '/index/agroupofpeople',
                    component: () =>
                        import ('../src/components/AGroupOfPeople.vue')
                },
                {
                    path: '/index/usermanagement',
                    component: () =>
                        import ('../src/components/UserManagement.vue')
                },
                {
                    path: '/index/loginaccountmanagement',
                    component: () =>
                        import ('../src/components/LoginAccountManagement.vue')
                },
                {
                    path: '/index/addfreeadmission',
                    component: () =>
                        import ('../src/add/AddFreeAdmission.vue')
                },
                {
                    path: '/index/seefreeadmission',
                    component: () =>
                        import ('../src/see/SeeFreeAdmission.vue')
                },
                {
                    path: '/index/editfreeadmission',
                    component: () =>
                        import ('../src/edit/EditFreeAdmission.vue')
                },
                {
                    path: '/index/addexcellentcourse',
                    component: () =>
                        import ('../src/add/AddExcellentCourse.vue')
                },
                {
                    path: '/index/editexcellentcourse',
                    component: () =>
                        import ('../src/edit/EditExcellentCourse.vue')
                },
                {
                    path: '/index/seeexcellentcourse',
                    component: () =>
                        import ('../src/see/SeeExcellentCourse.vue')
                },
                {
                    path: '/index/addexaminationsyllabus',
                    component: () =>
                        import ('../src/add/AddExaminationSyllabus.vue')
                },
                {
                    path: '/index/editexaminationsyllabus',
                    component: () =>
                        import ('../src/edit/EditExaminationSyllabus.vue')
                },
                {
                    path: '/index/seeexaminationsyllabus',
                    component: () =>
                        import ('../src/see/SeeExaminationSyllabus.vue')
                },
                {
                    path: '/index/addrealtopicovertheyears',
                    component: () =>
                        import ('../src/add/AddRealTopicOverTheYears.vue')
                },
                {
                    path: '/index/editrealtopicovertheyears',
                    component: () =>
                        import ('../src/edit/EditRealTopicOverTheYears.vue')
                },
                {
                    path: '/index/seerealtopicovertheyears',
                    component: () =>
                        import ('../src/see/SeeRealTopicOverTheYears.vue')
                },
                {
                    path: '/index/addsimulationtestpaper',
                    component: () =>
                        import ('../src/add/AddSimulationTestPaper.vue')
                },
                {
                    path: '/index/editsimulationtestpaper',
                    component: () =>
                        import ('../src/edit/EditSimulationTestPaper.vue')
                },
                {
                    path: '/index/seesimulationtestpaper',
                    component: () =>
                        import ('../src/see/SeeSimulationTestPaper.vue')
                },
                {
                    path: '/index/addchoicequestion',
                    component: () =>
                        import ('../src/add/AddChoiceQuestion.vue')
                },
                {
                    path: '/index/editchoicequestion',
                    component: () =>
                        import ('../src/edit/EditChoiceQuestion.vue')
                },
                {
                    path: '/index/seechoicequestion',
                    component: () =>
                        import ('../src/see/SeeChoiceQuestion.vue')
                },
                {
                    path: '/index/addshortanswerquestions',
                    component: () =>
                        import ('../src/add/AddShortAnswerQuestions.vue')
                },
                {
                    path: '/index/editshortanswerquestions',
                    component: () =>
                        import ('../src/edit/EditShortAnswerQuestions.vue')
                },
                {
                    path: '/index/seeshortanswerquestions',
                    component: () =>
                        import ('../src/see/SeeShortAnswerQuestions.vue')
                },
                {
                    path: '/index/addmaterialanalysisquestions',
                    component: () =>
                        import ('../src/add/AddMaterialAnalysisQuestions.vue')
                },
                {
                    path: '/index/editmaterialanalysisquestions',
                    component: () =>
                        import ('../src/edit/EditMaterialAnalysisQuestions.vue')
                },
                {
                    path: '/index/seematerialanalysisquestions',
                    component: () =>
                        import ('../src/see/SeeMaterialAnalysisQuestions.vue')
                },
                {
                    path: '/index/addstudentssaid',
                    component: () =>
                        import ('../src/add/AddStudentsSaid.vue')
                },
                {
                    path: '/index/editstudentssaid',
                    component: () =>
                        import ('../src/edit/EditStudentsSaid.vue')
                },
                {
                    path: '/index/seestudentssaid',
                    component: () =>
                        import ('../src/see/SeeStudentsSaid.vue')
                },
                {
                    path: '/index/addcommentsfromstudents',
                    component: () =>
                        import ('../src/add/AddCommentsFromStudents.vue')
                },
                {
                    path: '/index/editcommentsfromstudents',
                    component: () =>
                        import ('../src/edit/EditCommentsFromStudents.vue')
                },
                {
                    path: '/index/seecommentsfromstudents',
                    component: () =>
                        import ('../src/see/SeeCommentsFromStudents.vue')
                },
                {
                    path: '/index/addlectureotes',
                    component: () =>
                        import ('../src/add/AddLectureotes.vue')
                },
                {
                    path: '/index/editlectureotes',
                    component: () =>
                        import ('../src/edit/EditLectureotes.vue')
                },
                {
                    path: '/index/seelectureotes',
                    component: () =>
                        import ('../src/see/SeeLectureotes.vue')
                },
                {
                    path: '/index/addloginaccountmanagement',
                    component: () =>
                        import ('../src/add/AddLoginAccountManagement.vue')
                },
                {
                    path: '/index/seeloginaccountmanagement',
                    component: () =>
                        import ('../src/see/SeeLoginAccountManagement.vue')
                },
                {
                    path: '/index/addagroupofpeople',
                    component: () =>
                        import ('../src/add/AddAGroupOfPeople.vue')
                },
                {
                    path: '/index/editagroupofpeople',
                    component: () =>
                        import ('../src/edit/EditAGroupOfPeople.vue')
                }
            ]
        }
    ]
})