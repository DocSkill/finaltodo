$(function () {
	
	

	
	// Remove SVG goes here 
	var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32"><g data-name="Layer 2"><g data-name="Layer 1"><path class="fill" d="M29,5H21V1a.94.94,0,0,0-1-1H10A.94.94,0,0,0,9,1V5H1A.94.94,0,0,0,0,6,.94.94,0,0,0,1,7H3V31a.94.94,0,0,0,1,1H26a.94.94,0,0,0,1-1V7h2a.94.94,0,0,0,1-1A.94.94,0,0,0,29,5ZM11,25a.94.94,0,0,1-1,1,.94.94,0,0,1-1-1V14a.94.94,0,0,1,1-1,.94.94,0,0,1,1,1ZM11,2h8V5H11Zm5,23a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm5,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z"/></g></g></svg>';

	// renderTodoList();

	$('#addBtn').on('click', function() {
		var value = $('#item').val();
		if (value) {

			addItemTodo(value);
			$('#item').val("");



		}

		if (value == "") {
			$('#item').addClass('animated shake').one('webkitanimationEnd mozanimationEnd MSanimationEnd onanimationend animationend',
				function() {
					$(this).removeClass('animated shake');
				});
		}
		
	});



	// Remove item
	function removeItem() {
		var item = this;
		var parent = item.parentNode;
		

		parent.remove(item);

		

	}

	function completeItem() {
		$(this).toggleClass('completedTaskCircle');
		$(this.parentNode).toggleClass('completedTaskList');


	}


	// Adds new item to the list
	function addItemTodo(text, completed) {
		var list = $('#todo');

		var item = document.createElement('li');
		item.innerText = text; 

		var circle = document.createElement('div');
		circle.classList.add('circle');

		$(circle).on('click', completeItem);

		var remove = document.createElement('div');
		remove.classList.add('trashCan');
		remove.innerHTML = removeSVG;

		$(remove).on('click', removeItem);
		


		item.append(circle);
		item.append(remove);

		list.prepend(item);

		$('li').addClass('animated slideInDown').one('webkitanimationEnd mozanimationEnd MSanimationEnd onanimationend animationend',
			function() {
				$(this).removeClass('animated slideInDown');
			});

	}


});

