import './css'

import $ from 'jquery'

import Hello from './components/Hello'

$('#app').hide().html(new Hello({name: 'max'}).sayHi()).fadeIn('fast')
