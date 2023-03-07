export default class UserModel{
    name: string;
    email: string;
    message: string;

constructor(){


}

//comando para converter em string
toString(): string{
    return JSON.stringify(this);

}
//comando para converter para JSON  
toJson(userStringed: string): UserModel{

    return JSON.parse(userStringed) as UserModel;

}


}