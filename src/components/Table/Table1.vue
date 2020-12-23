<template>
  <Space direction="vertical" size="large" block>
    <FormSearch />
    <Card>
      <ToolBar />
      <el-table
        v-loading="loading"
        :data="data"
        size="small"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          :label="item.title"
          v-for="item in columns"
          :width="item.width"
          :key="item.key"
        >
          <template slot-scope="scope">
            <div v-if="item.render">
              {{ item.render() }}
            </div>

            <div v-else>
              <span>{{ scope['row'][item.dataIndex] }}</span>
            </div>
          </template>
        </el-table-column>

        <!-- <el-table-column label="工号" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色" align="center">
          <template slot-scope="{ row }">
            <el-link
              style="cursor:inherit"
              :underline="false"
              :type="row.role === 'admin' ? 'success' : 'primary'"
              >{{ row.roleName }}</el-link
            >
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === 0 ? 'danger' : 'success'">{{
              row.statusDesc
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="最后登录时间" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.loginTime }}</span>
          </template>
        </el-table-column> -->
      </el-table>

      <div v-if="total > 0">
        <el-pagination
          class="table-list-pagination table-list-pagination-right"
          :total="total"
          background
          :current-page="params.page"
          :page-size="params.size"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="currentChange"
        />
      </div>
    </Card>
  </Space>
</template>

<script>
import Space from '@/components/Space';
import Card from '@/components/Card';
import FormSearch from './FormSearch';
import ToolBar from './ToolBar';
import data from './mocks/list.json';

export default {
  name: 'Table',
  components: {
    Space,
    ToolBar,
    FormSearch,
    Card
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    request: {
      type: Function
      // required: true
    },
    params: {
      page: 1,
      size: 20
    }
  },
  data() {
    return {
      page: {
        page: 1,
        size: 20
      },
      data: [],
      total: 0,
      loading: false
    };
  },
  created() {
    // this.
    // this.loading = true;
    const { total, list } = data.result;
    this.data = list;
    this.totol = total;
    // this.request()
    //   .then(({ data, success, total }) => {
    //     if (success) {
    //       this.data = data;
    //       this.total = total;
    //     }
    //   })
    //   .finally(() => {
    //     this.loading = false;
    //   });
  },
  methods: {
    currentChange() {}
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
  ::v-deep .el-card__body {
    padding: 22px 22px 0;
  }
}

.table-list-pagination {
  padding: 15px 0;
  display: flex;

  &-right {
    justify-content: flex-end;
  }
}
</style>
