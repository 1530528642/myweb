import axios from 'axios';
const serveapi: any = { }
const allApi = {
    bar : {
        findUser: 'users/bar',
        method: 'post'
    },
    getmenuslist : {
        findUser: 'menus/getmenuslist',
        method: 'post'
    },
    isimg : {
        findUser: 'goods/isimg',
        method: 'post'
    },
    getpage : {
        findUser: 'users/getpage',
        method: 'post'
    },
    addUser : {
        findUser: 'users/addUser',
        method: 'post'
    },
    getStudentlist : {
        findUser: 'pagingserch/getStudentlist',
        method: 'post'
    }
}

for (const key in allApi) {
    serveapi[key] = function(parmiss: any) {
        return axios[allApi[key].method](allApi[key].findUser, parmiss)
    }
}

export default serveapi
