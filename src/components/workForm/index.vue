<template>
  <Root>
    <EleForm v-bind="{ 'label-width': '80px', inline: true }">
      <EleFormItem v-bind="{ name: 'name', label: '活动名称' }">
        <EleFormItemInput v-bind="{ name: 'name' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem v-bind="{ name: 'aId', label: '活动ID' }">
        <EleFormItemInput v-bind="{ name: 'aId' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem v-bind="{ name: 'creator', label: '创建人' }">
        <EleFormItemInput v-bind="{ name: 'creator' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem v-bind="{ name: 'checker', label: '审核人' }">
        <EleFormItemInput v-bind="{ name: 'checker' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem> <EleFormItemActions> </EleFormItemActions> </EleFormItem>
    </EleForm>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import EleForm from "./EleForm.vue";
import EleFormItem from "./EleFormItem.vue";
import EleFormItemInput from "./EleFormItemInput.vue";
import EleFormItemActions from "./EleFormItemActions.vue";

export default {
  name: "workForm",
  components: {
    Root,
    EleForm,
    EleFormItem,
    EleFormItemInput,
    EleFormItemActions,
  },
};
</script>
