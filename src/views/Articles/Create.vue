import axios from 'axios';
<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Ajouter Un article</h4>
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
                <button type="button" @click="saveArticle" class="btn btn-primary">SAVE</button>
            </div>
            

            
            

        </div>

    </div>
</template>
<script>

import axios from 'axios'
export default {
    name: 'articleCreate',
    data(){

        return{
        errorList : "",

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
    methods : {
        saveArticle(){
            var mythis = this;
            axios.post('http://127.0.0.1:8000/api/articles',this.model.article)
            .then(res=>{
                    
                console.log(res.data);
                alert(res.data.message);

                this.model.article= {
                    code: "",
                    libelle: "",
                    slug : "",
                    description :  "",
                    prix : ""
                }
            })
            .catch(function (error) {
                if(error.response){

                    if(error.response.status== 422){
                        mythis.errorList = error.response.data.errors;
                    }
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);


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