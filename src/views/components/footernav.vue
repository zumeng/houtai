<template>
    <div>
        <footer class="footer">
          <ul>
              <li><a href="https://www.creative-tim.com/?_ga=2.146851063.172377419.1627700374-983949408.1627700374">CREATIVE TIM</a></li>
              <li><a href="https://www.creative-tim.com/?_ga=2.146851063.172377419.1627700374-983949408.1627700374">ABOUT US</a></li>
              <li><a href="https://www.creative-tim.com/?_ga=2.146851063.172377419.1627700374-983949408.1627700374">BLOG</a></li>
              <li><a href="https://www.creative-tim.com/?_ga=2.146851063.172377419.1627700374-983949408.1627700374">LICENSES</a></li>
              </ul>
              <ul><li>© 2021 <a href="https://www.creative-tim.com/?_ga=2.146851063.172377419.1627700374-983949408.1627700374">Creative Tim</a>, made with  for a better web</li>
          </ul>
      </footer>
    </div>
</template>
<script>
export default {
  name: 'footernav'
}
</script>
<style scoped>
.footer {
  display: flex;
      justify-content: space-between;
  }
  .footer ul {
      display: flex;
      justify-content: flex-start;
      margin-top: 60px;
  }
  .footer ul li {
   margin-right: 20px;
    font-size: 12px;
  }
  .footer a:hover {
    color: #bc4ac9;
  }
</style>
