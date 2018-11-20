/*
path路径、back占位图片(不显示)、mask遮罩
pc端、移动端、更换图片路径
*/
const path = process.env.NODE_ENV === 'development' ? 
{
    all: { 
        pic:[
             {path:"../static/img/top1.png ../static/img/low1.png", back: false, mask: false}, {path:"../static/img/top2.png ../static/img/low2.png", back: false, mask: false}, {path:"../static/img/top3.png ../static/img/low3.png", back: false, mask: false}, {path:"../static/img/top4.png ../static/img/low4.png", back: false, mask: false}, 
             {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},
            ],
        mob:[
             {path:"../static/img/top1.png ../static/img/down1.png", back: false, mask: false}, {path:"../static/img/top2.png ../static/img/down2.png", back: false, mask: false}, {path:"../static/img/top3.png ../static/img/down3.png", back: false, mask: false}, {path:"../static/img/top4.png ../static/img/down4.png", back: false, mask: false}, 
             {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, 
            ],
        chanPic: [
                  "../static/img/top1.png ../static/img/down1.png", "../static/img/top2.png ../static/img/down2.png", "../static/img/top3.png ../static/img/down3.png", "../static/img/top4.png ../static/img/down4.png",
                 ], 
    },
    festival: {
        pic: [
              {path:"../static/img/top3.png ../static/img/low3.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"../static/img/top3.png ../static/img/down3.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "../static/img/top3.png ../static/img/down3.png",  
                 ],      
    },
    activity:{
        pic: [
              {path:"../static/img/top4.png ../static/img/low4.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"../static/img/top4.png ../static/img/down4.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "../static/img/top4.png ../static/img/down4.png",
                 ],
    },
    hiring:{
        pic: [
              {path:"../static/img/top1.png ../static/img/low1.png", back: false, mask: false}, {path:"../static/img/top2.png ../static/img/low2.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"../static/img/top1.png ../static/img/down1.png", back: false, mask: false}, {path:"../static/img/top2.png ../static/img/down2.png", back: false, mask: false}, {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},
             ],
        chanPic:[
                 "../static/img/top1.png ../static/img/down1.png", "../static/img/top2.png ../static/img/down2.png", 
                ],
    },
    other:{
        pic:[
             {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},  
            ],
        mob:[
             {path:"../static/img/continue.png ", back: false, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false}, {path:"../static/img/top1.png ../static/img/low1.png", back: true, mask: false},
            ],
        chanPic:[
                ],
    },
}

:

{
    all: { 
        pic:[
             {path:"./static/img/top1.png ./static/img/low1.png", back: false, mask: false}, {path:"./static/img/top2.png ./static/img/low2.png", back: false, mask: false}, {path:"./static/img/top3.png ./static/img/low3.png", back: false, mask: false}, {path:"./static/img/top4.png ./static/img/low4.png", back: false, mask: false}, 
             {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},
            ],
        mob:[
             {path:"./static/img/top1.png ./static/img/down1.png", back: false, mask: false}, {path:"./static/img/top2.png ./static/img/down2.png", back: false, mask: false}, {path:"./static/img/top3.png ./static/img/down3.png", back: false, mask: false}, {path:"./static/img/top4.png ./static/img/down4.png", back: false, mask: false}, 
             {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, 
            ],
        chanPic: [
                  "./static/img/top1.png ./static/img/down1.png", "./static/img/top2.png ./static/img/down2.png", "./static/img/top3.png ./static/img/down3.png", "./static/img/top4.png ./static/img/down4.png",
                 ], 
    },
    festival: {
        pic: [
              {path:"./static/img/top3.png ./static/img/low3.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"./static/img/top3.png ./static/img/down3.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "./static/img/top3.png ./static/img/down3.png",  
                 ],      
    },
    activity:{
        pic: [
              {path:"./static/img/top4.png ./static/img/low4.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"./static/img/top4.png ./static/img/down4.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},
             ],
        chanPic: [
                  "./static/img/top4.png ./static/img/down4.png",
                 ],
    },
    hiring:{
        pic: [
              {path:"./static/img/top1.png ./static/img/low1.png", back: false, mask: false}, {path:"./static/img/top2.png ./static/img/low2.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, 
             ],
        mob: [
              {path:"./static/img/top1.png ./static/img/down1.png", back: false, mask: false}, {path:"./static/img/top2.png ./static/img/down2.png", back: false, mask: false}, {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},
             ],
        chanPic:[
                 "./static/img/top1.png ./static/img/down1.png", "./static/img/top2.png ./static/img/down2.png", 
                ],
    },
    other:{
        pic:[
             {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},  
            ],
        mob:[
             {path:"./static/img/continue.png ", back: false, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false}, {path:"./static/img/top1.png ./static/img/low1.png", back: true, mask: false},
            ],
        chanPic:[
                ],
    },
};

export default path;