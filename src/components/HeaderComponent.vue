<template>
    <header class="banner">	
        <nav class="mnu navbar-light">
            <div class="logo d-inline-flex col-12 col-md-5 m-auto" id="logo">
                <img src="../assets/imgs/dreamEnglish_checkpoint.png" alt="logo" srcset="" id="logoDreamBanner" class="img-md  m-auto">	
                <h1 class="m-auto"><a href="index.html" class="align-middle">Dream English</a></h1>
            </div>
            <!-- <label for="drop" class="toggle"><img src="./assets/imgs/menu-hamburguer.png" class="img-sm"></span></label>
            <input type="checkbox" id="drop"> -->
            <div class="float-right m-auto col-7">
                <ul class="menu d-inline-flex p-0 m-1 w-100 row">
                    <!-- <li class="col-4 text-center active"><a href="index.html">Home</a></li> -->
                    <!-- <li class="col-4 text-center "><a href="about.html">¿Quiénes somos?</a></li> -->
                    <li class="col-4 text-center "><router-link to="/contacto">Contact</router-link></li>
                </ul>
            </div>    
        </nav>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>