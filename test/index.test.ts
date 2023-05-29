import  request  from "supertest";
import App from '../src/App'

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
                const res = await request(app.app).get('/listar_medicos') 
                expect(res.statusCode).toEqual(200);
            }
        )
    }
)

