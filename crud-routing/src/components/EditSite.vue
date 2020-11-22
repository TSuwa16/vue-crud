<template>
    <div>
      <router-link to="/">Back</router-link>
      <div>
      <input v-model="siteName" placeholder="Site Name">
      <input v-model="siteUrl" placeholder="Site URL">
      <button @click="editSite()">EDIT</button>
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
    created(){
            const id = this.$route.params.id;

            fetch(`http://127.0.0.1:3000/sites/${id}`)
            .then((res) => res.json())
            .then((data) => {
                this.siteName = data.name;
                this.siteUrl = data.url;
            })
            .catch((err) => console.log(err))
    },
    methods:{
        editSite(){
            if(this.siteName === '' || this.siteUrl === '') return;

            const id = this.$route.params.id;
            const siteInfo = {
                name:this.siteName,
                url:this.siteUrl
            }

            fetch(`http://127.0.0.1:3000/sites/${id}`,{
                method:'PUT',
                header:{
                    'Content-type':'Application/json'
                },
                body:JSON.stringify(siteInfo)
            })
            .then(() => {
                this.siteName = '';
                this.siteUrl = '';
                this.$router.push('/');
            })
            .catch((err) => console.log(err))
        }
    }
}

</script>