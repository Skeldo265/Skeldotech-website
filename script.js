function searchSite(){
    let query = document.getElemenetById("searchBox").value.toLowerCase();
    let result = document.getElementById("searchResult");
    if (query.includes("programming")){
        result.innerHTML = 'Found: <a href ="courses.html">Introduction to Programming C</a>';
    }
    else if (query.includes("End User Computing")) {
        result.innerHTML = 'Found: <a href="courses.html">End User Computing</a>';
    } 
    else if (query.includes("Computer and Communication Technology")) {
        result.innerHTML = 'Found: <a href="courses.html">Computer and Communication Technology</a>';
    } 
    else if (query.includes(Pre-calculus)) {
        result.innerHTML = 'Found: <a href="courses.html">Pre-calculus<\a>';
    }
    else if (query.includes("Communication Skill I")) {
        result.innerHTML = 'Found: <a href="courses.html">Communication Skill I</a>';
    }
        else if (query.includes("Introduction to Teaching Proffesional(EDU ICT)")) {
            result.innerHTML = 'Found: <a href="courses.html">Introduction to Teaching Proffesional(EDU ICT)y</a>';
    }
    else if (query.includes("PC Maintaince and Mainagement")) {
    result.innerHTML = 'Go to: <a href="courses.html">PC Maintaince and Mainagement</a>';
    }
    else if (query.includes("Computer Architecture")) {
    result.innerHTML = 'Go to: <a href="courses.html">Computer Architecture</a>';
    }
    else if (query.includes("Multimedia")) {
    result.innerHTML = 'Go to: <a href="courses.html">Multimedia</a>';
    } else if (query.includes("Calculus")) {
    result.innerHTML = 'Go to: <a href="courses.html">Calculus</a>';
    }
    else if (query.includes("Communication Skill II")) {
    result.innerHTML = 'Go to: <a href="courses.html">Communication Skill II</a>';
    }
    else if (query.includes("Contemporary and Emerging Issues(EDU ICT)")) {
    result.innerHTML = 'Go to: <a href="courses.html">Contemporary and Emerging Issues(EDU ICT)</a>';
    }
    else if (query.includes("Social Psychology(EDU ICT)")) {
    result.innerHTML = 'Go to: <a href="courses.html">Social Psychology(EDU ICT)</a>';
    }
    else if (query.includes("Courses & Activities")) {
        result.innerHTML = 'Go to: <a href="courses.html">Courses & Activities</a>';
      }
      else {
        result.innerHTML = "No results found. Try another word.";
      }  
}
