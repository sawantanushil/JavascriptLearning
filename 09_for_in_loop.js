let teacher = {
    fullName: "Gajanan",
    Dept: "IT dept",
    Subject: "JavaScript"
    
  }
  for (const key in teacher) {
    if (Object.hasOwnProperty.call(teacher, key)) {
        const element = teacher[key];
        console.log(element);
    }
  }