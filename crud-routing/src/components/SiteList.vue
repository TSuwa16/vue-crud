<template>
  <div>
      <button @click="addSite()">ADD</button>
      <h5>Site List</h5>
      <ul>
          <li v-for="(site) in sites" :key="site.id">
              <a :href="site.url" target="_blank">{{site.name}}</a>
              <button @click="editSite(site.id)">EDIT</button>
              <button @click="deleteSite(site.id)">DEL</button>
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