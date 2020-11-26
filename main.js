
var form = document.getElementById('form')
	form.addEventListener('submit', function(e){
		e.preventDefault()

		var placa = document.getElementById("placa")
		const dado = placa.value;
		
		const url = `https://apicarros.com/v1/consulta/${dado}/json`;
		

		fetch(url).then(response =>{
	  return response.json();
	    })
	    .then(data =>
	    {
	        if(data.erro)
	 {
	 alert(message);
	 return ;
	 }
	 atribuirCampos(data);
	 
	})


	function atribuirCampos(data)
	{
	const ano = document.querySelector("#ano");
	const anoModelo = document.querySelector("#anoModelo");
	const chassi = document.querySelector("#chassi");
	const cor = document.querySelector("#cor");
	//const marca = document.querySelector("#marca");
	const modelo = document.querySelector("#modelo");
	const municipio = document.querySelector("#municipio");
	const placa = document.querySelector("#placaxx");
	const situacao = document.querySelector("#situacao");
	const uf = document.querySelector("#uf");

	ano.value = data.ano;
	anoModelo.value = data.anoModelo;
	chassi.value = data.chassi;
	cor.value = data.cor;
	//marca.value = data.marca;
	modelo.value = data.modelo;
	municipio.value = data.municipio;
	placaxx.value = data.placa;
	situacao.value = data.situacao;
	uf.value = data.uf;
	}

	
	})
	function XXXX(){

		var ano = document.getElementById("ano").value;
		var anoModelo = document.getElementById("anoModelo").value;
		var chassi = document.getElementById("chassi").value;
		var modelo = document.getElementById("modelo").value;
		var placaxx = document.getElementById("placaxx").value;
		var situacao = document.getElementById("ano").value;
		var situacao = document.getElementById("situacao").value;
		var municipio = document.getElementById("municipio").value;
		var uf = document.getElementById("uf").value;

}