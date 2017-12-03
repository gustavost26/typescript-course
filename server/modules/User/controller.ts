import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import User from './service';

class UserController {

    private UserService: User;

    constructor(){
        this.UserService = new User();
    }

    getAll(req: Request, res: Response){
        this.UserService
            .getAll()
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: 'Erro ao buscar todos usuários'
                });
            })
    }

    createUser(req: Request, res: Response){
        this.UserService
            .create(req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: 'Erro ao cadastrar novo usuário'
                });
            })
    }

    getById(req: Request, res: Response){
       const userId = parseInt(req.params.id);
        this.UserService
            .getById(userId)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: 'Erro ao buscar usuário'
                });
            })
    }

    updateUser(req: Request, res: Response){
        const userId = parseInt(req.params.id);
        const props = req.body;
        this.UserService
            .update(userId, props)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: 'Erro ao buscar todos usuários'
                });
            })
    }

    deleteUser(req: Request, res: Response){
        const userId = parseInt(req.params.id);
        this.UserService
            .delete(userId)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: 'Erro ao excluir usuário'
                });
            })
    }

}

export default UserController;