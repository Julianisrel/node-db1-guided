<!--  never trust user data  -->



# your not limited to make one database query on an endpoint you can make two so takiing the resuslting id and use it to call another select  statement from the database to get that new message from the database and return that message-->   (.first = .limit for destructing )
1:54 


router post("/, async (req, res, next) => {
    try {
        const [id] = await db 
             .insert({
                 .from("messages)
                 .where("id", id)
                 .limit(1)
             })
             res.send(201).json(messages)
    } catch(err) {

    }  next(err)

})

<!-- where filers through the data  -->