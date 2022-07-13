  // function para establecer el color
  function setTheme(themeName) {  
	localStorage.setItem('theme', themeName);  
	document.documentElement.className = themeName;  
  }  
  // function para alternar entre light & dark  
  function toggleTheme() {  
	if (localStorage.getItem('theme') === 'theme-dark') {  
	  setTheme('theme-light');  
	} else {  
	  setTheme('theme-dark');  
	}  
  }  
  // determina el tema   
  (function () {  
	if (localStorage.getItem('theme') === 'theme-dark') {  
	  setTheme('theme-dark');  
	  document.getElementById('slider').checked = false;  
	} else {  
	  setTheme('theme-light');  
	 document.getElementById('slider').checked = true;  
	}  
  })(); 