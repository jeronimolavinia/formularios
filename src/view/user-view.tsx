import React from 'react';
import { ViewProps, ViewState } from '../types/types';


//props: argumentos passados para os componentes react como atributos HTML => propriedades 
class UserView extends React.Component<ViewProps, ViewState>{ 
  //'ViewProps e ViewState ==> Parametros denifidos no arquivo types
  render(){

    const {
      name,
      email,
      message,
      handleChange,
      handleSubmit,
      formSent
    } = this.props;

    return(
      <form onSubmit={handleSubmit}> 
        <h1>Formulário de inscrição</h1>
        <input placeholder='Name' 
        value={name}
        onChange={handleChange}//vai trazer uma mudança 
        name = 'name'
        />
        <input placeholder='Email'
        value={email}
        onChange={handleChange}
        name = 'email'
        />
        <input placeholder='Message'
        value={message}
        onChange={handleChange}
        name ='message'
        />
        <button type="submit">Enviar</button>
        <span>{formSent?'Formulário enviado com sucesso!':''}</span> 
      </form>
    );     
  }
}  
//ternário: verifica se a mensagem enviada é verdadeira ou falsa   
//<span>{formSent?'Formulário enviado com sucesso!':''}</span> 
      
export default UserView;