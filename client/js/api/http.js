const apiGateway = 'https://infinite-waters-84171-1806d8c13ca6.herokuapp.com';
// const apiGateway = 'https://api.spaceship.bilka.usermd.net/spaceship/api'
// const apiGateway = 'http://localhost:8888/api'
const Endpoint_Auth_Register = () => 'auth/signup';
const Endpoint_Auth_Login = () => 'auth/signin';

const Endpoint_Profile = () => 'users/me';

const Endpoint_Health = () => 'stats/top';

const Endpoint_Stats_TOP = () => 'stats/top';
const Endpoint_Stats_User = (id) => `stats/${id}`;
const Endpoint_Stat_Save = () => 'stats';

class HTTP {
    _http = this._createNewInstance('');
    get = this._http.get;
    post = this._http.post;
    put = this._http.put;
    delete = this._http.delete;
    patch = this._http.patch;

    _createNewInstance() {
        return axios.create({
            baseURL: apiGateway,
            timeout: 1000,
            headers: {
                accept: 'application/json',
            },
        });
    }
}

export const http = new HTTP();

export const authEndpoint = {
    register: () => Endpoint_Auth_Register(),
    login: () => Endpoint_Auth_Login(),
};

export const userEndpoint = {
    profile: () => Endpoint_Profile(),
};

export const statEndpoint = {
    getHealth: () => Endpoint_Health(),
    getTopStats: () => Endpoint_Stats_TOP(),
    getUserStats: (id) => Endpoint_Stats_User(id),
    saveStat: () => Endpoint_Stat_Save(),
};
