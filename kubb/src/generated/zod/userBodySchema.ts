import { z } from "zod";


export const userBodySchema = z.object({"id": z.number().optional(),"age": z.number().optional(),"name": z.string().optional()});