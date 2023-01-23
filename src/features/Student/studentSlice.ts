import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Student from '../../models/Student';
import { getStudent, addStudent, delStudent, updStudent } from './studentAPI';

export interface StudentState {
  student: Student[]
}

const initialState: StudentState = {
  student: []
};

export const getStudentAsync = createAsyncThunk(
  'student/getStudent',
  async () => {
    const response = await getStudent();
    return response;
  }
);
export const addStudentAsync = createAsyncThunk(
  'student/addStudent',
  async (student: Student) => {
    const response = await addStudent(student);
    return response;
  }
);
export const delStudentAsync = createAsyncThunk(
  'student/delStudent',
  async (id: number) => {
    const response = await delStudent(id);
    return response;
  }
);
export const updStudentAsync = createAsyncThunk(
  'student/updStudent',
  async (stu: Student) => {
    const response = await updStudent(stu);
    return response;
  }
);

export const StudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentAsync.fulfilled, (state, action) => {
        state.student = action.payload.students;
  
      })
      .addCase(addStudentAsync.fulfilled, (state, action) => {
        // state.student.push(action.payload.students)
        state.student = action.payload.students;
        console.log(state.student)
        console.log(action.payload.students)
      })
      .addCase(delStudentAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.student = state.student.filter(x => x.id !== action.payload)
      })
      .addCase(updStudentAsync.fulfilled, (state, action) => {
        state.student = state.student.filter(x => x.id !== action.payload)
        state.student.push(action.payload)
      })
  },
});

export const selectStudents = (state: RootState) => state.student.student;
export default StudentSlice.reducer;
