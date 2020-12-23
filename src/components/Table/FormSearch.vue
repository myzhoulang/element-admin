<script>
import Card from '@/components/Card';
import FormItem from './FormItem.vue';
export default {
  name: 'TableFormSearch',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    fileds: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    const form = {};
    this.fileds.map(item => {
      form[item.dataIndex] = item.initialValue;
    });
    return {
      form
    };
  },
  created() {
    this.search();
  },
  methods: {
    // 初始化表单内容
    rest() {
      console.log(111);
    },

    search() {
      this.$emit('form-search', this.form);
    }
  },
  render() {
    const { fileds, form, createSelect, createDate, size } = this;
    const filedsControl = fileds.map((item, index) => {
      return (
        <el-col
          sm={{ span: 8 }}
          lg={{ span: 6 }}
          xl={{ span: 5 }}
          key={item.key}
        >
          <FormItem
            size={size}
            form={form}
            config={item}
            dataIndex={item.dataIndex}
            initialvalue={item.initialValue}
          ></FormItem>
        </el-col>
      );
    });
    return (
      <Card>
        <el-form
          label-width='90px'
          {...{
            props: {
              model: this.form
            }
          }}
        >
          <el-row gutter={10}>
            {filedsControl}
            <el-col sm={{ span: 8 }} lg={{ span: 6 }} xl={{ span: 4 }}>
              <el-form-item label-width='0'>
                <el-button
                  size={size}
                  type='primary'
                  onClick={() => this.search()}
                >
                  查询
                </el-button>
                <el-button
                  size={size}
                  type='default'
                  onClick={() => this.rest()}
                >
                  重置
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </Card>
    );
  }
};
</script>

<style lang="scss" scoped></style>
