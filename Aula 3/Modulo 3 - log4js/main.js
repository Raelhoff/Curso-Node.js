var     ControlLog     = require('./LogSystem/ControlLog')(),
    	log4js         = ControlLog.Inicializa(), 
        logfile        = log4js.getLogger('file'),
        logconsole     = log4js.getLogger ('console'),
        Log            = require('./LogSystem/WriteLog')(),
        logDefined     = require('./LogSystem/defined')();

//Exibe todos os tipos de logs que podem ser inseridos
 Log.EscreveMsgErrorLog(logconsole, logfile, "Mensagem de erro!!");

 Log.EscreveMsgInfoLog(logconsole, logfile, "Mensagem informativa!");

 Log.EscreveMsgWarLog(logconsole, logfile, "Mensagem de aviso!");

 Log.EscreveMsgErrorFatalLog(logconsole, logfile, "Mensagem de error fatal!");

 Log.EscreveMsgtraceLog(logconsole, logfile, "Mensagem de aviso trace!");

 Log.EscreveMsgDebugLog(logconsole, logfile, "Mensagem de Debug!");

 Log.ErrorClient(logconsole, logfile, 401);


//Exibe somente os logs (info, debug, warn, error e fatal) que estao habilidatos pelo defined
 if(logDefined.info){
 	Log.EscreveMsgInfoLog(logconsole, logfile, "Estou habilitado info!");
 }

 if(logDefined.debug){
	Log.EscreveMsgDebugLog(logconsole, logfile, "Estou habilitado Debug!");
 }
 
 if(logDefined.warn){
 	Log.EscreveMsgWarLog(logconsole, logfile, "Estou habilitado warn!");
 }
 
 if(logDefined.error){
 	 Log.EscreveMsgErrorLog(logconsole, logfile, "Estou habilitado erro!!");
 }

 if(logDefined.fatal){
 	Log.EscreveMsgErrorFatalLog(logconsole, logfile, "Estou habilitado  fatal!");
 }

//setInterval(function(){ 
//	Log.EscreveMsgDebugLog(logconsole, logfile, "TEST ----------------------------> FIM!");	
 //}, 1000);


//Utilizado para apagar os logs no depois de uma semana
//setInterval(function(){
//	ControlLog.ApagaLog(logconsole, logfile);
//},3000);
