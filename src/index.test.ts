import  request  from "supertest";
import App from './App'

describe(
    'GET /',
    ()=>{
        let app: App

        beforeAll(()=>{
            app = new App()
            app.start()
        })

        afterAll(()=>{
            app.close()
        })

        test(
            'Estatus ok',
            async ()=>{
                const res = await request(app.app).get('/') 
                expect(res.statusCode).toEqual(200);
            }
        )
    }
)

