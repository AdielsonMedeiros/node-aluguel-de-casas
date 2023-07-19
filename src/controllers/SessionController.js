//metodos que podem ter dentro de um controller: index,  show, update, store, destroy
//index: listagem de sessoes
//store: criar uma  sessao
//show: quando queremos listar uma unica sessao
//destroy: quando queremos deletar uma sessao
import User from "../models/User";
import * as Yup from 'yup'




class SessionController{
    async store(req,res){

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        })
        const {email} = req.body;

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Falha na validação.'})
        }

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