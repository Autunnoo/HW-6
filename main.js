const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//  #1

function getSubjects(student){
  let stud = Object.keys(student.subjects);
  //let ww = qq.push(qq.map(qq[0].toUpperCase() + qq.slice(1)));
  
  return stud.map(accum => accum[0].toUpperCase() + accum.slice(1).toLowerCase().replace("_", ' '));
};

console.log(getSubjects(students[0]));



//  #2

function getAverageMark(student) {
   let value = Object.values(student.subjects);
   let objConcat = value.reduce((accum , item) => accum.concat(item), []);
   let resul = (objConcat.reduce((a , b) => a + b , 0) / objConcat.length).toFixed(2);
       return resul;
    }
    console.log(getAverageMark(students[0]));




//  #3

function getStudentInfo(student){
 
   return "course :" + student.course + ' ' + ", Student name :" + student.name + ' ' + ", averageMark :" + getAverageMark(student);
}
console.log(getStudentInfo(students[0]));


//  #4

const getStudSort = student => {
  let sortName = [];
  students.map((student) => sortName.push(student.name));

  return sortName.sort();
}
console.log(getStudSort());

//  #5 


function getBestStudent(student) {
  let stud0 = getAverageMark(students[0]),
      stud1 = getAverageMark(students[1]),
      stud2 = getAverageMark(students[2]);
     if (stud0 > stud1  && stud0 > stud2) {
      return 'BestStud :' + stud0;
    }
  
    if(stud1 > stud0  && stud1 > stud2) {
      console.log('BestStud :', stud1 );
      return 'BestStud :' + stud1;
    }
  
    if(stud2 > stud0  && stud2 > stud1) {
      return 'BestStud :' + stud2;
    }
  
  return '';
}
console.log(getBestStudent(students));

//  #6



function calculateWordLetters(text) {
    const result = {};
        text.split('').map(a =>(result[a] = !result[a] ? 1 : result[a] + 1));
   return result;
}
console.log(calculateWordLetters("students"));
