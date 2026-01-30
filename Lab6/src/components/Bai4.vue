<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Phần Form -->
      <div class="col-sm-4">
        <h3>Thêm học sinh</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name">Họ tên:</label>
            <input 
              id="name"
              v-model="student.name" 
              type="text" 
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <label for="score">Điểm:</label>
            <input 
              id="score"
              v-model.number="student.score" 
              type="number" 
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <label for="dob">Ngày sinh:</label>
            <input 
              id="dob"
              v-model="student.dob" 
              type="date" 
              class="form-control"
              required
            />
          </div>

          <button type="submit" class="btn btn-success">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
        </form>
      </div>

      <!-- Phần Danh sách -->
      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

const student = ref({
  name: '',
  score: null,
  dob: ''
});

const isEditing = ref(false);
const editingIndex = ref(null);

const submitForm = () => {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
  } else {
    students.value.push({ ...student.value });
  }
  student.value = { name: '', score: null, dob: '' };
  editingIndex.value = null;
};

const editStudent = (index) => {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
};

const deleteStudent = (index) => {
  students.value.splice(index, 1);
};
</script>

<style scoped>
</style>