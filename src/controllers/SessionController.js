//metodos que podem ter dentro de um controller: index,  show, update, store, destroy
//index: listagem de sessoes
//store: criar uma  sessao
//show: quando queremos listar uma unica sessao
//destroy: quando queremos deletar uma sessao
import User from "../models/User";




class SessionController{
    async store(req,res){
        const {email} = req.body;

        //verificando se esse usuario já existe
        let user = await User.findOne({email})

        //se ele nao existir aí criaremos um novo
        if(!user){
            user = await User.create({email});
        }
        
        //retorna os dados simbolizando que está logado
        return res.json(user);
    }
}

export default new SessionController();