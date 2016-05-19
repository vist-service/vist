<style>
  .footer {
    border-top: 1px solid #e2e2e2;
    margin-top: 30px;
    font-size: 12px;
    position: relative;
    & a {
      color: #999;
      &:hover {
        color: #333;
      }
    }
    & i {
      margin-right: 3px;
    }
    & .pr-github {
      position: absolute;
      top: 0;
      border: 1px solid #e2e2e2;
      border-top: none;
      padding: 5px 8px;
      border-radius: 0 0 2px 2px;
    }
  }
</style>

<template>
  <footer class="footer">
    <div class="container">
      <a class="pr-github" href="https://github.com/vist-service/vist" target="_blank">
        <i class="fa fa-git"></i> Helpe us improve the web interface.
      </a>
    </div>
  </footer>
</template>