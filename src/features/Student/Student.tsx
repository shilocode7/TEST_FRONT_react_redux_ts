import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectStudents, getStudentAsync, addStudentAsync, delStudentAsync, updStudentAsync } from './studentSlice';

export function Student() {
  const students = useAppSelector(selectStudents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStudentAsync())
  }, [students.length])

  const [sname, setsname] = useState("")
  const [grade, setgrade] = useState(0)
  const [mail, setmail] = useState("")
  const [profession, setprofession] = useState("")
  const professions = ['math', 'english', 'sciences'];
  ////////// serch student by name //////////
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    const filteredStudents = students.filter(student => student.sname.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredStudents;
  };
  const filteredStudents = handleSearch()
  ////////// end serch student by name //////////
  ////////// serch student by proftion //////////
  const [searchprof, setSearchprof] = useState("");
  const handleSearchProf = () => {
    const filteredStudentsProf = students.filter(student => student.profession.toLowerCase().includes(searchprof.toLowerCase()));
    return filteredStudentsProf;
  };
  const filteredStudentsProf = handleSearchProf()
  ////////// end serch student by proftion //////////
  return (
    <div >
      <h1>ADD - POST</h1>
      name: <input onChange={(e) => setsname(e.target.value)} />&nbsp;
      grade: <input onChange={(e) => setgrade(+e.target.value)} /> &nbsp;
      mail: <input onChange={(e) => setmail(e.target.value)} />&nbsp;
      profession:
      <select onChange={(e) => setprofession(e.target.value)}>
        {professions.map(profession => <option key={profession} value={profession}>{profession}</option>)}
      </select>&nbsp;
      <button style={{ backgroundColor: '#77fa98' }} onClick={() => dispatch(addStudentAsync({ sname, grade, mail, profession }))}>Add student</button><br /> <br />
      <h3>serch by name</h3>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => setSearchTerm("")}>Clear</button>&nbsp;&nbsp;
      <div style={{ width: '1000px', padding: '50px', border: '5px solid gray', margin: '0', }}>
        {filteredStudents.map((student, i) => <div key={i}>
          name: {student.sname},&nbsp;
          grade: {student.grade},&nbsp;
          mail: {student.mail},&nbsp;
          profession: {student.profession},&nbsp;
          id: {student.id}&nbsp;
</div>)}
</div>
<button style={{ backgroundColor: '#77fa98' }} onClick={() => dispatch(addStudentAsync({ sname, grade, mail, profession }))}>Add student</button><br /> <br />
      <h3>serch by professtion</h3>
      <input type="text" placeholder="Search by profession" value={searchprof} onChange={(e) => setSearchprof(e.target.value)} />
      <button onClick={handleSearchProf}>Search</button>
      <button onClick={() => setSearchprof("")}>Clear</button>&nbsp;&nbsp;
      <div style={{ width: '1000px', padding: '50px', border: '5px solid gray', margin: '0', }}>
        {filteredStudentsProf.map((student, i) => <div key={i}>
          name: {student.sname},&nbsp;
          grade: {student.grade},&nbsp;
          mail: {student.mail},&nbsp;
          profession: {student.profession},&nbsp;
          id: {student.id}&nbsp;
</div>)}
</div>
</div>
);
}

