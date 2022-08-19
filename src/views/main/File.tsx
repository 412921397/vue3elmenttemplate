import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => "我是默认的"
    }
  },

  setup(props) {
    const count = ref(0);
    const clickFunc1 = () => {
      count.value++;
    };

    const clickFunc2 = (msg: string = "默认值") => {
      console.log(msg);
      console.log(props);
    };

    return () => (
      <>
        <div class="async">当前计数：{count.value}</div>
        <button onClick={clickFunc1}>不传参数点击</button>
        <button onClick={() => clickFunc2("额外参数")}>传参数点击</button>
      </>
    );
  }
});
