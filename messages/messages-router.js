const express = require("express")
const db = require("../data/config")

const router = express.Router()

// we use Promises  (async) for endpoint timestamp 1:38
router.get("/", async (req, res, next) => {
    try {
        // endpoint code here( Select * From messages )
        const messages = await db.select("*").from("messages")

        res.json(messages)
    } catch (err) {
        next(err)
    }

})

router.get("/:id", async (req, res, next) => {
// translates to ''SELECT * FROM messages WHERE Id = ?
 try {
  const [message] = await db
       .select("*")
       .from("messages")
       .where("id",req.params.id)
        // .limit(1) created a flat object when requested endpoint 


       // send this back to with our response 
       res.json(message)
    
    } catch(err) {
     next(err)
    }
})
//  timestamp 1:53 for a restructure requesting two endpoints in the database 
router.post("/", async (req, res, next) => {
  try {
    // translates into to INSTERT INTO MESSAGES (titles, contents) values (?, ?);
     const message = await db
        // .insert(req, body)-- incase the body as soemthing else in it-- 
     .insert({
        //  the dataBase is automatically generate the ID
         title: req.body.title,
         contents: req.body.contents,
     })
     .into("messages")
     res.status(201).json(message)
    } catch {
     next(err)

  } 
})

router.put("/:id", (req, res, next) => {
//  Transalate to update message SET title = ? Where id = ?;
})

router.delete("/:id", (req, res, next) => {
// translate to DELETE FROM messages where id =?;
})

module.exports = router