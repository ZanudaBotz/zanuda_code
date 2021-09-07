
$(document).ready(function () {



$('#save_doc_btn').one("click", function () {
    let txt = $(".txt_window");
    let name_of_doc = $("#doc_name")
    let data = {
        text: txt.val(),
        file_name: name_of_doc.val(),
      }
      data = JSON.stringify(data);
      console.log(data);
      
  $.post({
      url: "http://localhost:8080/docs",
      data: data,
      contentType: "application/json"
  } )
});


$("#load_finded_doc").on('click', function () {
    let find_file_name = $('#find_doc')
    let data = {
        finded_file_name: find_file_name.val(),
      }
      data = JSON.stringify(data);
      
  $.post({
      url: "http://localhost:8080/saved_docs",
      data: data,
      contentType: "application/json",
      success: function(data){
        console.log(data)
        $('.txt_window').val(data);
      }
  })
});


 $("#red_doc_btn").on("click", function () {
    let find_file_name = $('#find_doc')
    let txt = $(".txt_window");
    let data = {
        finded_file_name: find_file_name.val(),
        text: txt.val(),
      }
      data = JSON.stringify(data);
      console.log(data);
      $.post({
        url: "http://localhost:8080/red_docs",
        data: data,
        contentType: "application/json"
    })
   });
});