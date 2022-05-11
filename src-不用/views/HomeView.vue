<template>
  <div>
    <!-- 不需要调用就可以不用写 -->
    <!-- <user-info></user-info>
    <user-name></user-name> -->
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>
    <div style="border: 1px solid #333">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import UserName from "@/components/UserName.vue";
export default {
  components: { UserInfo, UserName },
  data() {
    return {
      comName: "UserName",
    };
  },
};
</script>

<style scoped>
</style>