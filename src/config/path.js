/*
path路径、back占位图片(不显示)、mask遮罩
pc端、移动端、更换图片路径
*/
export default {
    all: { 
        pic:[
             {path:"/static/top1.png /static/low1.png", back: false, mask: false}, {path:"/static/top2.png /static/low2.png", back: false, mask: false}, {path:"/static/top3.png /static/low3.png", back: false, mask: false}, {path:"/static/top4.png /static/low4.png", back: false, mask: false}, 
             {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
            ],
        mob:[
             {path:"/static/top1.png /static/down1.png", back: false, mask: false}, {path:"/static/top2.png /static/down2.png", back: false, mask: false}, {path:"/static/top3.png /static/down3.png", back: false, mask: false}, {path:"/static/top4.png /static/down4.png", back: false, mask: false}, 
             {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
            ],
        chanPic: [
                  "/static/top1.png /static/down1.png", "/static/top2.png /static/down2.png", "/static/top3.png /static/down3.png", "/static/top4.png /static/down4.png",
                 ], 
    },
    festival: {
        pic: [
              {path:"/static/top3.png /static/low3.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"/static/top3.png /static/down3.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "/static/top3.png /static/down3.png",  
                 ],      
    },
    activity:{
        pic: [
              {path:"/static/top4.png /static/low4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"/static/top4.png /static/down4.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "/static/top4.png /static/down4.png",
                 ],
    },
    hiring:{
        pic: [
              {path:"/static/top1.png /static/low1.png", back: false, mask: false}, {path:"/static/top2.png /static/low2.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"/static/top1.png /static/down1.png", back: false, mask: false}, {path:"/static/top2.png /static/down2.png", back: false, mask: false}, {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
             ],
        chanPic:[
                 "/static/top1.png /static/down1.png", "/static/top2.png /static/down2.png", 
                ],
    },
    other:{
        pic:[
             {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},  
            ],
        mob:[
             {path:"/static/continue.png ", back: false, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false}, {path:"/static/top1.png /static/low1.png", back: true, mask: false},
            ],
        chanPic:[
                ],
    },
}