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
        <li v-for="(site,i) in sites " :key="i">
          {{i}} {{ site.name}} {{ site.url}}
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
  methods:{
    createData(){
      if(this.siteName === '' || this.siteURL === '') return;
      const siteInfo = {
        name:this.siteName,
        url:this.siteURL
      }
      this.sites.push(siteInfo);

      this.siteName = '';
      this.siteURL = '';
    },
    updateData(){
      if(this.updateId === '' || this.updateName === '' || this.siteURL) return;

      this.sites[Number(this.updateId)] = {
        name:this.updateName,
        url:this.updateURL
      };
      this.updateId = '';
      this.updateName = '';
      this.updateURL = '';
    },
    deleteData(){
      if(this.deleteId === '') return;

      this.sites.splice(Number(this.deleteId),1);

      this.deleteId = '';

    }
  }

}
</script>

<style>

</style>