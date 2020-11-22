<template>
    <div>
        <b-form>
            <b-form-group id="input-gropu-1" label="Edit Site Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="siteName" placeholder="input Site Name...">
                </b-form-input>
            </b-form-group>
            <b-form-group id="input-gropu-2" label="Edit Site URL:" label-for="input-2">
                <b-form-input id="input-2" v-model="siteUrl" placeholder="input Site URL...">
                </b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="editSite()">EDIT</b-button>
            <b-button variant="danger" @click="backPage()">BACK</b-button>
        </b-form>
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
        },
        backPage(){
            this.$router.push('/');
        }
    }
}

</script>