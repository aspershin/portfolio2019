<template lang="pug">
  .skills-input
    input(
      type="text"
      v-model="skillName"
      @keydown.enter="addNewSkill"
      :class="{error:validation.hasError('skillName')}"
      )
    button(
      type="button"
      @click="addNewSkill"
      ) Сохранить
    .error-massage {{validation.firstError('skillName')}}
</template>

<script>
  import {mapMutations} from 'vuex';
  import {Validator} from 'simple-vue-validator';

  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      skillName: value => {
        return Validator.value(value).required('Название не может быть пустым');
      }
    },
    props: {
      type: Number
    },
    data() {
      return {
        skillName: ""
      }
    },
    methods: {
      ...mapMutations(['addSkill']),
      addNewSkill() {
        const newSkill = {
          id: Math.round(Math.random() * 1000000),
          name: this.skillName,
          percents: 0,
          type: this.type
        };
        this.$validate().then(success => {
          if (!success) return;
          this.addSkill(newSkill);
          this.skillName = "";
          this.validation.reset();
        });
      }
    }
  }
   
</script>

<style lang="scss">
  .error {
    border: 1px solid red;
    outline: none;
  }
</style>