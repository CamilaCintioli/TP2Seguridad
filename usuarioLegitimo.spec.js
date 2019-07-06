const Axios = require('axios')

const axios = Axios.create({
    baseURL: "http://localhost:3000"
})

const token = "fafafa"

describe("usuarioLegitimo", () => {
    test("obtiene la informacion si esta autorizado", () => {
        expect(
            axios
            .get('/', { headers: { "Authorization": token } })
            .then(({ data: { data } }) => data)
            ).resolves.toEqual("TOP SECRET INFORMATION")
    })

    test("no obtiene la informacion si no esta autorizado", () => {
        expect(
            axios
            .get('/')
            .catch((response) => {
                return response.message
            })
            ).resolves.toContain(401)
    })
})