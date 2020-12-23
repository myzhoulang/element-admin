<script>
export default {
  name: 'FormItem',
  props: {
    form: {},
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    size: {},
    dataIndex: {},
    initialvalue: {}
  },
  data() {
    return {
      value: ''
    };
  },
  watch: {
    initialvalue(newVal) {
      this.value = newVal;
    }
  },
  created() {
    this.value = this.initialvalue;
  },
  methods: {
    // 创建 select
    createSelect(item = {}) {
      const { form, dataIndex, size } = this;
      return (
        <el-select
          size={size}
          v-model={form[dataIndex]}
          placeholder={item.placeholder}
        >
          {Object.values(item.valueEnum).map(op => {
            return (
              <el-option
                key={op[item.text]}
                label={op.text}
                value={op[item.dataIndex]}
              ></el-option>
            );
          })}
        </el-select>
      );
    },
    createDate(item = {}, index) {
      const { form, dataIndex, size } = this;
      return (
        <el-date-picker
          size={size}
          v-model={form[dataIndex]}
          type={item.valueType}
        ></el-date-picker>
      );
    }
  },
  render() {
    const {
      fileds,
      form,
      createSelect,
      createDate,
      config,
      value,
      size,
      dataIndex
    } = this;
    return (
      <el-form-item label={config.title}>
        {config.valueType === 'select' ? createSelect(config) : null}
        {['daterange', 'date'].includes(config.valueType)
          ? createDate(config)
          : null}
        {!config.valueType ? (
          <el-input
            v-model={form[dataIndex]}
            style='width: 100%'
            size={size}
            placeholder={config.placeholder}
          />
        ) : null}
      </el-form-item>
    );
  }
};
</script>
