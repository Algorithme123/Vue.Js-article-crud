<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <div class="card">
        <div class="card-header">
            <h3>Articles</h3>
        <RouterLink to="/article/add" class="btn btn-primary float-end"> Ajouter Articles </RouterLink>

        </div>

        <div class="card-body">
            <h5 class="card-title">Card title</h5>

            <div class="table-responsive">
                <table class="table table-striped
                	
                table-borderless
                table-primary
                align-middle">
                    <thead class="table-light">
                        <caption>Table Name</caption>
                        <tr>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Slug</th>
                            <th>libelle</th>
                            <th>Prix</th>
                            <th>Description</th>
                            <th>date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody v-if="this.articles.length > 0" class="table-group-divider">
                            <tr v-for="(article,index) in this.articles" :key="index"  class="table-primary" >
                                <td scope="row">{{index +1}}</td>
                                <td>{{article.code}}</td>
                                <td>{{article.libelle}}</td>
                                <td>{{article.slug}}</td>
                                <td>{{article.description}}</td>
                                <td>{{article.prix}}</td>
                                <td>{{article.created_at}}</td>
                                <td>
                                    <RouterLink :to="{ path:'/articles/' + article.id+'/edit'}" type="button" class="btn btn-success mx-2"> Edit</RouterLink>
                                    <RouterLink to="/" type="button" class="btn btn-danger"> Delete</RouterLink>
                                </td>
                            </tr>
                            
                        </tbody>
                        <tbody v-else>
                            <tr colspan="7"> Chargement ...</tr>
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                </table>
            </div>
            
             


        </div>
    </div>
</template>
  <script>
  import axios from 'axios'
  export default{
    name: 'articlesEntities',
    data(){
        return {
            articles:[]
        }
    },
    mounted(){
        this.getArticles();
        console.log("ok")
    },
    methods:{   
        getArticles(){
            axios.get("http://127.0.0.1:8000/api/articles").then(res=>{
                this.articles = res.data.articles
                console.log(this.articles)

            })
        }
    }
  }
</script>