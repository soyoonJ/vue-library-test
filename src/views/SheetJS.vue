<template>
  <div>
    <input
      type="file"
      @change="excelExport"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    />

    <table>
      <tbody>
        <tr v-for="data in excelData">
          <td>{{ data['2022 학급'] }}</td>
          <td>{{ data['이름'] }}</td>
          <td>{{ data['생년월일'] }}</td>
          <td>{{ data['성별'] }}</td>
          <td>{{ data['생월'] }}</td>
          <td>{{ data['ProfileID'] }}</td>
          <td>{{ data['가정용 계정'] }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="changeTutor">수정</button>
  </div>
</template>
<script setup>
import { read, utils } from 'xlsx';
import { ref } from 'vue';

const excelData = ref({});

const excelExport = (event) => {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = () => {
    var fileData = reader.result;
    var wb = read(fileData, { type: 'binary' });
    wb.SheetNames.forEach((sheetName) => {
      var rowObj = utils.sheet_to_json(wb.Sheets[sheetName]);
      excelData.value = JSON.parse(JSON.stringify(rowObj));
      console.log(excelData.value);
    });
  };
  reader.readAsBinaryString(input.files[0]);
};

const changeTutor = () => {
  console.log(
    [...excelData.value].map((pupil) => ({
      profileId: pupil.ProfileID,
      oldClass: pupil['2022 학급'],
    }))
  );
};
</script>
<style lang=""></style>
