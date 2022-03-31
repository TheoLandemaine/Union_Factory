;(function(){
    
    var game;
    
    function start(){
        game=new Game('c');
        window.game=game;
        
        game.keys.press.bind(game.keys);
        window.addEventListener('keydown', game.keys.press.bind(game.keys));
        window.addEventListener('keyup', game.keys.unPress.bind(game.keys));
        
        game.tick();
        
        window.start=start;
    }
    
    window.addEventListener('load', start);
    
    
    function Game(canvasId){
        this.ww=window.innerWidth;
        this.hh=window.innerHeight;
        this.running=true;
        
        this.keys=new Keys();
        
        this.drawer=new Drawer(canvasId, this);
        this.player=new Player(this);
        
        this.invaders=[];
        this.bullets=[];
        this.upgrades=[];
        
        this.updateMs=8;
        this.lastTick=Date.now();
        
        this.waves=[
            {
                width:8,
                height:3,
                padding:20
            },{
                width:10,
                height:4,
                padding:30
            },{
                width:20,
                height:5,
                padding:20
            }
        ];
        this.inWave=false;
        this.currWave=0;
    }
    Game.prototype={
        tick:function(){
            if(this.running) window.requestAnimationFrame(this.tick.bind(this));
            
            var currTick=Date.now();
            var elapsedTime=currTick-this.lastTick;
            
            if(elapsedTime>this.updateMs*100) return this.pause();
            
            while(elapsedTime-this.updateMs>0){
                elapsedTime-=this.updateMs;
                this.update();
            }
            this.render();
            
            this.lastTick=currTick-elapsedTime;
        },
        update:function(){
            this.player.update();
            
            if(this.invaders.length<1){
                this.genWave(this.currWave);
            }
            
            for(var i=0; i<this.invaders.length; ++i){
                this.invaders[i].update();
                
                if(Math.random()<0.0005) this.invaders[i].shoot();
            }
            
            for(var i=0; i<this.bullets.length; ++i){
                this.bullets[i].update();
            }
            
            for(var i=0; i<this.bullets.length; ++i){
                for(var j=0; j<this.invaders.length; ++j){
                    
                    if(!this.bullets[i].isInvader&&checkCollision(this.invaders[j], this.bullets[i])){
                        
                        --this.bullets[i].pierce;
                        this.invaders[j].health-=this.bullets[i].power;
                        
                        if(Math.random()<0.05) this.upgrades.push(new Upgrade(this.invaders[j]))
                    }
                }
                if(this.bullets[i].isInvader&&checkCollision(this.player, this.bullets[i])){
                    this.player.health-=this.bullets[i].power;
                    --this.bullets[i].pierce;
                }
            }
            
            for(var i=0; i<this.upgrades.length; ++i){
                this.upgrades[i].update();
                if(checkCollision(this.upgrades[i], this.player)){
                    this.player[this.upgrades[i].type]+=1;
                    this.upgrades[i].use();
                }
            }
        },
        render:function(){
            this.drawer.draw();
        },
        genWave:function(ind){
            var wave=this.waves[ind];
            
            var waveStart=wave.padding*wave.height,
                totWidth=wave.width*wave.padding;
            
            for(var i=0; i<wave.width; ++i){
                for(var j=0; j<wave.height; ++j){
                    var invader=new Invader(this, 10+i*wave.padding, j*wave.padding - waveStart, this.ww-totWidth-20, 20, wave.height-j, 1, 1, 1);
                    this.invaders.push(invader);
                    invader.pos.x+=invader.invertX-1;
                    invader.patrolX=invader.invertX-1;
                }
            }
            
            this.inWave=true;
            if(this.currWave<this.waves.length) this.currWave=ind+1;
        },
        pause:function(){
            this.running=false;
            this.drawer.pause();
            return false;
        },
        resume:function(){
            this.running=true;
            this.lastTick=Date.now();
            this.drawer.resume();
            this.tick();
        },
        gameOver:function(){
            this.currWave=0;
            this.pause();
            this.player=new Player(this);
            this.invaders=[];
            this.bullets=[];
            this.upgrades=[];
        }
    }
    
    function Keys(){
        this.left=false;
        this.up=false;
        this.right=false;
        this.down=false;
        this.space=false;
        this.pause=false;
    }
    Keys.prototype={
        parse:function(code){
            switch(code){
                case 37:return 'left';
                case 38:return 'up';
                case 39:return 'right';
                case 40:return 'down';
                case 32:return 'space';
                case 80:return 'pause';
            }
        },
        unPress:function(key){
            var value=this.parse(key.keyCode);
            this[value]=false;
        },
        press:function(key){
            var value=this.parse(key.keyCode);
            this[value]=true;
            
            if(value==='pause'){
                game.running?game.pause():game.resume();
            }
        }
    }
    
    function Drawer(canvasId, game){
        this.canvas=document.getElementById(canvasId);
        this.canvas.width=game.ww;
        this.canvas.height=game.hh;
        
        this.ctx=this.canvas.getContext('2d');
        this.ctx.font='20px Verdana';
        
        this.colors=['gray', 'red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    };
    Drawer.prototype={
        draw:function(){
            this.ctx.fillStyle='rgba(0, 0, 0, 0.4)';
            this.ctx.fillRect(0, 0, game.ww, game.hh);
            
            for(var i=0; i<game.invaders.length; ++i){
                this.ctx.fillStyle=this.colors[game.invaders[i].health%this.colors.length];
                this.ctx.fillRect(game.invaders[i].pos.x, game.invaders[i].pos.y, game.invaders[i].size.w, game.invaders[i].size.h);
            }
            
            this.ctx.fillStyle='lime';
            for(var i=0; i<game.upgrades.length; ++i){
                this.ctx.fillText(game.upgrades[i].type, game.upgrades[i].pos.x+this.ctx.measureText(game.upgrades[i].type)/2, game.upgrades[i].pos.y);
            }
            
            this.ctx.fillStyle='white';
            
            this.ctx.fillRect(game.player.pos.x, game.player.pos.y, game.player.size.w, game.player.size.h);
            
            for(var i=0; i<game.bullets.length; ++i){
                this.ctx.fillRect(game.bullets[i].pos.x, game.bullets[i].pos.y, game.bullets[i].size.w, game.bullets[i].size.h);
            }
            
            this.ctx.fillStyle='rgba(255, 255, 255, 0.2)';
            this.ctx.fillRect(20, 15, this.ctx.measureText('Invaders left: '+game.invaders.length).width+40, 120);
            
            this.ctx.fillStyle='white';
            
            this.ctx.fillText('Wave '+game.currWave, 40, 40);
            this.ctx.fillText('Invaders left: '+game.invaders.length, 40, 80);
            this.ctx.fillText('Health: '+game.player.health, 40, 120)
        },
        pause:function(){
            this.ctx.fillStyle='rgba(10, 40, 10, 0.4)';
            this.ctx.fillRect(0, 0, game.ww, game.hh);
            
            this.ctx.fillStyle='white';
            
            this.ctx.font='12px Verdana';
            this.ctx.fillText('P to resume', game.ww/2-this.ctx.measureText('P to resume').width, game.hh/2+5);
            
            this.ctx.font='20px Verdana';
            this.ctx.fillText('Paused', game.ww/2-this.ctx.measureText('Paused').width, game.hh/2 - 20);
        },
        resume:function(){
            this.ctx.fillStyle='black';
            this.ctx.fillRect(0, 0, game.ww, game.hh);
        }
    }
    
    function Player(game){
        this.game=game;
        
        this.pos=new Vec(game.ww/2, game.hh-20);
        this.vel=new Vec(0, 0);
        this.acc=new Vec(0, 0);
        
        this.size={w:20, h:20};
        
        this.acc.link(this.vel.link(this.pos));
        
        this.shootTime=0;
        this.shootVel=100;
        this.shootSpeed=1;
        
        this.bulletsCount=1;
        this.power=1;
        this.pierce=1;
        this.bulletSpeed=2;
        
        this.health=3;
    }
    Player.prototype={
        update:function(){
            if(this.health<=0) game.gameOver();
            
            switch(checkBoundings(this)){
                case 'x':this.vel.x*=-1; break;
                case 'y':this.vel.y*=-1; break;
            }
            
            if(game.keys.left) this.acc.x-=0.1;
            if(game.keys.right) this.acc.x+=0.1;
            
            if(game.keys.down) this.acc.y+=0.1;
            if(game.keys.up) this.acc.y-=0.1;
            
            this.acc.x*=0.2;
            this.vel.x*=0.99;
            
            this.acc.y*=0.2;
            this.vel.y*=0.99;
            
            this.acc.update();
            
            if(this.shootTime<=0){
                if(game.keys.space){
                    var section=Math.PI/(this.bulletsCount+1);
                    for(var i=1; i<=this.bulletsCount; ++i) game.bullets.push(new Bullet(this, 0, Math.cos(section*i)*this.bulletSpeed, Math.sin(Math.PI+section*i)*this.bulletSpeed, this.power, this.pierce));
                    this.shootTime=this.shootVel;
                }
            }else this.shootTime-=this.shootSpeed;
        }
    }
    function Invader(game, x, y, invertX, invertY, health, bulletCount, pierce, power){
        this.pos=new Vec(x, y);
        this.vel=new Vec(1, 0);
        
        this.size={w:10, h:10};
        
        this.vel.link(this.pos);
        
        this.patrolX=0;
        this.patrolY=0;
        this.invertX=invertX;
        this.invertY=invertY;
        
        this.dir=1;
        this.health=health;
        
        this.bulletCount=bulletCount||1;
        this.pierce=pierce||1;
        this.power=power||1;
    }
    Invader.prototype={
        update:function(){
            if(this.health<=0) return game.invaders.splice(game.invaders.indexOf(this), 1);
            if(this.pos.y>game.hh) game.gameOver();
            
            this.patrolX+=this.vel.x;
            this.patrolY+=this.vel.y;
            
            if(this.patrolX>=this.invertX||this.patrolX<0){
                this.vel.x=0;
                this.vel.y=1;
            }
            if(this.patrolY>=this.invertY){
                this.dir*=-1;
                this.vel.x=this.dir;
                this.vel.y=0;
                this.patrolY=0;
            }
            
            this.vel.update();
        },
        shoot:function(){
            var section=Math.PI/(this.bulletCount+1);
            for(var i=1; i<=this.bulletCount; ++i){
                game.bullets.push(new Bullet(this, 1, Math.cos(section*i), Math.sin(section*i), this.power, this.pierce));
            }
        }
    }
    function Upgrade(parent){
        this.type=['shootSpeed', 'bulletsCount', 'power', 'bulletSpeed', 'pierce'][(Math.random()*5)|0];
        
        this.pos=new Vec(parent.pos.x, parent.pos.y);
        this.vel=new Vec(0, 1);
        
        this.size={w:8, h:8};
        
        this.vel.link(this.pos);
    }
    Upgrade.prototype={
        update:function(){
            this.vel.update();
        },
        use:function(){
            game.upgrades.splice(game.upgrades.indexOf(this), 1);
        }
    }
    function Bullet(parent, isInvader, vx, vy, power, pierce){
        this.isInvader=isInvader;
        this.power=power;
        this.pierce=pierce;
        
        this.pos=new Vec(parent.pos.x+parent.size.w/2, parent.pos.y+parent.size.h/2);
        this.vel=new Vec(vx, vy);
        
        this.size={w:3, h:5};
        
        this.vel.link(this.pos);
    }
    Bullet.prototype={
        update:function(){
            if(this.pierce<=0) return game.bullets.splice(game.bullets.indexOf(this), 1);
            
            this.vel.update();
            
            if(this.pos.outOfBoundings()) game.bullets.splice(game.bullets.indexOf(this), 1)
        }
    }
    
    function Vec(x, y){
        this.x=((x*100)|0)/100;
        this.y=((y*100)|0)/100;
        
        this.links=[];
    }
    Vec.prototype={
        updateVec:function(v2){
            v2.x+=this.x;
            v2.y+=this.y;
        },
        link:function(vec){
            this.links.push(vec);
            return this;
        },
        outOfBoundings:function(){
            if(this.x<0||this.x>game.ww) return 'x';
            if(this.y<0||this.y>game.hh) return 'y';
            return false;
        },
        update:function(){
            for(var i=0; i<this.links.length; ++i){
                this.updateVec(this.links[i]);
                this.links[i].update();
            }
        }
    }
    function checkBoundings(b){
        if(b.pos.x<0||b.pos.x+b.size.w>game.ww) return 'x';
        if(b.pos.y<0||b.pos.y+b.size.h>game.hh) return 'y';
        return false;
    }
    function checkCollision(b1, b2){
        return !(b1.pos.x+b1.size.w<b2.pos.x||
                 b1.pos.y+b1.size.h<b2.pos.y||
                 b1.pos.y>b2.pos.y+b2.size.h||
                 b1.pos.x>b2.pos.x+b2.size.w)
    }
})()

let img    = document.querySelector("body");
let word = '';
document.addEventListener( 'keypress', function( event ) {

    let currentLetter = event.key;

    word += currentLetter;

    if( word.length > 2 ) {
        
        if( word.includes( 'fin' ) ) {
            document.location.href = "./animalier";
            word = '';
        } 
    }
});