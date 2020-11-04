import apiOptions from './utils';

class Api{
  constructor({apiOptions}){
    this._baseUrl = apiOptions.baseUrl;
    this._headers = apiOptions.headers;
  }
  
  _checkRes(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  } 

  getMyInfo(){
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._checkRes(res)) 
  } 

  patchMyInfo(name, about){
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then((res) => this._checkRes(res))
  }

  patchMyAvatar(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => this._checkRes(res))
  }

  postCard(title, url){
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: url
      })
    })
      .then((res) => this._checkRes(res))
  }

  deleteCard(id){
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }

  putLike(id){
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }

  deleteLike(id){
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._checkRes(res))
  }
}

const api = new Api({apiOptions});

export default api;

