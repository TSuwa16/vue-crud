<template>
  <div>
      <router-link to="/">Back</router-link>
      <div>
      <input v-model="siteName" placeholder="Site Name">
      <input v-model="siteUrl" placeholder="Site URL">
      <button @click="addSite()">ADD</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            siteName:'',
            siteUrl:''
        }
    },
    methods:{
        addSite(){
            if(this.siteName === '' || this.siteUrl === '') return;
            const siteInfo = {
                name : this.siteName,
                url : this.siteUrl
            }
            fetch('http://127.0.0.1:3000/sites',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(siteInfo)
            })
            .then(() => {
                this.siteUrl = '';
                this.siteName = '';
                this.$router.push('/');
            })
            .catch((err) => console.log(err))
        }
    }
}
</script>