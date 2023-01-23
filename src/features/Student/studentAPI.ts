import axios from "axios";
import { MY_SERVER } from "../../env";
import Student from "../../models/Student";

export async function getStudent() {
  return await axios.get(MY_SERVER).then(res => res.data);
}
export async function addStudent(stu:Student) {
  console.log(Student)
  return await axios.post(MY_SERVER,stu).then(res => res.data);
}
export async function delStudent(id:number) {
  return await axios.delete(MY_SERVER + "/" + id).then(res => id);
}
export async function updStudent(stu:Student) {
  console.log(stu)
  return await axios.put(MY_SERVER + "/" + stu.id,stu).then(res => res.data);
}

