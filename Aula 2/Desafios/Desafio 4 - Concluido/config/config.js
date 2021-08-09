// config.js
module.exports = {
	jwtSecret: "sPOdQyS3cr3tK3Y",
	jwtSession: {session: false}
};

/*-----------jwtSecret---------------------------------------------------------------------------------------
	O campo jwtSecret mantém uma chave secreta que serve como base para codificar e decodificar os tokens.
------------------------------------------------------------------------------------------------------------*/

/*-----------jwtSession-----------------------------------------------------------------------
	Para terminar, o último campo incluído é jwtSessionque tem o objeto {session: false}. 
	Este item é usado para informar o Passport de que a API não gerenciará a sessão.
---------------------------------------------------------------------------------------------*/