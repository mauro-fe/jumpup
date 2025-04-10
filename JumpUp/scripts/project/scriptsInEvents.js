

const scriptsInEvents = {

	async Level1events_Event6_Act1(runtime, localVars)
	{
		//obter valor da variável global vidas
		let vida = runtime.globalVars.Vidas;
		//reduzir uma vida
		vida --;
		//atualiza a variavel global no construct 3
		runtime.globalVars.Vidas = vida;
		
		if(vida <= 0){
		runtime.goToLayout("telaGameOver");
		}
	},

	async Level1events_Event7_Act1(runtime, localVars)
	{
		//obter valor da variável global vidas
		let vida = runtime.globalVars.Vidas;
		//reduzir uma vida
		vida --;
		//atualiza a variavel global no construct 3
		runtime.globalVars.Vidas = vida;
		
		if(vida <= 0){
		runtime.goToLayout("telaGameOver");
		}
	},

	async Level1events_Event12_Act5(runtime, localVars)
	{
		let pontos = runtime.globalVars.Pontos;
		pontos++;
		runtime.globalVars.Pontos = pontos;
	},

	async Level1events_Event13_Act5(runtime, localVars)
	{
		//obter valor da variável global vidas
		let vida = runtime.globalVars.Vidas;
		//reduzir uma vida
		vida ++;
		//atualiza a variavel global no construct 3
		runtime.globalVars.Vidas = vida;
	},

	async Level1events_Event17_Act2(runtime, localVars)
	{
		//obter valor da variável global vidas
		let vida = runtime.globalVars.Vidas;
		//reduzir uma vida
		vida --;
		//atualiza a variavel global no construct 3
		runtime.globalVars.Vidas = vida;
		
		if(vida <= 0){
		runtime.goToLayout("telaGameOver");
		}
	},

	async Level1events_Event20_Act5(runtime, localVars)
	{
		let pontos = runtime.globalVars.Pontos;
		pontos ++;
		runtime.globalVars.Pontos = pontos;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
