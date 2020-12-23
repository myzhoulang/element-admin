<script>
import Table from '@/components/Table';
import Space from '@/components/Space';
import data from './mocks/list.json';
export default {
  name: 'About',
  methods: {
    remove(item) {
      console.log(item);
    },
    request(params) {
      console.log('about', params);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const { total, list } = data.result;
          resolve({
            dataSource: list,
            total: total,
            success: true
          });
        });
      });
    }
  },
  data() {
    return {
      pagination: {
        onChange() {},
        currentPage: 1,
        pageSize: 2,
        total: 0
      },
      dataSource: [],
      columns: [
        {
          key: 'number',
          title: '工号',
          dataIndex: 'number',
          hideInSearch: true
        },
        {
          key: 'name',
          title: '姓名',
          dataIndex: 'name',
          initialValue: 'zhoul',
          placeholder: '输入姓名搜索'
        },
        {
          key: 'phone',
          title: '手机号',
          placeholder: '输入手机号搜索',
          dataIndex: 'phone'
        },
        {
          key: 'status',
          title: '状态',
          placeholder: '选择状态搜索',
          dataIndex: 'status',
          valueType: 'select',
          initialValue: 'Processing',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            close: { text: '待发布', status: 'Default' },
            running: { text: '发布中', status: 'Processing' },
            online: { text: '发布成功', status: 'Success' },
            error: { text: '发布失败', status: 'Error' }
          }
        },
        {
          key: 'loginTime',
          title: '登录时间',
          initialValue: '2020-10-10',
          dataIndex: 'loginTime',
          valueType: 'date'
        },
        {
          key: 'action',
          title: '操作',
          width: 200,
          hideInSearch: true,
          dataIndex: 'action',
          render: (text, record) => {
            return (
              <div>
                <el-button
                  size='small'
                  type='danger'
                  onClick={() => this.remove(record)}
                >
                  删除
                </el-button>
                <el-button size='small'>详情</el-button>
              </div>
            );
          }
        }
      ]
    };
  },
  render() {
    const { columns, request, pagination } = this;
    const actions = [
      <el-button
        size='mini'
        type='primary'
        class='filter-item'
        icon='el-icon-plus'
        onClick='showDialog()'
      >
        添加员工
      </el-button>
    ];
    // const tools = [
    //   <Space size='small'>
    //     <i class='table-list-toolbar-setting-item  el-icon-refresh-right' />
    //     <i class='table-list-toolbar-setting-item  el-icon-delete' />
    //     <i class='table-list-toolbar-setting-item  el-icon-share' />
    //   </Space>
    // ];
    // tools = { tools };
    return (
      <Table
        form-size='small'
        header-title='查询表格'
        columns={columns}
        request={request}
        pagination={pagination}
        actions={actions}
      ></Table>
    );
  }
};
</script>
