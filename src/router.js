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
                        import ('../src/components/AddFreeAdmission.vue')
                },
                {
                    path: '/index/seefreeadmission',
                    component: () =>
                        import ('../src/components/SeeFreeAdmission.vue')
                },
                {
                    path: '/index/editfreeadmission',
                    component: () =>
                        import ('../src/components/EditFreeAdmission.vue')
                }
            ]
        }
    ]
})