import { z } from "zod";

export const projectSchema = z.object({
    name : z.string(),
    client_name : z.string(),
    description : z.string(),
    team_lead : z.string(), //
    startDate : z.string(),
    deadline : z.string(),
    attachments : z.string(),  // files
    budget : z.string(),
    client_email : z.string(),
    client_contact : z.string()
})