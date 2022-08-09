<script lang="ts">
    import { defineComponent, onMounted, reactive, ref } from "vue";
    import { useStore } from "vuex";
    import { getChatRoomByUserId } from '../api';
    export default defineComponent({
        setup() {
            const store = useStore();
            const currentChatRoom = ref(null);
            const chatroomList = reactive({
                list:[{
                    id:'',
                    user1:{},
                    user2:{},
                    message:[{
                        userid:'',
                        time:'',
                    }]
                }]
            })
            onMounted(async() =>{
                await getChatRoomByUserId({
                    userId: store.getters['user']?.studentObj?._id
                }).then(res=> {
                    chatroomList.list = res?.data?.list;
                })
            })
            function letsChat(item: any) {
                currentChatRoom.value = item;
            }
            return {
                letsChat, currentChatRoom, chatroomList
            }
        }
    })
</script>

<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav style="color: white" id="sidebar">
      <div style="height: 1px; border-bottom: 1px solid #00388b"></div>
      <ul class="list-unstyled components">
        <li
          class="active mb-3"
          v-on:click="letsChat(item)"
          v-for="item in chatroomList.list"
          :key="item.id"
          
        >
        <!-- v-show="item.id != currentUserId" -->
          <div class="d-flex" style="cursor: pointer; padding-bottom: 15px; width: 100%">
            <div style="width: 30%">
              <img
                src="../assets/img/boy.png"
                alt="user"
                width="50px"
                height="50px"
                style="border-radius: 50%; background: white;"
              />
            </div>
            <div style="padding: 10px 0px 0px; width: 50%; display: flex; justify-content: space-between">
              <!-- <h6 style="line-height: 2; font-weight: 600">{{item.name}}</h6> -->
              <h6 style="line-height: 2; font-weight: 600">測試</h6>
            </div>
          </div>
          <div style="height: 1px; border-bottom: 1px solid #00388b"></div>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content" v-if="currentChatRoom===null">
      <div class="my-4">
        <img src="../assets/img/boy.png" width="200px" class="br-50" />
      </div>
      <div>
        <h2>Welcome,</h2>
        <h3>Let's spread love</h3>
      </div>
    </div>
    <!-- <div v-else class="header-width">
      <ChatBox v-bind:currentChatRoom="currentChatRoom" />
    </div> -->
  </div>
</template>

<style>

</style>