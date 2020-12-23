<script>
import Space from '@/components/Space';
export default {
  name: 'TableToolBar',
  props: {
    title: {
      type: String,
      default: ''
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
    }
  },
  data() {
    return {};
  },
  methods: {},
  render() {
    const { tools, title, actions } = this;
    return (
      <div class='table-list-toolbar'>
        <div class='table-list-toolbar-container'>
          <div class='table-list-toolbar-left'>{title}</div>

          <div class='table-list-toolbar-right'>
            <Space>
              {actions}
              <div class='table-list-toolbar-setting-items'>{tools}</div>
            </Space>
          </div>
        </div>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.table-list-toolbar {
  overflow-x: auto;
  overflow-y: hidden;
}

.table-list-toolbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px;
}

.table-list-toolbar-setting-items {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  padding: 0 4px;
}
.table-list-toolbar-setting-item {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  padding: 0 4px;
}
</style>
