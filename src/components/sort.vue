<script>
    import myMixin from '../mixin.js'

    var all = {
        name: 'all',
        data() {
            return {
                pictures: [{path:"/static/pink.jpg", back: false, blur: false}, {path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:"/static/star.jpg", back: false, blur: false}, {path:"/static/stars.jpg", back: false, blur: false}, {path:'/static/background.jpg', back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}],
                pre: true,
            }
        },
        mixins: [myMixin],
    }

    var festival = {
        name: 'festival',
        data(){
            return {
                pictures: [{path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    }

    var activity = {
        name: 'activity',
        data(){
            return {
                pictures: [{path:"/static/pink.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    }

    var hiring = {
        name: 'hiring',
        data(){
            return {
                pictures: [{path:"/static/pink.jpg", back: false, blur: false}, {path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:'/static/transparent.jpg', back: true, blur: false}]
            }
        },
        mixins: [myMixin],
    }

    var other = {
        name: 'other',
        data(){
            return {
                pictures: [{path:"/static/fog.jpg", back: false, blur: false}, {path:"/static/line.jpg", back: false, blur: false}, {path:"/static/star.jpg", back: false, blur: false}, {path:"/static/stars.jpg", back: false, blur: false}]
            }
        },
        mixins: [myMixin],
    }

    export default {
        'all': all, 
        'festival': festival,
        'activity': activity, 
        'hiring': hiring, 
        'other': other,
    }
</script>
