<template>
    <div class="form-container">
        <p>Prueba Email Micapp</p>
        <form class="form">
            <div class="form-group">
                <input name="from_name" placeholder="name" type="text" :value="inputFieldReset" required>
            </div>
            <div class="form-group">
                <input name="email" placeholder="email" type="email" :value="inputFieldReset" required>
            </div>
            <div class="form-group">
                <input name="subject" placeholder="subject" type="text" :value="inputFieldReset" required>
            </div>
            <div class="form-group">
                <textarea class="text-area" name="message" placeholder="message" type="text" :value="inputFieldReset" required></textarea>
            </div>
            <div class="form-group">
                <input class="submit" type="submit" name="send" />
            </div>
        </form>
    </div>
</template> 

<script lang="ts">
import emailjs from 'emailjs-com';
import {ref} from 'vue'

export default{
name: 'EmailTemplateMicapp',
  props: {
    from_name: String,
    email: String,
    subject: String,
    text_area: String,
  },
  methods:{
    // const form = ref(null);
    enviarEmail(){ 
      
    },
  }
}
</script>
<style>


@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html, body {
 font-size: 12px;
 overflow: hidden;
 font-family: 'Comfortaa', cursive;
 color: white;
}

p{
 font-size: 30px;
 padding: 10px;
 font-weight: bold;
}

.form-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 50px auto;
 border-radius: 10px;
 padding: 10px;
 background-color: #ea1d6f; 
 width: 500px;
}

.form-group{
 padding: 15px;
}

.form-group input{
 padding: 10px 10px 10px 10px;
 border: none;
 border-radius: 10px;
 width: 400px;
 outline: none;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}

.text-area {
 height: 150px;
 width: 400px;
 border: none;
 border-radius: 10px;
 padding: 10px;
 outline: none;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}

.form-group .submit{
 border: none;
 border-radius:5px;
 height: 40px;
 width: 70px ;
 cursor: pointer;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}
</style>