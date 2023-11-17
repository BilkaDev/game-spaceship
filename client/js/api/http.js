//const apiGateway = 'https://infinite-waters-84171-1806d8c13ca6.herokuapp.com';
const apiGateway = 'http://localhost:8081/api';

const Endpoint_Auth_Register = () => 'auth/signup';
const Endpoint_Auth_Login = () => 'auth/signin';

const Endpoint_Profile = () => 'users/me';

const Endpoint_Stats_TOP = () => 'stats/top';
const Endpoint_Stats_User = () => `stats/user`;
const Endpoint_Stat_Save = () => 'stats';

class HTTP {
	_http = this._createNewInstance('');
	_createNewInstance(token) {
		const http = axios.create({
			baseURL: apiGateway,
			timeout: 1000,
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		this.get = http.get;
		this.post = http.post;
		this.put = http.put;
		this.delete = http.delete;
		this.patch = http.patch;
		return http;
	}
	auth = (token) => {
		this._http = this._createNewInstance(token);
	};
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
	getTopStats: () => Endpoint_Stats_TOP(),
	getUserStats: () => Endpoint_Stats_User(),
	saveStat: () => Endpoint_Stat_Save(),
};
