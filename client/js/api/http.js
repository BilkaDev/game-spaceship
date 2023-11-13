//const apiGateway = 'https://infinite-waters-84171-1806d8c13ca6.herokuapp.com';
const apiGateway = 'http://localhost:8081';

const Endpoint_Auth_Register = () => 'auth/signup';
const Endpoint_Auth_Login = () => 'auth/signin';

const Endpoint_Profile = () => 'users/me';

const Endpoint_Stats_TOP = () => 'users/me';
const Endpoint_Stats_user = (id) => `stats/${id}`;

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
