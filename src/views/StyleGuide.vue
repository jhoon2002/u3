<template>
    <div>
        <div class="text-h3 q-mb-lg">스타일 가이드</div>
        <div class="row justify-between">
            <div class="col">
                <div class="text-h3 q-mb-lg">Typography</div>
                <div>
                    <q-item v-for="[c, text] in classes" :key="c">
                        <div>
                            <div class="text-caption q-mb-xs">{{ c }}</div>
                            <div :class="[`text-${c}`]">{{ text }}</div>
                            <div class="q-mb-md text-caption">
                                <!--                                size: {{ scss[`${c}-size`] }} / weight: {{ scss[`${c}-weight`] }} / line-height:-->
                                <!--                                {{ scss[`${c}-line-height`] }}-->
                            </div>
                        </div>
                    </q-item>
                </div>
            </div>
            <div class="col">
                <div class="text-h3 q-mb-lg">Colors</div>
                <div class="text-caption q-mb-xs">Colors</div>
                <div class="row q-gutter-xs q-mb-lg">
                    <div v-for="[item] in classes2" :key="item">
                        <div>
                            <div class="text-caption q-mb-xs">{{ item }}</div>
                            <div :class="`bg-${item}`" style="width: 60px; height: 20px"></div>
                        </div>
                    </div>
                </div>
                <div class="text-caption q-mb-xs">Buttons</div>
                <div class="row wrap q-gutter-xs q-mb-lg">
                    <div v-for="[item, text] in classes2" :key="item">
                        <div>
                            <div class="text-caption q-mb-xs">{{ item }}</div>
                            <q-btn unelevated :color="item" class="q-mr-xs" :label="text" />
                            <q-btn outline :color="item" :label="text" />
                        </div>
                    </div>
                </div>
                <div class="text-caption q-mb-xs">Card</div>
                <q-card style="width: 300px; height: 270px">
                    <q-card-section>
                        <div class="text-h6">참여의향서</div>
                        <div class="text-caption">구리시 다기능 주상복합시설</div>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        문서번호는 "지주회사2022-4" 으로 정정하였습니다. 아울러, 첨부 문서에서 한예종 기술지주 담당자를
                        변경하였습니다. 따라서 앞서 보내드린 문서파일은 폐기 부탁드리며, 지금 첨부된 문서파일로 참고 및
                        문서번호 등재 처리 하여 주시기 바랍니다.
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
// import variables from '@/styles/variables.scss'
// import variables from '@/views/StyleGuide'
const classes = [
    ['h1', '한국예술종합학교 산학협력단 Heading 1', '6rem', '300', '-.015625em', -1],
    ['h2', '한국예술종합학교 산학협력단 Heading 2', '3.75rem', '300', '-.0083333333em', 0],
    ['h3', '한국예술종합학교 산학협력단 Heading 3', '3rem', '400', 'normal', 1],
    ['h4', '한국예술종합학교 산학협력단 Heading 4', '2.125rem', '400', '.0073529412em', 2],
    ['h5', '한국예술종합학교 산학협력단 Heading 5', '1.5rem', '400', 'normal', 2],
    ['h6', '한국예술종합학교 산학협력단 Heading 6', '1.25rem', '500', '.0125em', 3],
    ['subtitle-1', '한국예술종합학교 산학협력단 Subtitle 1', '1rem', '400', '.009375em', 4],
    ['subtitle-2', '한국예술종합학교 산학협력단 Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
    ['body-1', '한국예술종합학교 산학협력단 Body 1', '1rem', '400', '.03125em', 4],
    ['body-2', '한국예술종합학교 산학협력단 Body 2', '0.875rem', '400', '.0178571429em', 4],
    ['button', '한국예술종합학교 산학협력단 Button', '0.875rem', '500', '.0892857143em', 4],
    ['caption', '한국예술종합학교 산학협력단 Caption', '0.75rem', '400', '.0333333333em', 4],
    ['overline', '한국예술종합학교 산학협력단 Overline', '0.75rem', '500', '.1666666667em', 4],
]
const classes2 = [
    ['primary', '확인'],
    ['secondary', '확인'],
    ['accent', '강조'],
    ['dark', '에러'],
    ['positive', '긍정'],
    ['negative', '부정'],
    ['info', '정보'],
    ['warning', '경고'],
]
</script>

<style lang="scss">
//:export {
//    h1-weight: map-get($headings, 'h1', 'weight');
//    h1-size: map-get($headings, 'h1', 'size');
//    h1-line-height: map-get($headings, 'h1', 'line-height');
//    h2-weight: map-get($headings, 'h2', 'weight');
//    h2-size: map-get($headings, 'h2', 'size');
//    h2-line-height: map-get($headings, 'h2', 'line-height');
//    h3-weight: map-get($headings, 'h3', 'weight');
//    h3-size: map-get($headings, 'h3', 'size');
//    h3-line-height: map-get($headings, 'h3', 'line-height');
//    h4-weight: map-get($headings, 'h4', 'weight');
//    h4-size: map-get($headings, 'h4', 'size');
//    h4-line-height: map-get($headings, 'h4', 'line-height');
//    h5-weight: map-get($headings, 'h5', 'weight');
//    h5-size: map-get($headings, 'h5', 'size');
//    h5-line-height: map-get($headings, 'h5', 'line-height');
//    h6-weight: map-get($headings, 'h6', 'weight');
//    h6-size: map-get($headings, 'h6', 'size');
//    h6-line-height: map-get($headings, 'h6', 'line-height');
//    subtitle-1-weight: map-get($headings, 'subtitle-1', 'weight');
//    subtitle-1-size: map-get($headings, 'subtitle-1', 'size');
//    subtitle-1-line-height: map-get($headings, 'subtitle-1', 'line-height');
//    subtitle-2-weight: map-get($headings, 'subtitle-2', 'weight');
//    subtitle-2-size: map-get($headings, 'subtitle-2', 'size');
//    subtitle-2-line-height: map-get($headings, 'subtitle-2', 'line-height');
//    body-1-weight: map-get($headings, 'body-1', 'weight');
//    body-1-size: map-get($headings, 'body-1', 'size');
//    body-1-line-height: map-get($headings, 'body-1', 'line-height');
//    body-2-weight: map-get($headings, 'body-2', 'weight');
//    body-2-size: map-get($headings, 'body-2', 'size');
//    body-2-line-height: map-get($headings, 'body-2', 'line-height');
//    button-weight: map-get($headings, 'button', 'weight');
//    button-size: map-get($headings, 'button', 'size');
//    button-line-height: map-get($headings, 'button', 'line-height');
//    caption-weight: map-get($headings, 'caption', 'weight');
//    caption-size: map-get($headings, 'caption', 'size');
//    caption-line-height: map-get($headings, 'caption', 'line-height');
//    overline-weight: map-get($headings, 'overline', 'weight');
//    overline-size: map-get($headings, 'overline', 'size');
//    overline-line-height: map-get($headings, 'overline', 'line-height');
//}
</style>
