const db = require('../utils/dataBaseConnection');
class sendingToDB { 
    async addItem(item){
        try {
            let {title}=  item;
            const query ="INSERT INTO list (title) VALUES(?)";
            await db.connection.execute(query, [title]);
        }catch(error){
            console.log(error.message);
            throw new Error('ERROR'); 
        }

    }
    async getItem(){
        try {
            const query ="SELECt * FROM list";
            let [data] = await db.connection.execute(query);
            return data;
        }catch(error){
            console.log(error.message);
            throw new Error('ERROR');
        }

    }

    async deleteOption(id){
        try {
            const queryFind ="SELECT * FROM list WHERE id = ?";
            let [dataFromBack] =await db.connection.execute(queryFind,[id]);
            
            if(dataFromBack.length === 0 ){
                throw new Error('option not found');
            }
            const queryDelete ="DElETE FROM list WHERE id = ?";
            await db.connection.execute(queryDelete,[dataFromBack[0].id]);
            
            return true;
        }catch(error){
            console.log(error.message);
            throw new Error('ERROR');
        }

    }

    async edittingOption(id){
        try {
            const queryFind ="SELECT * FROM list WHERE id = ?";
            let [dataFromBack]=await db.connection.execute(queryFind,[id]);
            return dataFromBack;
        }catch(error){
            console.log(error.message);
            throw new Error('ERROR');
        }
    }
    async editItemBD(title , id){
        try { 
            const queryFind ="SELECT * FROM list WHERE id = ?";
            let [dataFromBack] =await db.connection.execute(queryFind,[id]);
            
            if(dataFromBack.length === 0 ){
                throw new Error('option not found');
            }
                const queryEdite ="UPDATE list SET title=? WHERE id = ?";
                await db.connection.execute(queryEdite,[title,id]);
            
            return true;
        }catch(error){
            console.log(error.message);
            throw new Error('ERROR');
        }

    }
    
}

module.exports = new sendingToDB();