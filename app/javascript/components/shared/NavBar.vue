<template>
  <nav class="navbar is-transparent">
      <div class="navbar-brand">

        <a class="navbar-item" href="/">
          <img src='~images/tn_logo.png' width="55px" height="28px">
        </a>

        <router-link class="navbar-item" :to="{ name: 'home'}"><span class="logo">Home</span></router-link>
        <router-link class="navbar-item" :to="{ name: 'test'}"><span class="logo">Test</span></router-link>

    </div>

  </nav>
</template>
