// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên
// class persons {
//   constructor(name, age, address, phoneNum) {
//     (this.name = name),
//       (this.age = age),
//       (this.address = address),
//       (this.phoneNum = phoneNum),
//   }
// }
// let p1 = new persons("Dan", 5, "hai phong", "0123456789");
// ==================================
// const p1 = {
//   name: "Dan",
//   age: 5,
//   address: "hai phong",
//   phoneNum: "0123456789",
// };
// ==================================
// function persons(name, age, address, phoneNum) {
//   (this.name = name),
//     (this.age = age),
//     (this.address = address),
//     (this.phoneNum = phoneNum),
// }
// let p1 = new persons("Dan", 5, "hai phong", "0123456789");

// console.log(Object.keys(p1));

// ==================================================================================

// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền). Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
// id, name, gender, age, mark
// class Students {
//   constructor(id, name, gender, age, mark) {
//     (this.id = id),
//       (this.name = name),
//       (this.gender = gender),
//       (this.age = age),
//       (this.mark = mark);
//   }
// }
// const std1 = new Students(1, "Nguyen Van A", "Nam", 20, 8);
// const newStudent = new Students(2, "Nguyen Thi B", "Nu", 21, 9);
// let students = [];
// students.push(std1, newStudent);
// console.log(students);
// console.log(Object.keys(students[1]));
// // ==================================================================================

// // Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và in ra toàn bộ thông tin của học sinh đó
// let averageMax = students[0];
// let index;
// for (let i = 1; i < students.length - 1; i++) {
//   if (students[i].mark < students[i + 1].mark) {
//     averageMax = students[i + 1].mark;
//     index = i + 1;
//   }
// }
// console.log(averageMax);
// let findIndex = students.findIndex((e) => e.mark == averageMax);
// console.log(students[findIndex]);
// console.log(students[index]);
// ==================================================================================

// Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ. Sau đó thêm vào mảng “students” (ở bài 2). Tính điểm trung bình của các học sinh trong mảng students trên. Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
// const newStudent2 = new Students(3, "Pham C", "Nam", 22, 7);
// students.push(newStudent2);
// let sum = students.reduce((pre, cur) => pre + cur.mark, 0); /// nho no vao
// let average = sum / students.length;
// console.log(average);
// if (average >= 7.5) {
//   console.log(`Lop kha`);
// } else if (average >= 5 && average < 7.5) {
//   console.log(`Lop trung binh`);
// } else {
//   console.log(`Lop yeu`);
// }
