<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="#">Home</RouterLink>

              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="#">Link</RouterLink>
              </li>
             
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">A propos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/articles">Articles</RouterLink>
              </li>
              
            </ul>
         
          </div>
        </div>
      </nav>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

<RouterView /></template>
