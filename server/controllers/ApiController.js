const {BakerModel} = require('./../models/ApiModel');

const BakerController = {

    allCakes: function(req, response){
        BakerModel
        .getAllCakes()
        .then( data => {
            let baker = data.map(tasks => {
                console.log( "Backer: ", tasks );
                return tasks;
            })
        console.log( baker );
        response.status( 200 ).json( {message: "Success!", baker: baker} );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
            response.json( err );
        })
    },

    addCake: function(request, response){

        let firstname = request.body.bakerFN;
        let lastname = request.body.bakerLN;
        let image = request.body.image;
        let created_at = new Date();
        console.log("Add: ", firstname);

        if(firstname){
            newCake = {
                firstname,
                lastname,
                image,
                created_at,
            }
            console.log("New Baker info: ", newCake);

            BakerModel
                .addCake( newCake )
                .then( result => {
                    response.status( 201 ).json( {message: "Success!", added: true, task: result } );
                });
        }
        else{
            response.statusMessage = "You are missing a field to create a new baker ('Firstname')";
            response.status( 406 ).end();
        }
    },

    findById : function ( request, response ) {
        let id = request.params.id;
        console.log("HERE: ", id);

        BakerModel
            .findById(id)
            .then( titles => {
                let cake = titles
                console.log("HERE2: ", cake);
                response.status( 200 ).json(cake);
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
                response.json( err );
            })
    },

    removeTask : function(request, response){
        let title = request.params.title;
        console.log("HERE222 :", title);

        BakerModel
            .getTaskByName( title )
            .then( result => {
                if( result === null ){
                    console.log( "Something went wrong!" );
                }
                else{
                    TaskModel
                        .delete( title )
                        .then( result => {
                            response.status( 204 ).end();
                        });
                }
            })
    },

    update : function(request, response) {
        let title = request.params.title;
        console.log("Success L1 :", title);

        BakerModel
            .getTaskByName(title)
            .then(result => {
                if( result === null ){
                    console.log( "Something went wrong!" );
                    response.json({message: "Error!", error: err});
                }
                else {
                    let task = result;
                    console.log("HERE", task);
                    response.status( 200 ).json( {message: "Success!", cake : cake} );
                    if(task.title === request.body.title){
                        response.json({message: "Error!"});
                    }
                    if(request.body.title){
                        task.title = request.body.title;
                    }
                    if(request.body.description){
                        task.description = request.body.description;
                    }
                    if(request.params.completed){
                        task.completed = request.body.completed;
                    }
                    task.save(function(err){
                        if(err){
                            console.log("AHHHHHHHHHHHHHH EROR 1");
                            response.json({message: "Error!", error: err});
                        }
                        else{
                            console.log("AHHHHHHHHHHHHHH EROR 2");
                            console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW ", task);
                            response.status(200).json({message: "Success!", task: task})
                        }
                    })
                }
            })
            
    }
    
}

module.exports = {BakerController};

//----------------------------------------------------dadaaad