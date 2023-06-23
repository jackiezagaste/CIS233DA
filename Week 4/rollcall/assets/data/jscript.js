function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    let semesterID = document.getElementById("semesterList");
    let option = document.createElement('option');

    option.value = 0;
    option.text = "Select a Semester";
    semesterID.add(option);

    for (x = 0; x < arySemesters.length; x++ ) {
        option = document.createElement('option');
        option.value = arySemesters[x][0];
        option.text = arySemesters[x][1];
        semesterID.add(option);
    }
}

function getClass(objSemester) {
    let semesterId = objSemester.options[objSemester.selectedIndex].value;
    let aryClasses = eval(`ary${semesterId}`);
    let classId = document.getElementById("classList");
    let option = document.createElement('option');

    classId.length = 0;

    if(blnOption) {
        option.value = 0;
        option.text = 'Select a Class';
        classId.add(option);
    }

    for (x = 0; x < aryClasses.length; x++ ) {
        let option = document.createElement('option');
        option.value = aryClasses[x][0];
        option.text = aryClasses[x][1];
        classId.add(option);
    }
}