<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li><button><span class="login">로그인</span></button></li>
      </ul>
    </nav>
    
    <section class="contents">
      <div class="contents-top">
        <div class="asc"><div class="circle"></div>오름차순</div>
        <div class="desc"><div class="circle-d"></div>내림차순</div>
        <div class="empty"></div>
        <button class="filter"><span class="filter-name">필터</span></button>
      </div>
      <div>
        <div class="category">
          <div class="category-name">
            <div class="ct-name">category-name</div>
            <div class="ct-id">id</div>
          </div>
          <div class="category-used">
            <div class="ct-user">user_id</div>
            <div class="ct-date">| created_at(2021-08-13)</div>
          </div>
          <div class="category-body">
            <div class="ct-title">Title Title Title Title Title Title Title Title</div>
            <div class="ct-sub">contents contents contents contents contents contents</div>
          </div>
        </div>
        <div class="sponsored">
          <div class="sponsored-name">sponsored</div>
          <div class="sponsored-body">
            <div class="sp-img"></div>
            <div class="sp-body">
              <div class="sp-title">Title Title Title Title Title Title Title Title</div>
              <div class="sp-sub">contents contents contents contents contents contents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>