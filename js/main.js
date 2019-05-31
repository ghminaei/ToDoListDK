$(document).ready(function(){
    $("#btn_Add").click(function() {
        var newTodoItem = $("#txt_Task").val();
        if (newTodoItem != "") {
            $("#lst_ToDo").append('<div><li class="class2">\n<span class="sText"> - ' + newTodoItem + '     </span>\n<input type="text" id="edit" style="display:none" />\n</li>\n<i class="trash-icon list-icon fas fa-trash"></i>\n<i class="edit-icon list-icon fas fa-edit"></i>\n</div>');
            $("#txt_Task").val("");
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass("class1");
        $(this).toggleClass("class2");
    });
    
    $(document).on('click', '.trash-icon', function () {
        $(this).closest('div').fadeOut('slow');
    });

    $(document).on('click', '.edit-icon', function(){
        var thisLi = $(this).siblings('li');
        thisLi.children('span').hide();
        thisLi.children('input').show().val(thisLi.children('span').text()).focus();
    });
    
    $(document).on('focusout', '#edit', function(){
        $(this).hide(); 
        $(this).siblings("span").show().text(' - ' + $(this).val());
    });
}); 