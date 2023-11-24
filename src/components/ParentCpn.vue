<template>
  <div>
    <child-component @updateValue="receiveValueFromChild"></child-component>
    <p> {{ value }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildCpn.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data() {
    return {
      value: 'oldValue'
    };
  },
  methods: {
    receiveValueFromChild(newValue) {
      this.value = newValue;
    }
  }
}
</script>
