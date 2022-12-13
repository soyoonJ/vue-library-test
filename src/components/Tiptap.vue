<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import 'remixicon/fonts/remixicon.css';

import Image from '@tiptap/extension-image';
import print from 'vue3-print-nb';

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit, TextAlign, TextStyle, Color, Underline, Image],
});

const title = ref(null);
const contents = ref(null);
const file = ref(null);

const fileValue = (e) => {
  console.log(e.target.value, e.target.files);
};

const addImage = (e) => {
  const reader = new FileReader(); // 미리보기용
  reader.readAsDataURL(e.target.files[0]);
  reader.onloadend = () => {
    editor.value.chain().focus().setImage({ src: reader.result }).run();
  };

  // editor.value
  //   .chain()
  //   .focus()
  //   .setImage({
  //     src: 'https://cdn.nbntv.co.kr/news/photo/202208/987236_100479_2236.gif',
  //   })
  //   .run();

  // 샘플이미지 - https://cdn.nbntv.co.kr/news/photo/202208/987236_100479_2236.gif
  // formdata - 데이터전송용
  // https://velog.io/@dosilv/Web-API-FileReader-FormData
  // 서버에 저장 후 사용해야 할 가능성이 있음. data 길이가 너무 길기 때문에
  // https://okky.kr/article/967222
};

const save = () => {
  // console.log(editor.value.getJSON().content);
  console.log(editor.value.getHTML()); // 태그 다 나옴
};

let div = null;
let initBody = null;
const pdfScope = ref(null);
const printPage = () => {
  // div = pdfScope.value;
  // window.print();
  // window.onbeforeprint = beforePrint;
  // window.onafterprint = afterPrint;
  window.print();
};
// function beforePrint() {
//   initBody = document.body.innerHTML;
//   document.body.innerHTML = div.innerHTML;
// }
// function afterPrint() {
//   document.body.innerHTML = initBody;
// }
</script>

<template>
  <button @click="printPage">프린트</button>

  <div
    ref="pdfScope"
    id="printScope"
    style="background: #f2f2f2; height: 745px"
  >
    <button @click="editor.chain().focus().toggleBold().run()">
      <i class="ri-bold"></i>
    </button>

    <button @click="editor.chain().focus().toggleItalic().run()">
      <i class="ri-italic"></i>
    </button>

    <button @click="editor.chain().focus().toggleUnderline().run()">
      <i class="ri-underline"></i>
    </button>
    <br />

    <div
      v-if="editor"
      style="display: flex; flex-direction: column; align-items: center"
    >
      <i class="ri-font-color"></i>
      <input
        type="color"
        @input="editor.chain().focus().setColor($event.target.value).run()"
        :value="editor.getAttributes('textStyle').color"
      />
      <div
        style="
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 200px;
          background: #fff;
        "
      >
        <div
          @click="editor.chain().focus().setColor('#958DF1').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#958DF1' }),
          }"
          class="color-chip"
          style="background: #958df1"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#F98181').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#F98181' }),
          }"
          class="color-chip"
          style="background: #f98181"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#FBBC88').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#FBBC88' }),
          }"
          class="color-chip"
          style="background: #fbbc88"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#FAF594').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#FAF594' }),
          }"
          class="color-chip"
          style="background: #faf594"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#70CFF8').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#70CFF8' }),
          }"
          class="color-chip"
          style="background: #70cff8"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#94FADB').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#94FADB' }),
          }"
          class="color-chip"
          style="background: #94fadb"
        ></div>
        <div
          @click="editor.chain().focus().setColor('#B9F18D').run()"
          :class="{
            'is-active': editor.isActive('textStyle', { color: '#B9F18D' }),
          }"
          class="color-chip"
          style="background: #b9f18d"
        ></div>
      </div>
    </div>

    <button @click="addImage">setImage</button>
    <input
      type="file"
      accept=".png, .jpg, .jpeg, .gif, .jfif, .webp"
      @change="addImage"
    />
    <video></video>

    <editor-content :editor="editor"></editor-content>
    <button @click="save">데이터 확인</button>

    <!-- <h2>학습 상담 자료 상세 보기</h2>
    <div>
      <button>삭제</button>
      <button>수정</button>
      <button>닫기</button>
    </div>
    <input v-model="title" placeholder="제목을 입력해주세요" />
    <br />
    <textarea v-model="contents" /> -->

    <h3>첨부파일</h3>
    <input @change="fileValue" type="file" />
  </div>
</template>

<style lang="scss">
textarea {
  resize: none;
}

.ProseMirror {
  background: #fff;
  width: 500px;
  height: 300px;
  margin: 30px;
  text-align: left;

  > * + * {
    margin-top: 0.75em;
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}

.color-chip {
  width: 30px;
  height: 30px;
}
</style>
