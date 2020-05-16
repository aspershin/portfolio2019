<template lang="pug">
  .skills-list
    .skills-title {{skillType}}
    table
      skills-item(
        v-for="skill in skills"
        v-if="convertSkillStringToNum(skillType) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
    skills-input(
      :type="convertSkillStringToNum(skillType)"
    )
    br
    hr
</template>

<script>
  import skillsItem from './skillsItem';
  import skillsInput from './skillsInput';

  export default {
    components: {
      skillsItem, skillsInput
    },
    props: {
      skillType: String,
      skills: Array
    },
    methods: {
      convertSkillStringToNum(checkGroupName) {
        switch(checkGroupName) {
          case 'frontend':
            return 1;
          case 'workflow':
            return 2;
          case 'backend':
            return 3;
        }
      }
    }
}
</script>

<style lang="scss">

</style>