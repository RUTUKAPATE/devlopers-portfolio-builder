import { relations } from "drizzle-orm";

const { pgTable, serial, varchar, text, integer, boolean} = require("drizzle-orm/pg-core");

export const userInfo=pgTable('userInfo',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    username:varchar('user').notNull(),
    bio:text('bio'),
    location:varchar('location'),
    link:varchar('link'),
    profileImage:varchar('profileImage'),
    theme: varchar('theme').default('light')
})

export const project=pgTable('project',{
    id:serial('id').primaryKey(),
    name:varchar('name'),
    desc:text('desc'),
    url:varchar('url').notNull(),
    logo:varchar('logo'),
    banner:varchar('banner'),
    category:varchar('category'),
    active:boolean('active').default(true),
    emailRef:varchar('emailRef'),
    userRef:integer('userRef').references(()=>userInfo?.id),
    showGraph:boolean('showGraph').default(true),
    order:integer('order').default(0)
})

export const userProjectRelation=relations(userInfo, ({many}) => (
    {
        projects:many(project)
    }
))

export const postRelation=relations(project, ({one}) => (
    {
        user:one(userInfo,{fields:[project.userRef],references:[userInfo.id]})
    }
))