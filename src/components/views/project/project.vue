<template>
  <div class="grid">
    <div v-for="(list,index) in projects" :key="index" class="p-4">
      <div class="border-gray-200 rounded-lg overflow-hidden">
        <!-- <img class="bg-white dark:bg-gray-900 lg:h-48 md:h-36 w-full object-scale-down object-center" :src="list.img" alt="pbld"> -->
        <div class="p-6 rounded-lg h-full dark:bg-gray-900 bg-white opacity-75">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 dark:text-gray-200 mb-1">{{list.subTitle}}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">{{list.title}}</h1>
          <p class="leading-relaxed mb-3">{{list.description}}</p>
          <div class="flex items-center flex-wrap ">
            <a class="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0" target="_blank" :href="list.github">More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data  () {
    return {
      sample: false,
      projects : [
				{
          img: require('@/assets/img/projectsThumbnail/pbld.png'),
          subTitle:'VueJs AngularJs Laravel',
          title: 'Mednefits App Migration',
          description: `App migration in their admin portal, the current app of mednefits been using angularJs from the start and company is growing fast and app is getting slower due to outdated version of angular, I'm part of the project whos working to migrate the app from angularJs to VueJs 2`,
          github:'https://github.com/jkpz10/vue_mednefits_admin'

				},
				{
          img: require('@/assets/img/projectsThumbnail/pbld.png'),
          subTitle:'VueJs ChartJs MomentJs',
          title: 'Mednefits Analytics Dashboard',
          description: `Me and co-developer assigned to work on this project, We design and Develop this analytics dashboard from scratch using VueJs and chartJs or the charting, analytics for how many users are active ,in-active, their sales etc..`,
          github:'https://github.com/jkpz10/vue_mednefits_analytics'

				},
				{
          img: require('@/assets/img/projectsThumbnail/pbld.png'),
          subTitle:'Angular7',
          title: 'OFFYC',
          description: `We custom build an web application to degitalize and cloud base data and easy report generation of extension office of the university where I studied, to solve their problem of file management and the bulk of hard copies of documents fills the limited space of the office`,
          github:'https://github.com/Yevrah23/offyc'

        },
        {
          img: require('@/assets/img/projectsThumbnail/pbld.png'),
          subTitle:'Ionic4 Angular',
          title: 'PWRBLD',
          description: `Help you Build your own PC and give you ideas on where to get started? this app is inspired by PCPartPicker, It will give you an idea of PC Parts based on budget and pupose if it's for gaming or office only or both.`,
          github:'https://github.com/jkpz10/PBLD'

				},
			],
    }
  }
}
</script>

<style>

</style>