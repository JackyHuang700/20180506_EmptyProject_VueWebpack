<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <template v-for="(item, index) in narbarList">
          <template v-if="!item.childrens">
            <li class="nav-item active" :key="index" @click="changeRoute">
              <a class="nav-link" :href="item.href">{{item.hrefName}}
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item dropdown" :key="index">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{item.hrefName}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a v-for="children in item.childrens" class="dropdown-item" :href="children.href" :key="children.href">{{children.hrefName}}</a>
                <!-- <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Something else here</a> -->
              </div>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  props: {
    narbarList: {
      type: Array,
      default: [],
      required: true
    }
  },
  methods: {

    changeRoute () {
    }

  }
}
</script>
