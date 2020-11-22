<template>
  <div>
      <b-button variant="primary" @click="addSite()">ADD</b-button>
      <h5>Site List</h5>
      <ul>
          <li v-for="(site) in sites" :key="site.id">
              <a :href="site.url" target="_blank">{{site.name}}</a>
              <b-button-group class="btn-group">
                <b-button variant="outline-primary" @click="editSite(site.id)">EDIT</b-button>
                <b-button variant="outline-danger" @click="deleteSite(site.id)">DEL</b-button>
              </b-button-group>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sites:[]
        }
    },
    created(){
        fetch('http://127.0.0.1:3000/sites')
        .then((res) => res.json())
        .then((data) => {
            this.sites = data;
        })
        .catch((err) => console.log(err))
    },
    methods:{
        addSite(){
            this.$router.push('/sites/add');
        },
        editSite(id){
            this.$router.push(`/sites/edit/${id}`);
        },
        deleteSite(id){
            fetch(`http://127.0.0.1:3000/sites/${id}`,{
                method:'DELETE'
            })
            .then(() => {
                this.sites = this.sites.filter((site) => site.id !== id);
            })
            .catch((err) => console.log(err))
            
        }
    }
}
</script>

<style scoped>
    .btn-group{
        padding-left :20px;
    }
</style>