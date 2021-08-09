log4js         = require('log4js');
fs             = require('fs');
dateFormat     = require('dateformat');
defined        = require('./defined')();
Log            = require('./WriteLog')();
var findRemoveSync = require('find-remove');
           
var getTime = function(){
  return dateFormat(new Date(), "yyyy-mm-dd").toString();
}

module.exports = function () {

    var controller   = {}

    controller.Inicializa = function (){
      /* Fazer um directório de registo , apenas no caso de ele não está lá .*/
      /*
        * var loggerDebug = log4js.getLogger('DEBUG'); 
        * loggerDebug.trace('error - test');
        * loggerDebug.debug('debug.');
        * loggerDebug.info('info.');
        * loggerDebug.warn('warrn.');
        * loggerDebug.error('error!');
        * loggerDebug.fatal('FatalError.');
      */
     try {
        require('fs').mkdirSync('./logs');
      } catch (e) {
        if (e.code != 'EEXIST') {
          console.error("Não foi possível acessar o diretório de log , erro: ", e);
          process.exit(1);
        }
      }

     //------- create fileLog -----------------------------------------------------------//
      log4js.loadAppender('file');
      log4js.addAppender(log4js.appenders.file('./logs/LogSystem_V1_0_0_'+getTime()+'.log'), 'DEBUG');
      log4js.configure({
            appenders: [
                          //1000000000  // bytes - 1 GigaByte
                          //1000000     // bytes - 1 MegaByte
                          //1000        // bytes - 1 KiloByte
                         {
                            "type": "file",
                            "absolute": true,
                            "maxLogSize":  1000,        // bytes - 1 KiloByte
                            "filename": "./logs/LogSystem_V1_0_0_"+getTime()+".log",
                            "backups": 3,
                            "category": "file", 
                            "replaceConsole":true
                        },
                        {
                            "type": "console",
                            "category": "console"
                         } 
                      ]
            });   

          return log4js;
      } 

      controller.ApagaLog = function (logconsole, logfile){
        /*  Tempos para entrar no Timer
            Segundos: 3600   = 1 hora    
            segundos: 84400  = 24 horas  = 1  dia
            segundos: 864000 = 240 horas = 10 dias  
        */
        try {
            var result = findRemoveSync('./logs', { age: {seconds: 10}, extensions: ['.log', '.log.1','.log.2','.log.3','.log.4','.log.5','.log.6','.log.7','.log.8','.log.9','.log.10']});
            console.log(result);
            if(result !== null){
              Log.EscreveMsgInfoLog(logconsole, logfile,"Deletou arquivos: ");
              console.dir(result)  
            }  
        } catch (e) {
            if (e.code != 'EEXIST') {
              console.error("Não foi possível Apagar arquivo , erro: ", e);
            }
        }
      }

  return controller;
};