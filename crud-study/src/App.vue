<template>
  <div>
    <h3>Create Data</h3>
    <div>
      <input v-model="siteName" placeholder="Site Name">
    </div>
    <div>
      <input v-model="siteURL" placeholder="Site Url">
    </div>
    <button @click="createData()">Create</button>
    
    <hr>

    <h3>Read Data</h3>
    <div>
      <ul>
        <li v-for="site in sites " :key="site.id">
          {{site.id }} {{ site.name }} {{ site.url}}
        </li>
      </ul>
    </div>

    <hr>

    <h3>Update Data</h3>
    <div>
      <input v-model="updateId" placeholder="ID">
    </div>
    <div>
      <input v-model="updateName" placeholder="Site Name">
    </div>
    <div>
      <input v-model="updateURL" placeholder="Site URL">
    </div>
    <button @click="updateData()">Update</button>

    <hr>

    <h3>Delete data</h3>
    <div>
      <input v-model="deleteId" placeholder="ID">
    </div>
    <button @click="deleteData()">Delete</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      siteName:'',
      siteURL:'',
      sites:[],
      updateId:'',
      updateName:'',
      updateURL:'',
      deleteId:''
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
    createData(){
      if(this.siteName === '' || this.siteURL === '') return;
      const siteInfo = {
        name:this.siteName,
        url:this.siteURL
      }
      fetch('http://127.0.0.1:3000/sites',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(siteInfo)
      })
      .then((res) => res.json())
      .then((data) => {
        this.sites.push(data);

        this.siteName = '';
        this.siteURL = '';
      })
      .catch((err) => console.log(err))
    },
    updateData(){
      if(this.updateId === '' || this.updateName === '' || this.siteURL) return;

      const siteInfo = {
        name:this.updateName,
        url:this.updateURL
      }
      fetch(`http://127.0.0.1:3000/sites/${this.updateId}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(siteInfo)
      })
      .then((res) => res.json)
      .then((data) => {
        const index = this.sites.findIndex(site => site.id === data.id);
        this.sites[index] = {
          id:data.id,
          name:data.name,
          url:data.url
        };
        this.updateId = '';
        this.updateName = '';
        this.updateURL = '';
      })
      .catch((err) => console.log(err))
    },
    deleteData(){
      if(this.deleteId === '') return;

      fetch(`http://127.0.0.1:3000/sites/${this.deleteId}`,{
        method:'DELETE'
      })
      .then(() =>{
        const index = this.sites.findIndex(site => site.id === Number(this.deleteId));
        this.sites.splice(index,1);
              this.deleteId = '';
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>

<style>

</style>