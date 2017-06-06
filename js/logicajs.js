$(function(){
	var estado = true; //Si es TRUE Cifrara, de lo contrario DESCIFRARA
	$("#textareaDescifrar").attr("readonly",true);
	$("#chkCifrar").change(function(){
		if(!$(this).is(":checked")){
			estado = true;
			$("#textareaDescifrar").attr("readonly",true);
			$("#textareaCifrar").attr("readonly",false);
		}else{
			estado = false;
			$("#textareaCifrar").attr("readonly",true);
			$("#textareaDescifrar").attr("readonly",false);
		}
	});
	
	$("#btnConvertir").click(function(){
		if (estado) {
			var textoPlano = $("#textareaCifrar").val();
			var cadenaCifrada = window.btoa(textoPlano);
			$("#textareaDescifrar").val(cadenaCifrada);
		}else{
			var textoCifrado = $("#textareaDescifrar").val();
			var textoPlano = window.atob(textoCifrado);
			$("#textareaCifrar").val(textoPlano);
		}
		Materialize.updateTextFields();
	});
});