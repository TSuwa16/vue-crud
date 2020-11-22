<template>
  <div>
      <div>
        <b-form>
            <b-form-group id="input-gropu-1" label="Site Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="siteName" placeholder="input Site Name...">
                </b-form-input>
            </b-form-group>
            <b-form-group id="input-gropu-2" label="Site URL:" label-for="input-2">
                <b-form-input id="input-2" v-model="siteUrl" placeholder="input Site URL...">
                </b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="addSite()">ADD</b-button>
            <b-button variant="danger" @click="backPage()">BACK</b-button>
        </b-form>
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
        },
        backPage(){
            this.$router.push('/');
        }
    }
}
</script>