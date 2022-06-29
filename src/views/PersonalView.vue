<template>
    <div id="personalPage">
        <div id="leftBar">
            <img src="../assets/logo.png" alt="Avatar"/>
            <ul class="personalSideBar">
                <li>
                    <router-link to="/personal/information">
                        <span>
                            個人資訊
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/personal/order">查看購買商品</router-link>
                </li>
                <li>
                    <router-link to="/personal/shop">個人商店</router-link>
                </li>
                <li>
                    <router-link to="/personal/message">聊天室</router-link>
                </li>
            </ul>
        </div>
        <div id="rightPage">
            <router-view></router-view>
            <!-- <p>
                The most advantageous free personal website templates to showcase your portfolio, resume, vCard, or brand with epic style. These templates are highly customizable and ready to take your brand website to the next level. And if you are not familiar with any of them, be prepared to be blown away due to their highest standards.

We have many free personal and online CV website templates based on Bootstrap at your disposal, and many more will drop shortly. Bear in mind, what you like, you can quickly improve and alter to your particular requirements. Meaning, do not feel limited in any regard and go as creative and artistic with your web appearance look as you would like. But most importantly, persuade your potential clients and employers and have them unable to resist your talent.

List of the best personal website templatesThe most advantageous free personal website templates to showcase your portfolio, resume, vCard, or brand with epic style. These templates are highly customizable and ready to take your brand website to the next level. And if you are not familiar with any of them, be prepared to be blown away due to their highest standards.

We have many free personal and online CV website templates based on Bootstrap at your disposal, and many more will drop shortly. Bear in mind, what you like, you can quickly improve and alter to your particular requirements. Meaning, do not feel limited in any regard and go as creative and artistic with your web appearance look as you would like. But most importantly, persuade your potential clients and employers and have them unable to resist your talent.

List of the best personal website templatesThe most advantageous free personal website templates to showcase your portfolio, resume, vCard, or brand with epic style. These templates are highly customizable and ready to take your brand website to the next level. And if you are not familiar with any of them, be prepared to be blown away due to their highest standards.

We have many free personal and online CV website templates based on Bootstrap at your disposal, and many more will drop shortly. Bear in mind, what you like, you can quickly improve and alter to your particular requirements. Meaning, do not feel limited in any regard and go as creative and artistic with your web appearance look as you would like. But most importantly, persuade your potential clients and employers and have them unable to resist your talent.

List of the best personal website templatesThe most advantageous free personal website templates to showcase your portfolio, resume, vCard, or brand with epic style. These templates are highly customizable and ready to take your brand website to the next level. And if you are not familiar with any of them, be prepared to be blown away due to their highest standards.

We have many free personal and online CV website templates based on Bootstrap at your disposal, and many more will drop shortly. Bear in mind, what you like, you can quickly improve and alter to your particular requirements. Meaning, do not feel limited in any regard and go as creative and artistic with your web appearance look as you would like. But most importantly, persuade your potential clients and employers and have them unable to resist your talent.

List of the best personal website templatesThe most advantageous free personal website templates to showcase your portfolio, resume, vCard, or brand with epic style. These templates are highly customizable and ready to take your brand website to the next level. And if you are not familiar with any of them, be prepared to be blown away due to their highest standards.

We have many free personal and online CV website templates based on Bootstrap at your disposal, and many more will drop shortly. Bear in mind, what you like, you can quickly improve and alter to your particular requirements. Meaning, do not feel limited in any regard and go as creative and artistic with your web appearance look as you would like. But most importantly, persuade your potential clients and employers and have them unable to resist your talent.

List of the best personal website templates
            </p> -->
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    export default defineComponent({

    })
</script>

<style>
img {
    border-radius: 50%;
}

#personalSideBar {
    text-align: center; 
}

#personalPage {
    display: flex;
}

#leftBar{
    position: fixed;
    top: 100px;
    width: 500px;
    height: 100%;
    padding: 30px;
    background-color: red;
}

#leftBar ul{
    list-style-type: none;
    padding-left: 0;
}
#rightPage {
    margin-left: 500px;
    margin-top: 100px;
    padding: 50px;
    height: 1500px;
    width:100%;
    background-color: rgb(139, 59, 59);
}
</style>