import instance from "./axios";
// 编写memorabilia的api接口，每个功能都有单独的接口

const competitionCreateAdd = (data) => {
    return instance.request({
        url: 'api/competitionCreate/add',
        method: 'post',
        data
    })
}

const competitionCreateCheck = (data) => {
    return instance.request({
        url: 'api/competitionCreate/check',
        method: 'post',
        data
    })
}


const competitionDelete = (params) => {
    return instance.request({
        url: 'api/competitionCreate/delete/{id}',
        params
    })
}



const competitionCreateEdit = (data) => {
    return instance.request({
        url: 'api/competitionCreate/edit',
        method: 'post',
        data
    })
}

const competitionCreateGetCheckCompetitionVosBySchoolId = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getCheckCompetitionVosBySchoolId',
        params
    })
}

const competitionCreateGetCompetitionCreateAndSignupedCountVoByUserId = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getCompetitionCreateAndSignupedCountVoByUserId',
        params
    })
}


const competitionCreateGetSignUpedCompetitionCreate = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getSignUpedCompetitionCreate',
        params
    })
}

const competitionCreateGetTeacherCompetitionVoById = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getTeacherCompetitionVoById',
        params
    })
}

const competitionCreateGetTeacherCreateCompetitionsBySchool = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getTeacherCreateCompetitionsBySchool',
        params
    })
}


const competitionCreateGetTeacherCreateCompetitionsByStateNotEqualZeroAndSchool = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getTeacherCreateCompetitionsByStateNotEqualZeroAndSchool',
        params
    })
}

const competitionCreateGetUnCheckTeacherCompetitionVosBySchoolId = (params) => {
    return instance.request({
        url: 'api/competitionCreate/getUnCheckTeacherCompetitionVosBySchoolId',
        params
    })
}
const competitionCreateOne = (params) => {
    return instance.request({
        url: 'api/competitionCreate/one',
        params
    })
}

const competitionCreateGetCompetitionCreatesPageBySchool = (data) => {
    return instance.request({
        url: 'api/competitionCreate/page/getCompetitionCreatesPageBySchool',
        method: 'post',
        data
    })
}

const competitionCreateGetCompetitionCreatesPageByUser = (data) => {
    return instance.request({
        url: 'api/competitionCreate/page/user',
        method: 'post',
        data
    })
}

const competitionCreateSignup = (data) => {
    return instance.request({
        url: 'api/competitionCreate/signup',
        method: 'post',
        data
    })
}

const competitionCreateState = (data) => {
    return instance.request({
        url: 'api/competitionCreate/state',
        method: 'post',
        data
    })
}

export default {
    competitionCreateAdd,
    competitionCreateCheck,
    competitionDelete,
    competitionCreateEdit,
    competitionCreateGetCheckCompetitionVosBySchoolId,
    competitionCreateGetCompetitionCreateAndSignupedCountVoByUserId,
    competitionCreateGetSignUpedCompetitionCreate,
    competitionCreateGetTeacherCompetitionVoById,
    competitionCreateGetTeacherCreateCompetitionsBySchool,
    competitionCreateGetTeacherCreateCompetitionsByStateNotEqualZeroAndSchool,
    competitionCreateGetUnCheckTeacherCompetitionVosBySchoolId,
    competitionCreateOne,
    competitionCreateGetCompetitionCreatesPageBySchool,
    competitionCreateGetCompetitionCreatesPageByUser,
    competitionCreateSignup,
    competitionCreateState
} 