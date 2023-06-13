import instance from "./axios";
// 编写memorabilia的api接口，每个功能都有单独的接口

const competitionSignupAdd = (data) => {
    return instance.request({
        url: 'api/competitionSignup/add',
        method: 'post',
        data
    })
}

const competitionSignupGetMySignupCompetitionCreateRecordByUser = (params) => {
    return instance.request({
        url: 'api/competitionSignup/getMySignupCompetitionCreateRecordByUser',
        params
    })
}

const competitionSignupGetStudentSignupCompetitionVos = (params) => {
    return instance.request({
        url: 'api/competitionSignup/getStudentSignupCompetitionVos',
        params
    })
}
const competitionSignupSignupedCompetitionCreate = (params) => {
    return instance.request({
        url: 'api/competitionSignup/signupedCompetitionCreate',
        params
    })
}

const competitionSignupStudentTakeInCompetitions = (params) => {
    return instance.request({
        url: 'api/competitionSignup/studentTakeInCompetitions',
        params
    })
}

const competitionSignupUpdateBatchCheckSignupCompetitionDTO = (data) => {
    return instance.request({
        url: 'api/competitionSignup/updateBatchCheckSignupCompetitionDTO',
        method: 'post',
        data
    })
}

export default{
    competitionSignupAdd,
    competitionSignupGetMySignupCompetitionCreateRecordByUser,
    competitionSignupGetStudentSignupCompetitionVos,
    competitionSignupSignupedCompetitionCreate,
    competitionSignupStudentTakeInCompetitions,
    competitionSignupUpdateBatchCheckSignupCompetitionDTO
} 