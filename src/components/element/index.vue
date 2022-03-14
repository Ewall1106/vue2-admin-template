<template>
  <div class="home">
    <EleTable>
      <EleTableColumnCheckbox></EleTableColumnCheckbox>
      <EleTableColumn v-bind="{ prop: 'name', label: '姓名', width: '120' }"></EleTableColumn>
      <EleTableColumn v-bind="{ prop: 'keyId', label: 'keyId', width: '120' }"></EleTableColumn>
      <EleTableColumn v-bind="{ prop: 'name', label: '姓名', width: '120' }"></EleTableColumn>
      <EleTableColumnActions></EleTableColumnActions>
    </EleTable>

    <Form v-bind="{ 'label-width': '100px' }">
      <FormItem v-bind="{ name: 'name', label: '名字' }">
        <FormItemInput v-bind="{ name: 'name' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'age', label: 'age' }">
        <FormItemInput v-bind="{ name: 'age' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'city', label: 'city' }">
        <FormItemSelect v-bind="{ name: 'city' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'delivery', label: '及时配送' }">
        <FormItemSwitch v-bind="{ name: 'delivery' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'type', label: '活动性质' }">
        <FormItemCheckboxGroup v-bind="{ name: 'type' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'radio', label: '活动单选' }">
        <EleFormItemRadio v-bind="{ name: 'radio' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'time', label: '活动时间' }">
        <EleFormItemTimePicker v-bind="{ name: 'time' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'date', label: '活动日期' }">
        <EleFormItemDatePicker v-bind="{ name: 'date' }" />
      </FormItem>

      <FormItem>
        <EleFormItemActions />
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from "./EleForm.vue";
import FormItem from "./EleFormItem.vue";
import FormItemInput from "./EleFormItemInput.vue";
import FormItemSelect from "./EleFormItemSelect.vue";
import FormItemSwitch from "./EleFormItemSwitch.vue";
import EleFormItemActions from "./EleFormItemActions.vue";
import FormItemCheckboxGroup from "./EleFormItemCheckbox.vue";
import EleFormItemRadio from "./EleFormItemRadio.vue";
import EleFormItemTimePicker from "./EleFormItemTimePicker";
import EleFormItemDatePicker from "./EleFormItemDatePicker.vue";
import EleTable from "./EleTable.vue";
import EleTableColumn from "./EleTableColumn.vue";
import EleTableColumnCheckbox from "./EleTableColumnCheckbox.vue";
import EleTableColumnActions from "./EleTableColumnActions.vue";
import ElePagination from "./ElePagination.vue";

export default {
  components: {
    Form,
    FormItem,
    FormItemInput,
    FormItemSelect,
    FormItemSwitch,
    EleFormItemActions,
    FormItemCheckboxGroup,
    EleFormItemRadio,
    EleFormItemTimePicker,
    EleFormItemDatePicker,
    EleTable,
    EleTableColumn,
    EleTableColumnCheckbox,
    EleTableColumnActions,
    ElePagination,
  },
};
</script>
