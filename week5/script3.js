function onClick() {
	var name = document.querySelector('#name');
	var surname = document.querySelector('#surname');
	var faculty = document.querySelector('#faculty');

	name.classList.remove("error");
	surname.classList.remove("error");
	faculty.classList.remove("error");

	const table = document.querySelector('#students');
	if(name.value!="" && surname.value!="" && faculty.value!=-1){
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');td1.textContent = name.value;
		const td2 = document.createElement('td');td2.textContent = surname.value;
		const td3 = document.createElement('td');
		const strong = document.createElement('strong');strong.textContent = faculty.value;
		td3.appendChild(strong);
		tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);
		table.appendChild(tr);
	}
	else{
		if(name.value==""){
			name.classList.add("error");
		}
		if(surname.value==""){
			surname.classList.add("error");	
		}
	}
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);