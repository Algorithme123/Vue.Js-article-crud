import axios from 'axios';
<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Modifier Un article</h4>
        </div>  
        <div class="card-body">

            <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0 ">
                
                <li class="mb-0 ms-3" v-for="(error,index) in errorList" :key="index">
                    {{ error }}

                </li>
            </ul>
            <div class="mb-3">
                <label for="">code</label>
                <input type="text" class="form-control" v-model="model.article.code">
            </div>
            <div class="mb-3">
                <label for="">libelle</label>
                <input type="text" v-model="model.article.libelle" class="form-control">
            </div>
            
            <div class="mb-3">
                <label for="">slug</label>
                <input type="text" v-model="model.article.slug" class="form-control">
            </div>
            
            <div class="mb-3">
                <label for="">Description</label>
                <input type="text" v-model="model.article.description" class="form-control">
            </div>
            
            <div class="mb-3">
                <label for="">prix</label>
                <input type="text" v-model="model.article.prix"  class="form-control">
            </div>

            <div class="mb-3"> 
                <button type="button" @click="updateArticle" class="btn btn-primary">SAVE</button>
            </div>
            

            
            

        </div>

    </div>
</template>
<script>

import axios from 'axios'
export default {
    name: 'articleEdit',
    data(){

        return{
        errorList : "",
        articleId: '',

            model:{
                article:{
                    code: "",
                    libelle: "",
                    slug : "",
                    description :  "",
                    prix : ""
                }
            }
        }

    },
    mounted(){

        console.log(this.$route.params.id)
        this.getArticleData(this.$route.params.id)
        this.articleId= this.$route.params.id
    },
    methods : {
        

        getArticleData(articleId){

           
            axios.get(`http://127.0.0.1:8000/api/articles/${articleId}`).then(res=>{
                console.log(res.data)

                this.model.article = res.data

            })
            .catch(function (error) {
                if(error.response){

                    if(error.response.status== 404){
                        // mythis.errorList = error.response.data.errors;
                        alert()
                    }

                }else if(error.request){
                    console.log(error.request);
                }else{
                    console.log("error",error.message)
                }
            })
        
        },
        updateArticle(){
            var mythis = this;
            axios.put(`http://127.0.0.1:8000/api/articles/${this.articleId}`,this.model.article)
            .then(res=>{
                    
                console.log(res.data);
                alert(res.data.message);

            })
            .catch(function (error) {
                if(error.response){

                    if(error.response.status== 404){
                        mythis.errorList = error.response.data.message;
                        alert(error.response.data.message)
                    }
                

                }else if(error.request){
                    console.log(error.request);
                }else{
                    console.log("error",error.message)
                }
            })
        }
    }
}
</script>