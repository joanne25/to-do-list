$(document).ready(function(){
    
    
    var theList = document.getElementById('theList');
    var listItem = document.getElementsByClassName('list-item');
    
    
    
    $('.container-header ul').sortable({
        items: "li:not('.listTitle')", 
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"

    });

    
    
    
    $('.add-button').on('click', function(e){
       var newItem = $('.add').val();
        $(this).parent().parent().append('<li class="list-item"><input class="listItem" value="' +newItem +' "><a class="removeListItem"  href="#"> X </a></li>'); 
       $('.add').val('');
        $('.add').focus('');
      
        $('#theList').disableSelection(); 
        
        localStorage.setItem('todoListPlus', listItem.innerHTML);
    });
    
    
    
    
    
    
    $('input').keydown(function(e){
    if(e.keyCode == 13){
        var newItem = $(this).val();
        
        $(this).parent().parent().append('<li class="list-item"><input class="listItem" value="' +newItem +' "><a class="removeListItem"  href="#"> X </a></li>');
        $(this).val('');
       
        
    }
    
});
    

    
    
    $('.container-header-list').on('click', '.removeListItem', function(e){
        e.preventDefault();
        $(this).parent().remove();
        localStorage.setItem('todoListPlus', listItem.innerHTML);
    });

    $('#theList').on('change', '.listItem', function(e){
        currentValue = $('.listItem').val();
        $('.listItem').attr('value', currentValue);
        localStorage.setItem('todoListPlus', listItem.innerHTML);
    }); 
    
    

//    $('.sortable').sortable().bind('sortupdate', function() {
//        localStorage.setItem('todoListPlus', listItem.innerHTML);
//    });
    
 
    
    
    loadToDo();
    function loadToDo(){
        if(localStorage.getItem('todoListPlus')){
            listItem.innerHTML = localStorage.getItem('todoListPlus');
//            $('#theList').sortable();   
            $('#theList').disableSelection(); 
            
        }
    };
    
    
    
    
    
});