class Http {
    static instance = new Http()
    
    BASE_URL = 'http://192.168.1.62:8000/api/v1'

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
                    'Content-Type': 'application/json'
                    },
                    body
                }  
            let req = await fetch(`${this.BASE_URL}${resource}`,config)

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