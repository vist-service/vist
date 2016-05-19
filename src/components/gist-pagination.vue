<style>
  .gist-pagination {
    margin-top: 10px;
    border-top: 1px solid #e2e2e2;
    padding-top: 10px;
    font-size: 0;
    &>div {
      margin-right: 5px;
      font-size: 12px;
      display: inline-block;
      background-color: white;
      padding: 5px 10px;
      border: 1px solid #cfd8dc;
      border-radius: 2px;
      &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
      }
      &.gist-pagination-disabled {
        border-color: #e2e2e2;
        color: #e2e2e2;
        &:hover {
          background-color: white;
          cursor: not-allowed;
        }
      }
      &.gist-pagination-current {
        border-color: #02b875;
        color: #02b875;
        &:hover {
          background-color: #E5FFF5;
          cursor: not-allowed;
        }
      }
    }
  }
</style>

<template>
  <div class="gist-pagination" v-if="pagination">
    <div
      @click="fetchUserGists(pagination.first.page)"
      class="gist-pagination-first"
      v-if="shouldShowBoundary(pagination.first, pagination.prev)">
      {{ pagination.first.page }}
    </div>
    <div
      class="gist-pagination-disabled"
      v-if="shouldShowBoundary(pagination.first, pagination.prev) && currentPage - pagination.first.page > 2">
      <i class="fa fa-ellipsis-h"></i>
    </div>
    <div
      @click="fetchUserGists(pagination.prev.page)"
      class="gist-pagination-prev"
      v-if="pagination.prev">
      {{ pagination.prev.page }}
    </div>
    <div class="gist-pagination-current">
      <i v-if="loadingGists" class="fa fa-spinner fa-pulse fa-fw"></i>
      <span v-else>
        {{ currentPage }}
      </span>
    </div>
    <div
      @click="fetchUserGists(pagination.next.page)"
      class="gist-pagination-next"
      v-if="pagination.next">
      {{ pagination.next.page }}
    </div>
    <div
      class="gist-pagination-disabled"
      v-if="shouldShowBoundary(pagination.last, pagination.next) && pagination.last.page - currentPage > 2">
      <i class="fa fa-ellipsis-h"></i>
    </div>
    <div
      @click="fetchUserGists(pagination.last.page)"
      class="gist-pagination-last"
      v-if="shouldShowBoundary(pagination.last, pagination.next)">
      {{ pagination.last.page }}
    </div>
  </div>
</template>

<script>
  import {fetchUserGists} from 'actions'

  export default {
    vuex: {
      getters: {
        pagination: state => state.user.pagination,
        loadingGists: state => state.user.loadingGists,
        currentPage: state => state.user.gistsOptions.page
      },
      actions: {
        fetchUserGists
      }
    },
    methods: {
      shouldShowBoundary(a, b) {
        return a && b && a.page !== b.page
      }
    }
  }
</script>
