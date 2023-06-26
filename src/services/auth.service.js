import axios from "axios";
import apiInstace from "./apiInstace";

class AuthService{
  constructor(){
    this.api = apiInstace;
  }

  signup(data){
    return this.api.post(`/auth/signup`, data)
  }

  login(data){
    return this.api.post(`/auth/login`, data)
  }

  verify(token){
    return this.api.get(`/auth/verify`, 
    {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}

const authService = new AuthService()

export default authService