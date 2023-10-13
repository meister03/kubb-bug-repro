const PORT = 3000;

import cors from "cors"
import express from "express"
import { zodiosContext } from "@zodios/express"
import z from "zod";
// Generated zodios client
import {api} from "../kubb/dist/generated/zodios.js"

const app = zodiosContext(z.object({
    user: z.any()
})).app(api.api, {
    express: express()
});

app.get("/users/:userId", (req, res) => {
    // res.json is typed thanks to zod
    res.json({
        //   auto-complete req.params.id
        //              ▼
        id: req.params.userId,
        name: "John Doe",
    });
})

app.use(cors())

app.listen(PORT, () => {
    // Should be allowed?
    fetch('http://localhost:3000/users/12030').then(async (res)=> {
        const data = await res.json();
        console.log("Request", data)
    }).catch((err)=>{
        console.log(err)
    })
})