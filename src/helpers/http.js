import AsyncStorage from '@react-native-async-storage/async-storage';
class Http {
    static instance = new Http()
    
    BASE_URL = 'https://donatonappco.herokuapp.com/public/api/v1'                     //'http://192.168.1.18:8000/api/v1'
    BASE_URL_ = 'https://donatonappco.herokuapp.com/public/api'                       //'http://192.168.1.18:8000/api'
    BASE_URL_IMGS = 'https://donatonappco.herokuapp.com/public/imgsDonations/'        //'http://192.168.1.18:8000/imgsDonations/'

    get = async (resource) => {
        let token = ''
        try { token = await AsyncStorage.getItem('token') } catch(e) { console.log(`Error obteniendo el token metodo get, file http ${e}`) }

        try {
            let config={
                method: 'GET',
                headers:  {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                          }
            }
            let url = (/logout/i.test(resource)) ? this.BASE_URL_ : this.BASE_URL
            let req = await fetch(`${url}${resource}`, config)
            let json = (req.status == 204) ? await req : await req.json()
            return json
        } catch (err) {
            console.log("http get method err ",err)
            throw Error(err)
        }
    }

    post = async (resource, body) => {
        let token = ''
        try { token = await AsyncStorage.getItem('token') } catch(e) { console.log(`Error obteniendo el token metodo post file http ${e}`) }  

        try {
            let config={
                    method: 'POST',
                    headers: (resource === '/login')  ? {
                                                          'Accept': 'application/json',
                                                          'Content-Type': 'application/json'
                                                        }
                                                      : {
                                                          'Accept': 'application/json',
                                                          'Content-Type': (resource === '/products' || resource === '/updateDataUser' || resource === '/updateProduct') ? 'multipart/form-data' : 'application/json',
                                                          'Authorization': `Bearer ${token}`
                                                        },
                    body
                }
            let url = (resource === '/registerNewUser' || resource === '/login' || resource === '/validateIfExistEmail' || resource === '/verifyCodeForgetPassword' || resource === '/changePassword') ? this.BASE_URL_ : this.BASE_URL       
            let req = await fetch(`${url}${resource}`,config)
            let json = await req.json()
            return json
        } catch (err) {
            console.log("http post method err ", err)
            throw Error(err)
        }
    }

    delete = async (resource, id) => {
        try {
          const req = await fetch(`${this.BASE_URL}${resource}/${id}`, {
            method: 'DELETE',
          });
          const json = req.json();
          return json;
        } catch (err) {
          console.log('http post method err', err);
          throw new Error(err);
        }
    }
    
    put = async (resource, id, body) => {
        try {
          const req = await fetch(`${this.BASE_URL}${resource}/${id}`, {
            method: 'PUT',
            body,
          });
          const json = req.json();
          return json;
        } catch (err) {
          console.log('http post method err', err);
          throw new Error(err);
        }
    }
}

export default Http;