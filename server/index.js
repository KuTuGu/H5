const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const userAgent = require('koa-useragent');
const path = require('path')
const swig = require('swig');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/template")

app.use(userAgent);

router.get('/', function(ctx, next){
        let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
        ctx.body = template({})
});

router.get('/components/hiring', function(ctx, next){
    let template = swig.compileFile(path.resolve(templateRoot, "hiring.html"));
    ctx.body = template({})
});
router.get('/components/festival', function(ctx, next){
    let template = swig.compileFile(path.resolve(templateRoot, "festival.html"));
    ctx.body = template({})
});
router.get('/components/activity', function(ctx, next){
    let template = swig.compileFile(path.resolve(templateRoot, "activity.html"));
    ctx.body = template({})
});
router.get('/components/other', function(ctx, next){
    let template = swig.compileFile(path.resolve(templateRoot, "other.html"));
    ctx.body = template({})
});
router.get(/^\/static(?:\/|$)/, async(ctx) => {
    let filepath = ctx.path.replace(/static\//, "")
    await send(ctx, filepath, {
        root: path.join(__dirname, "../dist")
    });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');
