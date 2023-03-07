import UserModel from "../model/user-model";
import { HttpResponse } from "../types/types";
//Envia informações ao servidor
export async function postUserData(userModel: UserModel): Promise<HttpResponse>{
    
    const data = JSON.stringify(userModel);
    console.log('Dados enviados', data);

    try{
        const response = await fetch('https://1f06-200-151-150-138.sa.ngrok.io/user', {       
            method: 'POST',
            headers: {//cabeçalho: para saber o tipo de informação é enviada
                'Content-Type': 'application/json',//trafegando o arquivo tipo JSON
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        });

        const result = await response.json();//muda de string para JSON
        
        if(response.status === 200){
            return {
                message: "Created",
                status: 201,
                data: result
            } as HttpResponse;
        }else{
            return {
                message: "Error",
                status: response.status,
                data: response.statusText
            } as HttpResponse;
        }
    }catch(e){
        throw e;       
    }
    
}