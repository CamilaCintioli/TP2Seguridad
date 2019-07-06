const Axios = require('axios')

const axios = Axios.create({
    baseURL: "http://localhost:3001"
})

describe("usuarioMalicioso", () => {
    // test("obtiene la informacion sin estar autorizado", () => {
    //     expect(
    //         axios.get('/')
    //             .then(({ data }) => data)
    //     ).resolves.toEqual("TOP SECRET INFORMATION")
    // })

    test("no deberia obtener la informacion sin estar autorizado", () => {
        expect(
            axios.get('/')
                .catch((response) => {
                    return response.message
                })
        ).resolves.toContain(401)
    })


})