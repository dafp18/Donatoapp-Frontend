class Http {
    static instance = new Http()
    
    BASE_URL = 'http://192.168.1.18:8000/api/v1'
    BASE_URL_ = 'http://192.168.1.18:8000/api'
    BASE_URL_IMGS = 'http://192.168.1.18:8000/imgsDonations/'

    get = async (resource) => {
        try {
            let req = await fetch(`${this.BASE_URL}${resource}`)
            let json = await req.json()
            return json
        } catch (err) {
            console.log("http get method err ",err)
            throw Error(err)
        }
    }

    post = async (resource, body) => {
        try {
            let config={
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': (resource === '/products' || resource === '/updateDataUser' || resource === '/updateProduct') ? 'multipart/form-data' : 'application/json'
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