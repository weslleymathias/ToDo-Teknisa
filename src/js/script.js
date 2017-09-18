$(document).ready(function(){
        $("#concluir").click(function(){
          var nomeTarefa = $("#tarefa").val();
          var dataInicio = $("#datainicio").val();
          var dataFim = $("#datafim").val();
          var concluida = $("#concluida").val();
          var a = "";
          if (nomeTarefa != "" && dataInicio != "" && dataFim != "" ){
            if($("#concluida").is(':checked'))  
                a = "marcado";

            if (a == "marcado") {
              $("#myTable").append("<div id=id" + nomeTarefa + "><p><b>Nome da Tarefa:</b> " + nomeTarefa + "</p> <p><b>Data de Início:</b> " + dataInicio + "</p> <p><b>Data de Término:</b>" + dataFim + "</p> <p><b>Concluída:</b> <i class=\"fa fa-check\"></i></p> <button type=\"button\" class=\"btn btn-danger\" name=\"excluir\" id=id" + nomeTarefa + " onclick=\"myFunction()\"><span class=\"glyphicon glyphicon-remove\"></span> Excluir</button><hr> </div>");
            } else {
              $("#myTable").append("<div id=id" + nomeTarefa + "><p><b>Nome da Tarefa:</b> " + nomeTarefa + "</p> <p><b>Data de Início:</b> " + dataInicio + "</p> <p><b>Data de Término:</b>" + dataFim + "</p> <p><b>Concluída:</b> Não</p> <button type=\"button\" class=\"btn btn-danger\" id=id" + nomeTarefa + " onclick=\"myFunction()\"><span class=\"glyphicon glyphicon-remove\"></span> Excluir</button> <hr> </div>");
            }
          } else{
            alert("Preencha todos os dados!");
          }
          


           /* $("#myTable").append("<div id=id" + nomeTarefa + "><p>Nome da Tarefa: " + nomeTarefa + "</p> <p>Data de Início: " + dataInicio + "           Data de Término:" + dataFim + "</p> <p>Concluída: "+ concluida +"<i class=\"fa fa-check\"></i></p> <hr> </div>");*/
          //  alert(nomeTarefa);
        });
        
    });
    
function myFunction() {
  $(this).remove();
  
}