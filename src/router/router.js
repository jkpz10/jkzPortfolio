import { createWebHistory, createRouter} from 'vue-router'
import Home from '../components/ComingSoon.vue'

// const Home = { template: '<div>Home</div>' }
const history	= createWebHistory();
const	router	=	createRouter({
	history,
	routes: [
		{
			path:	'/',
			component: Home
		}
	]
})

export default router;