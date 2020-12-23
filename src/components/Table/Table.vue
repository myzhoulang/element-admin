<script>
import Space from '@/components/Space';
import Card from '@/components/Card';
import FormSearch from './FormSearch';
import ToolBar from './ToolBar';

export default {
  name: 'Table',
  components: {},
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    headerTitle: {
      type: String
    },
    actions: {
      type: [Function, Array],
      default() {
        return [];
      }
    },
    tools: {
      type: [Function, Array],
      default() {
        return [];
      }
    },
    pagination: {
      type: Object,
      default() {
        return {
          onChange() {},
          currentPage: 1,
          pageSize: 20,
          total: 0
        };
      }
    },
    formSize: {
      type: String,
      default: 'small'
    },
    request: {
      type: Function,
      required: true
    }
  },
  data() {
    const { currentPage, pageSize } = this.pagination;
    return {
      page: {
        currentPage,
        pageSize
      },
      form: {},
      dataSource: [],
      fileds: [],
      total: 0,
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.fileds = this.columns.filter(item => !item.hideInSearch);
  },
  watch: {
    columns() {
      this.fileds = this.columns.filter(item => !item.hideInSearch);
    }
  },
  methods: {
    pageChange(params) {
      Object.assign(this.page, params);
      this.search();
    },
    formSearch(form) {
      this.form = { ...form };
      this.page.currentPage = 1;
      this.search();
    },
    search(params) {
      this.request({ ...this.form, ...this.page, ...params })
        .then(({ dataSource, success, total }) => {
          if (success) {
            this.dataSource = dataSource;
            this.total = total;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  render() {
    const {
      dataSource,
      pagination,
      total,
      request,
      fileds,
      searchChange,
      headerTitle,
      actions,
      search,
      pageChange,
      formSearch,
      formSize,
      tools
    } = this;
    // 表头
    const columns = this.columns.map(item => {
      return (
        <el-table-column
          label={item.title}
          width={item.width}
          key={item.key}
          scopedSlots={{
            default: function(props) {
              const { row, $index } = props;
              const text = row[item.dataIndex];
              // console.log(Object.values(item.valueEnum));
              if (item.valueEnum) {
                const value =
                  Object.values(item.valueEnum).find(
                    it => it.status === text
                  ) || {};
                return value.text;
              }
              return item.render ? (
                item.render(text, row, $index)
              ) : (
                <span>{text}</span>
              );
            }
          }}
        ></el-table-column>
      );
    });

    return (
      <Space direction='vertical' size='large' block>
        <FormSearch
          fileds={fileds}
          on-form-search={formSearch}
          size={formSize}
        />
        <Card>
          <ToolBar title={headerTitle} actions={actions} tools={tools} />
          <el-table
            data={dataSource}
            size='small'
            border
            fit
            highlight-current-row
          >
            {columns}
          </el-table>
          {this.total > 0 ? (
            <div>
              <el-pagination
                class='table-list-pagination table-list-pagination-right'
                total={total}
                background
                currentPage={pagination.currentPage}
                pageSize={pagination.pageSize}
                layout='total, sizes,  prev, pager, next, jumper'
                on-size-change={pageSize => pageChange({ pageSize })}
                on-current-change={page => pageChange({ currentPage: page })}
              />{' '}
            </div>
          ) : null}
        </Card>
      </Space>
    );
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
