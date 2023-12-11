const PORT = 3000;

import cors from "cors"
import express from "express"
import { zodiosContext } from "@zodios/express"
import z from "zod";
// Generated zodios client
import {api} from "../kubb/dist/generated/zodios.js"
import { userBodySchema } from "../kubb/dist/generated/zod/userBodySchema.js"

const app = zodiosContext(z.object({
    user: z.any()
})).app(api.api, {
    express: express(),
    validate: true,
    validationErrorHandler: (err) => {throw err}
});

app.get("/users/:userId/info", (req, res) => {
    // res.json is typed thanks to zod
    res.json({
        //   auto-complete req.params.id
        //              ▼
        id: req.params.userId,
        name: "John Doe",
    });
})


/* userBodySchema.shape["id"].parseAsync("q8uwq8w7") */

app.use(cors())

app.listen(PORT, () => {
    // Should be allowed?
  fetch('http://localhost:3000/users/13131/info').then(async (res)=> {
        console.log("Error shpuld happen here, try to fetch with allowed path parameter.")
        const data = await res.json();
        console.log("Request", data)
    }).catch((err)=>{
        console.log(err)
    }) 
})