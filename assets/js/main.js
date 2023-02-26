// toggle bar sidebar

$(document).ready(function(){
    $("#toggleBar").click(function(){
        $("#sidebar").toggleClass("hide");
        $(".main-content").toggleClass("show");
        $(".sidebar").removeClass('sidebar-hide');
    });


    $(".sub-menu ul").hide();
    $(".sub-menu a").click(function(){
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa fa-angle-up fa fa-angle-down");
    });



    $(".profile").hide();

    $("#profile").click(function(){
        $(".profile").toggle();
    });
});

// validation javascript


(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




// Datatable

$(document).ready( function () {
    var table = $('#table_id').DataTable();

    $('#myInput').on('keyup change', function () {
      table.search(this.value).draw();
    });
});


$('#table_id').DataTable( {
  dom: 'Bfrtip',
    buttons: {
      buttons: [
          { extend: 'copy', className: 'button2 btn-info' },
          { extend: 'excel', className: 'button2 btn-info' },
          { extend: 'print', className: 'button2 btn-info' },
          { extend: 'pdf', className: 'button2 btn-info' },
      ]
    }
} );



















