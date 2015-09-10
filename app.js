;(function() {
    var requestAnimFrame = (function(){
        return window.requestAnimationFrame    ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    /* INSERT CLASSES HERE------------------------------------------------ */
    function J(){this.B=function(e){for(var f=0;24>f;f++)this[String.fromCharCode(97+f)]=e[f]||0;0.01>this.c&&(this.c=0.01);e=this.b+this.c+this.e;0.18>e&&(e=0.18/e,this.b*=e,this.c*=e,this.e*=e)}}
var W=new function(){this.A=new J;var e,f,d,g,l,z,K,L,M,A,m,N;this.reset=function(){var c=this.A;g=100/(c.f*c.f+0.001);l=100/(c.g*c.g+0.001);z=1-0.01*c.h*c.h*c.h;K=1E-6*-c.i*c.i*c.i;c.a||(m=0.5-c.n/2,N=5E-5*-c.o);L=0<c.l?1-0.9*c.l*c.l:1+10*c.l*c.l;M=0;A=1==c.m?0:2E4*(1-c.m)*(1-c.m)+32};this.D=function(){this.reset();var c=this.A;e=1E5*c.b*c.b;f=1E5*c.c*c.c;d=1E5*c.e*c.e+10;return e+f+d|0};this.C=function(c,O){var a=this.A,P=1!=a.s||a.v,r=0.1*a.v*a.v,Q=1+3E-4*a.w,n=0.1*a.s*a.s*a.s,X=1+1E-4*a.t,Y=1!=
a.s,Z=a.x*a.x,$=a.g,R=a.q||a.r,aa=0.2*a.r*a.r*a.r,D=a.q*a.q*(0>a.q?-1020:1020),S=a.p?(2E4*(1-a.p)*(1-a.p)|0)+32:0,ba=a.d,T=a.j/2,ca=0.01*a.k*a.k,E=a.a,F=e,da=1/e,ea=1/f,fa=1/d,a=5/(1+20*a.u*a.u)*(0.01+n);0.8<a&&(a=0.8);for(var a=1-a,G=!1,U=0,v=0,w=0,B=0,t=0,x,u=0,h,p=0,s,H=0,b,V=0,q,I=0,C=Array(1024),y=Array(32),k=C.length;k--;)C[k]=0;for(k=y.length;k--;)y[k]=2*Math.random()-1;for(k=0;k<O;k++){if(G)return k;S&&++V>=S&&(V=0,this.reset());A&&++M>=A&&(A=0,g*=L);z+=K;g*=z;g>l&&(g=l,0<$&&(G=!0));h=g;0<
T&&(I+=ca,h*=1+Math.sin(I)*T);h|=0;8>h&&(h=8);E||(m+=N,0>m?m=0:0.5<m&&(m=0.5));if(++v>F)switch(v=0,++U){case 1:F=f;break;case 2:F=d}switch(U){case 0:w=v*da;break;case 1:w=1+2*(1-v*ea)*ba;break;case 2:w=1-v*fa;break;case 3:w=0,G=!0}R&&(D+=aa,s=D|0,0>s?s=-s:1023<s&&(s=1023));P&&Q&&(r*=Q,1E-5>r?r=1E-5:0.1<r&&(r=0.1));q=0;for(var ga=8;ga--;){p++;if(p>=h&&(p%=h,3==E))for(x=y.length;x--;)y[x]=2*Math.random()-1;switch(E){case 0:b=p/h<m?0.5:-0.5;break;case 1:b=1-2*(p/h);break;case 2:b=p/h;b=0.5<b?6.28318531*
(b-1):6.28318531*b;b=0>b?1.27323954*b+0.405284735*b*b:1.27323954*b-0.405284735*b*b;b=0>b?0.225*(b*-b-b)+b:0.225*(b*b-b)+b;break;case 3:b=y[Math.abs(32*p/h|0)]}P&&(x=u,n*=X,0>n?n=0:0.1<n&&(n=0.1),Y?(t+=(b-u)*n,t*=a):(u=b,t=0),u+=t,B+=u-x,b=B*=1-r);R&&(C[H%1024]=b,b+=C[(H-s+1024)%1024],H++);q+=b}q=0.125*q*w*Z;c[k]=1<=q?32767:-1>=q?-32768:32767*q|0}return O}};
window.jsfxr=function(e){W.A.B(e);var f=W.D();e=new Uint8Array(4*((f+1)/2|0)+44);var f=2*W.C(new Uint16Array(e.buffer,44),f),d=new Uint32Array(e.buffer,0,44);d[0]=1179011410;d[1]=f+36;d[2]=1163280727;d[3]=544501094;d[4]=16;d[5]=65537;d[6]=44100;d[7]=88200;d[8]=1048578;d[9]=1635017060;d[10]=f;for(var f=f+44,d=0,g="data:audio/wav;base64,";d<f;d+=3)var l=e[d]<<16|e[d+1]<<8|e[d+2],g=g+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>
12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l&63]);d-=f;return g.slice(0,g.length-d)+"==".slice(0,d)};
    
    function snd (sid, settings){
        sounds[sid] = [];
        settings.forEach(function(s){
            var a = new Audio();
            a.src = jsfxr(s);
            sounds[sid].push(a);
        });
    }
    
    function play (sid){
        sounds[sid] && sounds[sid][range(0, sounds[sid].length - 1)].play();
    }
    
    /*
     * Written by @kevincennis, edited for Closure Compiler by @ruerob
     */

    var enharmonics = 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',
      middleC = 440 * Math.pow( Math.pow( 2, 1 / 12 ), -9 ),
      numeric = /^[0-9.]+$/,
      octaveOffset = 4,
      space = /\s+/,
      num = /(\d+)/,
      offsets = {};

    // populate the offset lookup (note distance from C, in semitones)
    enharmonics.split('|').forEach(function( val, i ) {
      val.split('-').forEach(function( note ) {
        offsets[ note ] = i;
      });
    });

    /*
     * Note class
     *
     * new Note ('A4 q') === 440Hz, quarter note
     * new Note ('- e') === 0Hz (basically a rest), eigth note
     * new Note ('A4 es') === 440Hz, dotted eighth note (eighth + sixteenth)
     * new Note ('A4 0.0125') === 440Hz, 32nd note (or any arbitrary
     * divisor/multiple of 1 beat)
     *
     */

    // create a new Note instance from a string
    /**
     *@constructor
     */
    function Note( str ) {
      var couple = str.split( space );
      // frequency, in Hz
      this.frequency = Note.getFrequency( couple[ 0 ] ) || 0;
      // duration, as a ratio of 1 beat (quarter note = 1, half note = 0.5, etc.)
      this.duration = Note.getDuration( couple[ 1 ] ) || 0;
    }

    // convert a note name (e.g. 'A4') to a frequency (e.g. 440.00)
    Note.getFrequency = function( name ) {
      var couple = name.split( num ),
        distance = offsets[ couple[ 0 ] ],
        octaveDiff = ( couple[ 1 ] || octaveOffset ) - octaveOffset,
        freq = middleC * Math.pow( Math.pow( 2, 1 / 12 ), distance );
      return freq * Math.pow( 2, octaveDiff );
    };

    // convert a duration string (e.g. 'q') to a number (e.g. 1)
    // also accepts numeric strings (e.g '0.125')
    // and compund durations (e.g. 'es' for dotted-eight or eighth plus sixteenth)
    Note.getDuration = function( symbol ) {
      return numeric.test( symbol ) ? parseFloat( symbol ) :
        symbol.toLowerCase().split('').reduce(function( prev, curr ) {
          return prev + ( curr === 'w' ? 4 : curr === 'h' ? 2 :
            curr === 'q' ? 1 : curr === 'e' ? 0.5 :
            curr === 's' ? 0.25 : 0 );
        }, 0 );
    };

    typeof module !== 'undefined' && ( module.exports = Note );

    /*
     * Sequence class
     */

    // create a new Sequence
    /**
     *@constructor
     */
    function Sequence( ac, tempo, arr ) {
      this.ac = ac || new AudioContext();
      this.createFxNodes();
      this.tempo = tempo || 120;
      this.loop = true;
      this.smoothing = 0;
      this.staccato = 0;
      this.notes = [];
      this.push.apply( this, arr || [] );
      this.gain;
    }

    // create gain and EQ nodes, then connect 'em
    Sequence.prototype.createFxNodes = function() {
      var eq = [ [ 'bass', 100 ], [ 'mid', 1000 ], [ 'treble', 2500 ] ],
        prev = this.gain = this.ac.createGain();
      eq.forEach(function( config, filter ) {
        filter = this[ config[ 0 ] ] = this.ac.createBiquadFilter();
        filter.type = 'peaking';
        filter.frequency.value = config[ 1 ];
        prev.connect( prev = filter );
      }.bind( this ));
      prev.connect( this.ac.destination );
      return this;
    };

    // accepts Note instances or strings (e.g. 'A4 e')
    Sequence.prototype.push = function() {
      Array.prototype.forEach.call( arguments, function( note ) {
        this.notes.push( note instanceof Note ? note : new Note( note ) );
      }.bind( this ));
      return this;
    };

    // create a custom waveform as opposed to "sawtooth", "triangle", etc
    Sequence.prototype.createCustomWave = function( real, imag ) {
      // Allow user to specify only one array and dupe it for imag.
      if ( !imag ) {
        imag = real;
      }

      // Wave type must be custom to apply period wave.
      this.waveType = 'custom';

      // Reset customWave
      this.customWave = [ new Float32Array( real ), new Float32Array( imag ) ];
    };

    // recreate the oscillator node (happens on every play)
    Sequence.prototype.createOscillator = function() {
      this.stop();
      this.osc = this.ac.createOscillator();

      // customWave should be an array of Float32Arrays. The more elements in
      // each Float32Array, the dirtier (saw-like) the wave is
      if ( this.customWave ) {
        this.osc.setPeriodicWave(
          this.ac.createPeriodicWave.apply( this.ac, this.customWave )
        );
      } else {
        this.osc.type = this.waveType || 'square';
      }

      this.osc.connect( this.gain );
      return this;
    };

    // schedules this.notes[ index ] to play at the given time
    // returns an AudioContext timestamp of when the note will *end*
    Sequence.prototype.scheduleNote = function( index, when ) {
      var duration = 60 / this.tempo * this.notes[ index ].duration,
        cutoff = duration * ( 1 - ( this.staccato || 0 ) );

      this.setFrequency( this.notes[ index ].frequency, when );

      if ( this.smoothing && this.notes[ index ].frequency ) {
        this.slide( index, when, cutoff );
      }

      this.setFrequency( 0, when + cutoff );
      return when + duration;
    };

    // get the next note
    Sequence.prototype.getNextNote = function( index ) {
      return this.notes[ index < this.notes.length - 1 ? index + 1 : 0 ];
    };

    // how long do we wait before beginning the slide? (in seconds)
    Sequence.prototype.getSlideStartDelay = function( duration ) {
      return duration - Math.min( duration, 60 / this.tempo * this.smoothing );
    };

    // slide the note at <index> into the next note at the given time,
    // and apply staccato effect if needed
    Sequence.prototype.slide = function( index, when, cutoff ) {
      var next = this.getNextNote( index ),
        start = this.getSlideStartDelay( cutoff );
      this.setFrequency( this.notes[ index ].frequency, when + start );
      this.rampFrequency( next.frequency, when + cutoff );
      return this;
    };

    // set frequency at time
    Sequence.prototype.setFrequency = function( freq, when ) {
      this.osc.frequency.setValueAtTime( freq, when );
      return this;
    };

    // ramp to frequency at time
    Sequence.prototype.rampFrequency = function( freq, when ) {
      this.osc.frequency.linearRampToValueAtTime( freq, when );
      return this;
    };

    // run through all notes in the sequence and schedule them
    Sequence.prototype.play = function( when ) {
      when = typeof when === 'number' ? when : this.ac.currentTime;

      this.createOscillator();
      this.osc.start( when );

      this.notes.forEach(function( note, i ) {
        when = this.scheduleNote( i, when );
      }.bind( this ));

      this.osc.stop( when );
      this.osc.onended = this.loop ? this.play.bind( this, when ) : null;

      return this;
    };

    // stop playback, null out the oscillator, cancel parameter automation
    Sequence.prototype.stop = function() {
      if ( this.osc ) {
        this.osc.onended = null;
        this.osc.disconnect();
        this.osc = null;
      }
      return this;
    };

    typeof module !== 'undefined' && ( module.exports = Sequence );

    
    // Create canvases
    var D = document;
    var canvas = D.getElementById("screen"), ctx = canvas.getContext("2d");
    var canvasStar1 = D.createElement("canvas"), ctxStar1 = canvasStar1.getContext("2d");
    var canvasStar2 = D.createElement("canvas"), ctxStar2 = canvasStar2.getContext("2d");
    var canvasBoard = D.createElement("canvas"), ctxBoard = canvasBoard.getContext("2d"); 

    // Optimize code weight
    var M = Math;
    ctx.dI = ctx.drawImage;
    ctx.bP = ctx.beginPath;
    ctx.cP = ctx.closePath;
    ctx.mT = ctx.moveTo;
    ctx.lT = ctx.lineTo;
    ctx.st = ctx.stroke;
    //ctx.sS = ctx.strokeStyle;
    //ctx.fS = ctx.fillStyle;
    //ctx.lW = ctx.lineWidth;
    //ctx.fi = ctx.fill;

    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;

                if (isReady()) {
                    readyCallbacks.forEach(function(func) {
                        func();
                    });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    var resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };

    function Sprite(url, pos, size, speed, frames) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === "number" ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
    }

    Sprite.prototype.update = function(dt) {
        this._index += this.speed * dt;
    };

    Sprite.prototype.reset = function() {
        this._index = 0;
        this.done = false;
    },

    Sprite.prototype.render = function(ctx) {
        var frame;

        if (this.speed > 0) {
            var max = this.frames.length;
            var idx = M.floor(this._index);
            frame = this.frames[idx % max];
        } else {
            frame = 0;
        }

        var x = this.pos[0];
        var y = this.pos[1];

        x += frame * this.size[0];

        ctx.drawImage(resources.get(this.url),
                      x, y,
                      this.size[0], this.size[1],
                      0, 0, 
                      this.size[0], this.size[1]);
    };

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function Triangle(x, y, side, left, isBorder) {
        this.center     = new Point(x, y);
        this.side       = side || 10;
        this.left       = left ? true : false;
        this.h          = M.sqrt(3) / 2 * this.side;
        this.selected   = false;
        this.isBorder   = isBorder;

        var ang = M.PI / 6;

        if (this.left) {
            this.b = new Point(this.center.x - (this.h * 2 / 3), this.center.y);
            this.a = new Point(this.b.x + (this.side * M.cos(ang)), this.b.y - (this.side * M.sin(ang)));
            this.c = new Point(this.b.x + (this.side * M.cos(ang)), this.b.y + (this.side * M.sin(ang)));
        } else {
            this.b = new Point(this.center.x + (this.h * 2 / 3), this.center.y);
            this.a = new Point(this.b.x - (this.side * M.cos(ang)), this.b.y - (this.side * M.sin(ang)));
            this.c = new Point(this.b.x - (this.side * M.cos(ang)), this.b.y + (this.side * M.sin(ang)));
        }
    };

    Triangle.prototype = {
        draw: function(stroke, fill, altCtx) {
            var c = altCtx || ctx;
            c.strokeStyle = stroke || "#262626";
            c.fillStyle = fill || "#fff";
            c.lineWidth = 2;
            c.beginPath();
            c.moveTo(this.a.x, this.a.y);
            c.lineTo(this.b.x, this.b.y);
            c.lineTo(this.c.x, this.c.y);
            c.closePath();
            c.stroke();
            c.fill();
        },
        getH: function() {
            return this.h;
        },
        isIntoTriangle: function(p) {
            if (p.y > this.c.y) return false;
            if (p.y < this.a.y) return false;
            var ang = M.tan(M.PI/6);
            var delta = ang*(p.x - this.b.x); // + this.h*5/3;
            if (this.left) {
                if (p.x > this.center.x + this.h/3) return false;
                if (p.x < this.center.x - this.h*2/3) return false;

                if (p.y < this.b.y - delta) return false;
                if (p.y > delta + this.b.y) return false;
            } else {
                if (p.x > this.center.x + 2*this.h/3) return false;
                if (p.x < this.center.x - this.h/3) return false;

                if (p.y > this.b.y - delta) return false;
                if (p.y < delta + this.b.y) return false;
            }

            return true;
        }
    };

    function Pill(pos, q, power) {
        this.pos = pos;
        this.q = q;
        this.power = power || this.powerTypes.BLOCK;
    }

    Pill.prototype = {
        powerTypes: {
            INVERSE:    "inv",  // *NEXT TURN: inverse the command order (first move and then magic)
            RADIUS:     "rad",  // *NEXT TURN: greater magic radius for reversing cells
            DOUBLE:     "dbl",  // *NEXT TURN: add a final magic order (3 commands in your turn: magic, move, magic)
            BLOCK:      "bck",  // *immediate: block the road with an obstacle
            REVERSE:    "rev",  // *immediate: reverse board colors (now black is white and white is black, except your own cell)
            RAY:        "ray",  // *immediate: magic ray in straight line (only if adjacent to enemy cell)
            BOMB:       "bmb"   // *immediate: drop a bomb that affects to one cell and its adjacent cell (4 in total), cannot kill enemy
        },
        map: {
            "inv":      0,
            "rad":      1,
            "dbl":      2,
            "bck":      3,
            "rev":      4,
            "ray":      5,
            "bmb":      6 
        }
    };

    var _T = {
        immediate:      "Immediate power: ",
        block:          "Create a magical obstacle on the board",
        reverse:        "Reverse board colors, except your own tile",
        ray:            "Cast a death magical ray in straight line",
        bomb:           "Drop a magical bomb that reverts four tiles (not enemy's)",
        nextTurn:       "On your next turn: ",
        inverse:        "you move first and then use magic (inverse command order)",
        radius:         "you have a greater magic radius for reversing tiles",
        double:         "you have an aditional magic command (magic, move, magic)",
        click:          "Click anywhere to continue.",
        white_mage:     "White Mage",
        black_mage:     "Black Mage",
        moves:          " moves now",
        magic:          " uses magic now",
        dead:           " is dead"
    };
    
    function DeathParticle(pos) {
        var p = new Point(pos.x + range(-5, 5), pos.y + range(-5, 5));
        this.pos = p;
        this.alpha = 0.75;
        this.hue = "hsla(" + range(0, 255) + ", 100%, 50%, ";
        this.color = this.hue + this.alpha + ")";
        this.vel = new Point(range(-35, 35), range(-35, 35));
    }
    DeathParticle.prototype = {
        update: function(dt) {
            this.pos.x += dt * this.vel.x;
            this.pos.y += dt * this.vel.y;
            this.alpha -= 0.01;
            this.color = this.hue + this.alpha + ")";
        },
        render: function() {
            ctx.fillStyle = this.color;
            ctx.bP();
            ctx.fillRect(this.pos.x, this.pos.y, 4, 4);
        }
    };
    
    function MagicParticle(pos) {
        var p = new Point(pos.x + range(-10, 10), pos.y);
        this.initial = p;
        this.pos = p;
        this.alpha = range(0, 75)/100;
        magicHue += range(0, 1);
        this.hue = "hsla(" + magicHue + ", 100%, 50%, ";
        this.color = this.hue + this.alpha + ")";
        this.vel = range(0, 25);
    }
    MagicParticle.prototype = {
        update: function(dt) {
            this.pos.y -= dt * this.vel;
            this.alpha -= 0.01;
            this.color = this.hue + this.alpha + ")";
            if (this.alpha < 0) {
                this.alpha = 0.75;
                this.pos = new Point(this.initial.x, this.initial.y);
            }
        },
        render: function() {
            ctx.fillStyle = this.color;
            ctx.bP();
            ctx.fillRect(this.pos.x, this.pos.y, 4, 4);
        }
    };    
    /* INSERT CLASSES HERE------------------------------------------------ */
    
    // The main game loop
    var lastTime, animatingMove = false;
    function main() {
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        lastTime = now;
        requestAnimFrame(main);
    }
    
    // CONSTANTS
    var TYPES = Pill.prototype.powerTypes;
    var _C = {
        FONT:   "'Courier New', Courier, monospace",
        UL:     -7,
        DL:     +9,
        R:      +1,
        UR:     -7,
        DR:     +9,
        L:      -1,
        WHITE:  true,
        BLACK:  false,
        ANIM_STEPS: 8,
        NUM_STARS1: 40,
        NUM_STARS2: 60,
        H: 0,
        NEXT_PILL: 1,
        LIM_PILL: 3,
        SIN_FREC: 10,
        POWERS: []
    };
    
    var _RAY = {
        "-7L":    [-7, -1, -9, -1], // UL
        "7L":     [+7, -1, +9, -1], // DL
        "-9L":    [-9, -1, -7, -1], // UL
        "9L":     [+9, -1, +7, -1], // DL
        "-1R":    [-1],             // L
        "-7R":    [-7, +1, -9, +1], // UR
        "7R":     [+7, +1, +9, +1], // DR
        "-9R":    [-9, +1, -7, +1], // UR
        "9R":     [+9, +1, +7, +1], // DR
        "1L":     [+1]              // R
    };

    var _A = {
        MOVE:       "move",
        REVERSE:    "reverse",
        POWER:      "power"
    };

    var _P = {
        white: {
            actions: [_A.REVERSE, _A.MOVE], //[_A.MOVE, _A.REVERSE],
            pos: 40,
            base: 40,
            pow: [],
            toReset: [],
            energy: false,
            sprite: null
        },
        black: {
            actions: [_A.REVERSE, _A.MOVE], //[_A.MOVE, _A.REVERSE],
            pos: 23,
            base: 23,
            pow: [],
            toReset: [],
            energy: false,
            sprite: null
        }
    };
    
    // VARIABLES
    var MSG1 = "", MSG2 = "", MSG3 = "";
    var cw = canvas.width;
    var ch = canvas.height;
    var center = new Point(cw/4, ch/4);

    var triangles = [], frontierQ = [], animatingPath = [], renderPath = [], reversePath = [], pills = [], invasionPath = [];
    var magicParticles = [], forbidden = [], hoverForbidden = -1, starsLv1 = [], starsLv2 = [], starsX = cw/2, starsY = ch/2;
    var side = 50, turn = _C.WHITE, turnCount = 0, currentAction = 1, lastHoverCell = -1, blacks = 0;
    var isGameOver = false, deadPlayer = null, gameOverMsg = "", hue = 0, magicHue = 0, deathParticles = [];
    var mySin = [], mySinLength = 0, sinPos = 0, mySinFrec = _C.SIN_FREC;
    var canvasBoardHasChanged = false, sounds = [], music;

    function createSin() {
        for (var q=0; q<50; q++) {
            mySin.push(M.sin(M.PI*2/50*q));
        }
        mySin.push(0);
        mySin = mySin.concat(mySin.slice(0).reverse());
        mySin.splice(50, 1);
        mySinLength = mySin.length-1;
    }
    
    function createStars() {
        for (var q=0; q<_C.NUM_STARS1; q++) {
            starsLv1.push({
                pos: new Point(range(0, cw), range(50, ch)),
                sprite: new Sprite("img/stars.png", [0 + range(0, 1)*45, 0], [9, 9], range(1, 3), [0, 1, 2, 3, 4, 3, 2, 1])
            });
        }
        for (q=0; q<_C.NUM_STARS2; q++) {
            starsLv2.push({
                pos: new Point(range(-cw/8, cw + cw/8), range(0, ch + ch/8)),
                sprite: new Sprite("img/stars.png", [0 + range(0, 1)*45, 0], [9, 9], range(3, 5), [0, 1, 2, 1])
            });
        }
    }
    
    function createBoard() {
        var dummy = new Triangle(center.x, center.y, side, true);
        _C.H = dummy.getH();
        
        for (var r=0; r<8; r++) {
            var posRow = (r%2 == 0) ? 0 : 1;
            var neighbours = [];
            var t = new Triangle(center.x - (posRow * _C.H), center.y + (r*side/2), side, true, true && posRow);
            t.posRow = posRow;

            if (!posRow) {
                if (r<7) neighbours.push(_C.DL);
                if (r>0) neighbours.push(_C.UL);   
            }
            neighbours.push(_C.R);
            t.neighbours = neighbours;

            triangles.push(t);
            t.draw(null, "#eee");

            for (var q=0; q<7; q++) {
                var dir = (q%2 == 0) ? false : true;
                var offset = (dir) ? 4*_C.H/3 + ((q-1)*_C.H) : q*_C.H;
                var border = (q==6 && !posRow)?true:false;
                t = new Triangle(center.x - (posRow * _C.H) + (2*_C.H/3) + offset, center.y + (r*side/2), side, dir, border);
                if (q>=3) t.selected = true;

                neighbours = [];
                if (dir) { // left
                    neighbours.push(_C.R);
                    if (r<7) neighbours.push(_C.DL);
                    if (r>0) neighbours.push(_C.UL);
                } else { // right
                    neighbours.push(_C.L);
                    if ((posRow || q<6) && r<7) neighbours.push(_C.DR);
                    if ((posRow || q<6) && r>0) neighbours.push(_C.UR);
                }
                t.neighbours = neighbours;
                t.posRow = posRow;

                triangles.push(t);
                t.draw(null, t.selected ? "#ccc" : "#eee");
            }
        }
    }
    
    function createPowers() {
        var pws = TYPES;
        for (var p in pws) {
            _C.POWERS.push(pws[p]);
        }
        _C.POWERS.sort(function() { return M.random() > 0.5; });
        for (p in pws) {
            _C.POWERS.push(pws[p]);
        }
        _C.POWERS.sort(function() { return M.random() > 0.5; });
        _C.POWERS.splice(0, 1);
        _C.POWERS.push(TYPES.INVERSE);
    }
    
    function createSounds() {
        snd("death",[[3,0.0491,0.0677,0.2467,0.868,0.0859,,0.3164,0.0087,-0.4147,-0.3279,-0.7587,-0.4344,0.3187,0.0041,-0.2153,0.834,0.0848,0.6054,-0.2568,0.498,0.0053,0.7295,0.39]]);
        
        snd("powerup", [[2,,0.3445,,0.4092,0.2226,,0.3069,,,,,,,,0.6779,,,1,,,,,0.39]]);
        snd("walk", [[3,,0.1513,,0.0296,0.3151,,,,,,,,,,,,,1,,,0.1,,0.25], [3,,0.1311,,0.1015,0.2034,,,,,,,,,,,,,1,,,0.1,,0.25]]);
        snd("magic", [[3,0.3724,0.3639,0.5748,0.6647,0.5128,,-0.0193,-0.9454,,0.442,0.6758,-0.13,,0.0017,0.7079,0.1116,-0.0445,0.5906,0.3887,0.4988,0.8052,,0.25]]);
        snd("power", [[2,0.2197,0.9687,0.2917,0.1978,0.1725,,0.1085,0.0738,-0.5064,,-0.4779,-0.3248,0.6976,-0.8023,-0.8414,-0.0112,-0.6864,0.8322,0.407,0.3749,0.0156,-0.0015,0.39]]);
    }
    
    var Music = function(){
      var ac=new AudioContext();
      var seq1=new Sequence(ac,90,[
        'D2 q',
        '-  h',
        'D2 q',

        'A2 q',
        '-  h',
        'A2 q',

        'Bb2 q',
        '-  h',
        'Bb2 q',

        'F2 h',
        'A1 h'
      ]);
      seq1.waveType='sine';
      seq1.gain.gain.value=0.05;
        
      var seq2=new Sequence(ac,90,[
    '-  e',
    'D3 e',
    'D3 e',
    'D3 e',
    'G3 e',
    'A4 e',
    'A4 e',
    'A4 e',
    'A4 e',
    'F3 e',
    'G3 e',
    'F3 e',
    'E3 e',
    'F3 e',
    'D3 q',

    '-  e',
    'D3 s',
    'D3 s',
    'D3 e',
    'G3 e',
    'A4 e',
    'A4 e',
    'A4 e',
    'A4 e',

    'Bb4 e',
    'Bb4 e',
    'Bb4 e',
    'Bb4 e',
    'F4 s',
    'F4 s',
    'A4 e',
    'A4 q']);
    seq2.waveType='triangle';
    seq2.gain.gain.value=0.015;
    seq2.waveType = 'sawtooth';
    
        
      var seq3=new Sequence(ac,90,[
    '-   e',
    'D4  e',
    'C4  e',
    'D4  e',
    'Bb4 e',
    'C4  e',
    'A3  e',
    'Bb3 e',

    'G3  e',
    'A3  e',
    'Bb3 e',
    'A3  e',
    'G3  e',
    'A3  e',
    'F3  q',

    '-   e',
    'D4  s',
    'C4  s',
    'D4  e',
    'Bb3 e',
    'C4  e',
    'Bb3 e',
    'A4  e',
    'Bb3 e',

    'G3  e',
    'A3  e',
    'Bb4 e',
    'A3  e',
    'G3  s',
    'A4  s',
    'G4  e',
    'F3  q']);
      seq3.waveType='square';
      seq3.gain.gain.value=0.015;
      this.play=function(){
        seq1.play(ac.currentTime);
        seq2.play(ac.currentTime);
        seq3.play(ac.currentTime);
      };
    }
    
    // INITIALIZATION
    function init() {
        lastTime = Date.now();
        
        createSounds();
        music = new Music();
        music.play();
        
        console.log(sounds);
        createSin();
        createBoard();
        createStars();
        createPowers();
        canvas.addEventListener("click", onClickCanvas, false);
        canvas.addEventListener("mousemove", onHoverCanvas, false);
        
        _P.white.sprite = new Sprite("img/mages.png", [0, 0], [30, 36], 16, [1, 0]);
        _P.black.sprite = new Sprite("img/mages.png", [60, 0], [30, 36], 16, [0, 1]);
        
        canvasBoard.width = canvasStar1.width = canvasStar2.width = cw;
        canvasBoard.height = canvasStar1.height = canvasStar2.height = ch;
        drawCanvasBoard();
        
        main();
    }
    
    
    ctx.fillStyle = "#26F0AA";
    ctx.font = "40px " + _C.FONT;
    ctx.textAlign = "center";
    ctx.fillText("Loading...", center.x*2, center.y*2);
    ctx.textAlign = "left";
    
    resources.onReady(init);
    resources.load([
        "img/icons.png",
        "img/mages.png",
        "img/stone.png",
        "img/bases.png",
        "img/stars.png"
    ]);

    // MAIN FUNCTIONS
    function update(dt) {        
        if (mySinFrec-- <= 0) {
            mySinFrec = _C.SIN_FREC;
            sinPos ++;
            if (animatingMove) play("walk");
        }
        if (sinPos > mySinLength) sinPos = 0;
        
        updateStars(dt);
        
        if (magicParticles.length > 0) {
            for (var k=magicParticles.length-1; k>=0; k--) {
                magicParticles[k].update(dt);
            } 
        }
        
        if (animatingMove && turn == _C.WHITE) {
            _P.white.sprite.update(dt);
        }
        if (animatingMove && turn == _C.BLACK) {
            _P.black.sprite.update(dt);
        }
        
        if (animatingMove && animatingPath.length == 0) {
            animatingMove = false;
            
            checkIfIsTherePill();
            
            if (turn == _C.WHITE) {
                _P.white.sprite.reset();
                advanceActionFor(_C.WHITE);
            } else {
                _P.black.sprite.reset();
                advanceActionFor(_C.BLACK);
            }
        }
        
        if (_C.NEXT_PILL < turnCount) {
            createPill();
            _C.NEXT_PILL = (M.random() * _C.LIM_PILL | 0) + 1;
            turnCount = 0;
        }      
        
        if (isGameOver) {
            for (var q=deathParticles.length-1; q>=0; q--) {
                deathParticles[q].update(dt);
                if (deathParticles[q].alpha < 0) deathParticles.splice(q, 1);
            }
        }
    }
    
    function render() {
        ctx.clearRect(0, 0, cw, ch);
        drawBackground();

        // UI
        drawTurnIcon();
        drawActionIcon();
        drawBalanceOfPower();
        
        // Board, guides, entities and messages
        if (canvasBoardHasChanged) {
            canvasBoardHasChanged = false;
            drawCanvasBoard();
        }
        drawBoard();
        if (renderPath.length > 0) drawPath(renderPath);
        if (reversePath.length > 0) drawReversePath(reversePath);
        if (invasionPath.length > 0) drawPath(invasionPath);
        drawPills();
        drawForbidden();
        drawBases();
        
        if (magicParticles.length > 0) {
            for (var k=magicParticles.length-1; k>=0; k--) {
                magicParticles[k].render();
            } 
        }
        
        drawPlayers();
        drawHelp(MSG1, MSG2, MSG3);
        if (isGameOver) {
            drawGameOver();
            for (var q=deathParticles.length-1; q>=0; q--) {
                deathParticles[q].render();
            }   
        }
        
        drawFilter();
    }
    
    // AUX. FUNCTIONS

    function updateStars(dt) {
        for (var q=0; q<_C.NUM_STARS1; q++) {
            starsLv1[q].sprite.update(dt);
        }
        for (q=0; q<_C.NUM_STARS2; q++) {
            starsLv2[q].sprite.update(dt);
        }
    }
    
    function updateStarsPosition(e) {
        starsX = (e.x - cw/2);
        starsY = (e.y - ch/2);
    }
    
    function isPlayerAdjacentTo(searchFor) {
        var pos = (turn == _C.WHITE) ? _P.white.pos : _P.black.pos;
        var neighbours = getNeighbours(triangles[pos], pos);
        for (var q=0, l=neighbours.length; q<l; q++) {
            if (triangles[neighbours[q]].selected === searchFor || !isNotForbidden(neighbours[q])) {
                return true;
            }
        }    
        return false;
    }

    function isCellAdjacentToPlayer(searchCell) {
        var playerCell = (turn == _C.WHITE) ? _P.white.pos : _P.black.pos;
        var neighbours = getNeighbours(triangles[playerCell], playerCell);
        for (var q=0, l=neighbours.length; q<l; q++) {
            if (neighbours[q] == searchCell) return true;
        }    
        return false;
    }

    function isNotForbidden(which) {
        for (var q=0, l=forbidden.length; q<l; q++) {
            if (forbidden[q] == which) return false;
        }
        return true;
    }
    
    function isNotPlayer(which) {
        if (_P.black.pos == which || _P.white.pos == which) return false;
        return true;
    }

    function getNeighbours(t, pos) {
        var neighbours = [];
        for (var q=0, l=t.neighbours.length; q<l; q++) {
            var offset = 0;
            if (M.abs(t.neighbours[q]) > 1) {
                offset = 2*t.posRow;
            }
            neighbours.push(t.neighbours[q] + pos - offset);
        }
        //return neighbours.sort(function(a, b) { return a > b; });
        return neighbours;
    }

    function setNeighboursTo(flag, neighb, doNotKillPlayer) {
        var doNotKill = doNotKillPlayer || false;
        for (var q=0, l=neighb.length, t; q<l; q++) {
            t = triangles[neighb[q]];
            if ((doNotKill && neighb[q] != _P.black.pos && neighb[q] != _P.white.pos) ||
               !doNotKill) {
                if (t.selected != flag) {
                    t.selected = flag;
                }
                removeForbidden(neighb[q]);
                t.draw(null, t.selected ? "#ccc" : "#eee");
            }
        }
    }

    function removeForbidden(which) {
        for (var q=0, l=forbidden.length; q<l; q++) {
            if (which == forbidden[q]) {
                forbidden.splice(q, 1);
                break;
            }
        }
    }

    function getCursorPosition(e) {
        var x, y;

        if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + D.body.scrollLeft + D.documentElement.scrollLeft;
            y = e.clientY + D.body.scrollTop + D.documentElement.scrollTop;
        }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;

        return new Point(x, y);
    }

    // draw functions
    function drawActionIcon() {
        var state = (turn == _C.WHITE) ? _P.white.actions[currentAction] : _P.black.actions[currentAction];
        var params1 = [], params2 = [], params3 = [];
        var map = Pill.prototype.map;
        params1.push(resources.get("img/icons.png"));
        switch (state) {
            case _A.MOVE:
                params1.push(126, 0);
                break;
            case _A.REVERSE:
                params1.push(144, 0);
                break;
            case _A.POWER:
                var index = (turn == _C.WHITE) ? map[_P.white.pow[0]] : map[_P.black.pow[0]] || 0;
                params1.push(index*18, 0);
                params2.push(resources.get("img/icons.png"));
                if (index == map[TYPES.DOUBLE] || index == map[TYPES.RADIUS] || index == map[TYPES.INVERSE]) {
                    params2.push(180, 0);
                } else {
                    params2.push(162, 0);
                }
                break;
        }
        var activatedMagic = (turn == _C.WHITE) ? _P.white.toReset : _P.black.toReset;
        if (activatedMagic[0]) {
            var index = map[activatedMagic[0]];
            params3.push(resources.get("img/icons.png"), index*18, 0);
        }
        params1.push(18, 18, 40, 15, 18, 18);
        ctx.dI.apply(ctx, params1);
        
        if (params2.length > 0) {
            params2.push(18, 18, 60, 15, 18, 18);
            ctx.dI.apply(ctx, params2);            
        }
        if (params3.length > 0) {
            params3.push(18, 18, 80, 15, 18, 18);
            ctx.dI.apply(ctx, params3);            
        }
    }

    function drawBalanceOfPower() {
        blacks  = 0;
        var factor = 4;
        for (var q=0, l=triangles.length; q<l; q++) {
            if (triangles[q].selected) blacks++;
        }
        ctx.strokeStyle = "#262626";
        ctx.fillStyle = "#fff";
        ctx.fillRect(cw/1.25 - l*factor - 11, 20, l*factor+2, 12);
        ctx.strokeRect(cw/1.25 - l*factor - 11, 20, l*factor+2, 12);
        ctx.fillStyle = "#262626";
        ctx.fillRect(cw/1.25 - blacks*factor - 10, 22, blacks*factor, 8);
    }
    
    function drawTurnIcon() {
        var grd=ctx.createLinearGradient(0, 0, 0, 75);
        grd.addColorStop(0, "#fff");
        grd.addColorStop(1, "#000");

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, cw, 50);
        
        ctx.strokeStyle = "#000";
        ctx.fillStyle = turn == _C.BLACK ? "#000" : "#fff";
        ctx.bP();
        ctx.arc(25, 25, 10, 0, M.PI*2, false);
        ctx.st();
        ctx.fill();
    }
    
    function drawBackground() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 50, cw, ch);
        
        ctxStar1.clearRect(0, 0, cw, ch);
        for (var q=0; q<_C.NUM_STARS1; q++) {
            ctxStar1.save();
            ctxStar1.translate(starsLv1[q].pos.x, starsLv1[q].pos.y);
            starsLv1[q].sprite.render(ctxStar1);
            ctxStar1.restore();
        }
        ctxStar2.clearRect(0, 0, cw, ch);
        for (q=0; q<_C.NUM_STARS2; q++) {
            ctxStar2.save();
            ctxStar2.translate(starsLv2[q].pos.x, starsLv2[q].pos.y);
            starsLv2[q].sprite.render(ctxStar2);
            ctxStar2.restore();
        }
        
        ctx.dI(canvasStar2, 0 - starsX/6, 0 - starsY/6);
        ctx.dI(canvasStar1, 0 - starsX/10, 0 - starsY/10);
    }
    
    function drawCanvasBoard() {
        var t, arr = triangles.slice(0);
        ctxBoard.clearRect(0, 0, cw, ch);
        
        for (var x=0, y=forbidden.length; x<y; x++) {
            arr.push(triangles[forbidden[x]]);
        }
        for (x=0, y=pills.length; x<y; x++) {
            arr.push(triangles[pills[x].q]);
        }
        for (var q=0, l=arr.length; q<l; q++) {
            t = arr[q];
            t.draw(null, t.selected ? "#999" : "#eee", ctxBoard);
        }
    }
    
    function drawBoard() {
        ctx.dI(canvasBoard, 0, 0);
    }

    function drawPlayers() {
        var posW = triangles[_P.white.pos].center;
        var posB = triangles[_P.black.pos].center;
        if (animatingMove && turn == _C.WHITE) {
            posW = animatingPath.shift();
        }
        if (!isGameOver || deadPlayer == _C.BLACK) {
            ctx.save();
            ctx.translate(posW.x - 15, posW.y - 26);
            _P.white.sprite.render(ctx);
            ctx.restore();
        }

        if (animatingMove && turn == _C.BLACK) {
            posB = animatingPath.shift();
        }
        if (!isGameOver || deadPlayer == _C.WHITE) {
            ctx.save();
            ctx.translate(posB.x - 15, posB.y - 26);
            _P.black.sprite.render(ctx);
            ctx.restore();
        }
    }

    function drawBases() {
        var posW = triangles[_P.white.base].center;
        var posB = triangles[_P.black.base].center;
        var res = resources.get("img/bases.png");
        
        if (!isGameOver || deadPlayer == _C.BLACK) {
           ctx.dI(res, 0, 0, 32, 32, posW.x - 32, posW.y - 32 - 4*mySin[sinPos]|0, 32, 32);
        }
        if (!isGameOver || deadPlayer == _C.WHITE) {
            ctx.dI(res, 32, 0, 32, 32, posB.x, posB.y - 32 + 4*mySin[sinPos]|0, 32, 32);
        }
        
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        if (!isGameOver || deadPlayer == _C.WHITE) ctx.fillRect(posB.x + 10, posB.y + 4, 16, 4);
        if (!isGameOver || deadPlayer == _C.BLACK) ctx.fillRect(posW.x - 24, posW.y + 4, 16, 4);
    }
    
    function drawForbidden() {
        var img = resources.get("img/stone.png");
        if (hoverForbidden >= 0) forbidden.push(hoverForbidden);
        for (var q=0, l=forbidden.length; q<l; q++) {
            var p = triangles[forbidden[q]].center;
            ctx.dI(img, p.x - 16, p.y - 24);
        }
        if (hoverForbidden >= 0) forbidden.pop();
    }

    function drawLineBetween(t1, t2) {
        hue += .1;
        var col = "hsla(" + hue + ", 100%, 50%, 0.75)";
        ctx.strokeStyle = col;
        ctx.lineWidth = 3;
        ctx.bP();
        ctx.mT(t1.center.x, t1.center.y - 5);
        ctx.lT(t2.center.x, t2.center.y - 5);
        ctx.cP();
        ctx.st();
        
        // shadow
        ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        ctx.bP();
        ctx.mT(t1.center.x, t1.center.y);
        ctx.lT(t2.center.x, t2.center.y);
        ctx.cP();
        ctx.st();
    }

    function drawPath(path) {
        var findTriangles = (path[0] instanceof Triangle) ? false : true;
        
        for (var q=0, l=path.length; q<l-1; q++) {
            if (findTriangles) {
                drawLineBetween(triangles[path[q]], triangles[path[q+1]]);
            } else {
                drawLineBetween(path[q], path[q+1]);
            }
        }
    }
    
    function drawReversePath(path, color) {
        var col = color || "255, 0, 0";
        var col1 = "rgba("+col+", 0.75)";
        var col2 = "rgba("+col+", 0.5)";
        var col3 = "rgba("+col+", 0.25)";
        
        var findTriangles = (path[0] instanceof Triangle) ? false : true;
        
        if (findTriangles) {
            triangles[path[0]].draw(null, col1);
        } else {
            path[0].draw(null, col1);
        }
        for (var q=1, l=path.length; q<l; q++) {
            var colour = (q<4)?col2:col3;
            if (findTriangles) {
                triangles[path[q]].draw(null, colour);
            } else {
                path[q].draw(null, colour);
            }
        }
    }
    
    function drawRayPath(path, color) {
        var col = color || "255, 0, 0";
        var findTriangles = (path[0] instanceof Triangle) ? false : true;
        
        if (findTriangles) {
            triangles[path[0]].draw(null, "rgba("+col+", 0.75)");
        } else {
            path[0].draw(null, "rgba("+col+", 0.75)");
        }
        for (var q=1, l=path.length; q<l; q++) {
            if (findTriangles) {
                triangles[path[q]].draw(null, "rgba("+color+", 0.5)");
            } else {
                path[q].draw(null, "rgba("+color+", 0.5)");
            }
        }
    }
    
    function drawPills() {
        for (var q=0, l=pills.length; q<l; q++) {
            var p = pills[q];
            var index = Pill.prototype.map[p.power];
            ctx.dI(resources.get("img/icons.png"), index*18, 0, 18, 18, p.pos.x - 9, p.pos.y - 9, 18, 18);
        }
    }    
        
    function drawGameOver() {
        ctx.fillStyle = "#FF0000";
        ctx.font = "40px " + _C.FONT;
        ctx.textAlign = "center";
        ctx.fillText("Game over", center.x*2, center.y);
        ctx.fillText(gameOverMsg, center.x*2, center.y + 50);
        ctx.textAlign = "left";
    }
    
    function drawHelp(msg1, msg2, msg3) {
        msg2 = msg2 || "";
        msg3 = msg3 || "";
        ctx.fillStyle = "#ADFF2F";
        ctx.font = "14px " + _C.FONT;
        ctx.textAlign = "center";
        ctx.fillText(msg1, center.x*2, ch - 50);
        ctx.fillText(msg2, center.x*2, ch - 30);     
        ctx.fillText(msg3, center.x*2, ch - 10);     
        ctx.textAlign = "left";
    }
    
    function drawFilter () {
        var i = 0,
            j = 0,
            width = 3,
            separation = width + 1,
            count = ch  / separation;

        ctx.fillStyle = 'rgba(50, 200, 25, 0.1)';
        ctx.bP();
        while (++i < count) {
            ctx.rect(0, i * separation, cw, width);
        }
        ctx.fill();
    }
    // ------------------------end draw functions

    function doFrontier(pos) {
        var end = triangles.slice(pos, pos+1)[0];
        var myColor = end.selected;
        var result = {};
        result[pos] = { from: -1 };
        frontierQ = [];
        end.pos = pos;
        frontierQ.push(end);
        while (frontierQ.length > 0) {
            var t = frontierQ.pop();
            var neigh = getNeighbours(t, t.pos);
            var tmp = [];
            for (var q=0, l=neigh.length; q<l; q++) {
                var nextCell = neigh[q];
                var nxt = triangles.slice(nextCell)[0];
                if (!result[nextCell] && nxt.selected == myColor && isNotForbidden(neigh[q])) {
                    nxt.pos = nextCell;
                    tmp.push(nxt);
                    result[nextCell] = { from: t.pos };
                }
            }
            tmp.sort(function(a, b) { return a.pos > b.pos; });
            if (!t.left && tmp.length > 1) {
                tmp.splice(0, 2, tmp[1], tmp[0]);
            }
            frontierQ = frontierQ.concat(tmp);
        }
        return result;
    }

    function findPath(goal, frontier) {
        var current = goal;
        var path = [goal];
        var security = 99;
        while (frontier[current] && frontier[current].from != -1 && --security > 0) {
            current = frontier[current].from;
            path.push(current);
        }
        path.reverse();
        if (!frontier[current]) {
            return [goal];
        } else {
            path.push(goal);
            return path;
        }
    }

    function advanceActionFor(player) {
        currentAction++;
        
        // didn't know where to put this (those functions check conditions and draw text)
        checkIfEnemyPlayerIsDead();
        checkIfEnemyBaseIsInvaded();
        
        if (player == _C.WHITE) {
            if (!_P.white.actions[currentAction]) {
                currentAction = 0;
                checkActivatedPowersFromLastTurn();
                turn = _C.BLACK;
                turnCount++;
            }
        } else {
            if (!_P.black.actions[currentAction]) {
                currentAction = 0;
                checkActivatedPowersFromLastTurn();
                turn = _C.WHITE;
                turnCount++;
            }
        }
        checkIfCurrentActionIsPossible();
        
        var state = (turn == _C.WHITE) ? _P.white.actions[currentAction] : _P.black.actions[currentAction];
        if (state != _A.MOVE) {
            var pos = (turn == _C.WHITE) ? triangles[_P.white.base].center : triangles[_P.black.base].center;
            pos = (turn == _C.WHITE) ? new Point(pos.x - 18, pos.y) : new Point(pos.x + 12, pos.y);
            createMagicParticles(pos);
        } else magicParticles = [];
    }

    function checkActivatedPowersFromLastTurn() {
        var player = (turn == _C.WHITE) ? _P.white : _P.black;
        var types = TYPES;
        switch (player.toReset[0]) {
            case types.DOUBLE:
            case types.INVERSE:
                player.actions = [_A.REVERSE, _A.MOVE];
                player.toReset.shift();
                break;
                
            case types.RADIUS:
                player.energy = false;
                player.toReset.shift();
                break;
        }
        switch (player.pow[0]) {
            case types.INVERSE:
                player.pow.shift();
                player.toReset.push(types.INVERSE);
                break;
                
            case types.DOUBLE:
                player.pow.shift();
                player.toReset.push(types.DOUBLE);
                break;
                
            case types.RADIUS:
                player.pow.shift();
                player.toReset.push(types.RADIUS);
                break;
        }
    }
    
    function checkIfCurrentActionIsPossible() {
        var action = (turn == _C.WHITE) ? _P.white.actions[currentAction] : _P.black.actions[currentAction];
        var q = (turn == _C.WHITE) ? _P.white.pos : _P.black.pos;
        var t = triangles[q];
        var player = (turn == _C.WHITE) ? _C.WHITE : _C.BLACK;
        switch (action) {
            case _A.MOVE:            
                if (!isPlayerAdjacentTo(turn == _C.WHITE ? false : true)) {
                    advanceActionFor(player);
                }
                break;

            case _A.REVERSE:
                if (!isPlayerAdjacentTo(turn == _C.WHITE ? true : false)) {
                    advanceActionFor(player);
                }
                break;
        }
    }

    function checkIfEnemyPlayerIsDead() {
        var cellColorToCheck, pos, msg, someOneIsDead = false;

        cellColorToCheck = false;
        pos = _P.black.pos;
        if (triangles[pos].selected == cellColorToCheck) {
            gameOverMsg = _T.black_mage + _T.dead;
            deadPlayer = _C.BLACK;
            someOneIsDead = true;
            createDeathParticles(triangles[pos].center);
            createDeathParticles(triangles[_P.black.base].center);
        }
        
        cellColorToCheck = true;
        pos = _P.white.pos;
        if (triangles[pos].selected == cellColorToCheck) {
            gameOverMsg = _T.white_mage + _T.dead;
            someOneIsDead = true;
            deadPlayer = _C.WHITE;
            createDeathParticles(triangles[pos].center);
            createDeathParticles(triangles[_P.white.base].center);
        }

        if (someOneIsDead && !isGameOver) {
            canvas.removeEventListener("click", onClickCanvas, false);
            canvas.removeEventListener("mousemove", onHoverCanvas, false);
            isGameOver = true;
            play("death");
        }
    }
    
    function checkIfEnemyBaseIsInvaded() {
        var baseToCheck = (turn == _C.WHITE) ? _P.black.base : _P.white.base;
        var startBase = (turn == _C.WHITE) ? _P.white.base : _P.black.base;
        var colorToCheck = (turn == _C.WHITE) ? false : true;
        var deathPos = (turn == _C.WHITE) ? _P.black.pos : _P.white.pos;
        if (triangles[baseToCheck].selected == colorToCheck) {
            var path = findPath(startBase, doFrontier(baseToCheck));
            if (path.length > 1) {
                gameOverMsg = (turn == _C.WHITE) ? _T.black_mage : _T.white_mage;
                gameOverMsg += _T.dead;
                canvas.removeEventListener("click", onClickCanvas, false);
                canvas.removeEventListener("mousemove", onHoverCanvas, false);
                invasionPath = path;
                createDeathParticles(triangles[baseToCheck].center);
                createDeathParticles(triangles[deathPos].center);
                deadPlayer = (turn == _C.WHITE) ? _C.BLACK : _C.WHITE;
                isGameOver = true;
                play("death");
            }
        }
    }
    
    function createDeathParticles(pos) {
        var p = new Point(pos.x, pos.y - 12);
        for (var q=0; q<50; q++) {
            deathParticles.push(new DeathParticle(p));
        }
    }
    
    function createMagicParticles(pos) {
        var p = new Point(pos.x, pos.y - 22);
        for (var q=0; q<50; q++) {
            magicParticles.push(new MagicParticle(p));
        }
    }
    
    function createPill() {
        var possibleDest = [];
        for (var q=0, l=triangles.length; q<l; q++) {
            if (blacks <= l/2 && triangles[q].selected == true) {
                possibleDest.push(q);
            } else if (blacks >= l/2 && triangles[q].selected == false) {
                possibleDest.push(q);
            }
        }
        var sel = possibleDest[M.random() * possibleDest.length | 0];   
        while (isAlreadyAPill(sel) || sel == _P.white.pos || sel == _P.black.pos) {
            sel = possibleDest[M.random() * possibleDest.length | 0];   
        }
        var pill = new Pill(new Point(triangles[sel].center.x, triangles[sel].center.y), sel, _C.POWERS.shift());
        pills.push(pill);
        if (_C.POWERS.length == 0) createPowers();
        
    }
    
    function checkIfIsTherePill() {
        for (var q=pills.length-1; q>=0; q--) {
            if (_P.black.pos == pills[q].q) {
                getPillFor(_P.black, q);
                continue;
            }
            if (_P.white.pos == pills[q].q) {
                getPillFor(_P.white, q);
                continue;
            }
        }
    }
    
    function createRenderpathFrom(path) {
        renderPath = [];
        for (var q=0, l=path.length-1; q<l; q++) {
            renderPath.push(triangles.slice(path[q], path[q]+1)[0]);
        }
    }
    
    function isAlreadyAPill(pos) {
        for (var q=0, l=pills.length; q<l; q++) {
            if (pills[q].pos == pos) return true;
        }
        return false;
    }
    
    function getPillFor(player, q) {
        player.actions.push(_A.POWER);
        player.pow.push(pills[q].power);
        pills.splice(q, 1);
        play("powerup");
    }
    
    function updateMovePath(path) {
        createRenderpathFrom(path);
    }
    
    function reverseCell(t, q, bool, doNotKillPlayer) {
        var player = (turn == _C.WHITE) ? _P.white : _P.black;
        var doNotKill = doNotKillPlayer || false;
        if ((doNotKill && q != _P.black.pos && q != _P.white.pos) || !doNotKill) {
            t.selected = bool;
            removeForbidden(q);
        }
        var neigh = getNeighbours(t, q);
        setNeighboursTo(bool, neigh, doNotKill);
        if (player.energy) { // greater magic distance
            player.energy = false;
            for (var x=0, y=neigh.length; x<y; x++) {
                var n = triangles[neigh[x]];
                reverseCell(n, neigh[x], bool, doNotKill);
            }
        }
        canvasBoardHasChanged = true;
        reversePath = [];
    }
    
    function createReverseCellsPath(t, q, bool) {
        var player = (turn == _C.WHITE) ? _P.white : _P.black;
        reversePath = [t];
        var neigh = getNeighbours(t, q);
        for (var q=0, l=neigh.length; q<l; q++) {
            var n = triangles[neigh[q]];
            if (n.selected == bool) reversePath.push(n);
            if (player.energy) { // greater magic distance
                var children = getNeighbours(n, neigh[q]);
                for (var x=0, y=children.length; x<y; x++) {
                    var z = triangles[children[x]];
                    if (z.selected == bool) reversePath.push(z);
                }
            }
        }
    }
    
    function startMove(player, path) {
        renderPath = [];
        for (var q=0, l=path.length-1; q<l; q++) {
            renderPath.push(triangles.slice(path[q], path[q]+1)[0]);
            var a = new Point(triangles[path[q]].center.x, triangles[path[q]].center.y);
            var b = new Point(triangles[path[q+1]].center.x, triangles[path[q+1]].center.y);
            var dx = (b.x - a.x) / _C.ANIM_STEPS;
            var dy = (b.y - a.y) / _C.ANIM_STEPS;
            for (var k=0; k<_C.ANIM_STEPS; k++) {
                a.x += dx;
                a.y += dy;
                animatingPath.push(new Point(a.x, a.y));
            }
        }
        renderPath.push(triangles.slice(path[q])[0]);  // last cell was not added to renderPath
        animatingMove = true;
    }
    
    function clearMessages() {
        MSG1 = MSG2 = MSG3 = "";
    }
    
    /*--------------------------POWER FUNCTIONS----------------------*/
    
    function powerBlock(q) {
        if (isNotForbidden(q)) {
            forbidden.push(q);
            hoverForbidden = -1;
            return true;
        } else return false;
    }
    
    function powerHoverBlock(q, last) {
        hoverForbidden = -1;
        if (isNotForbidden(q) && isNotPlayer(q)) {
            hoverForbidden = q;
        }
    }
    
    function powerRay(q) {
        var start       = (turn == _C.WHITE) ? _P.white.pos : _P.black.pos;
        var convertTo   = (turn == _C.WHITE) ? false : true;
        if (isCellAdjacentToPlayer(q)) {
            var way = _RAY[q-start + (triangles[start].left?"L":"R")];
            var rayWay = getPowerRayWay(start, way);
            for (var j=0, l=rayWay.length; j<l; j++) {
                triangles[rayWay[j]].selected = convertTo;
            }
            canvasBoardHasChanged = true;
            reversePath = [];
            return true;
        } else return false;
    }
    
    function powerHoverRay(q, last) {
        var start       = (turn == _C.WHITE) ? _P.white.pos : _P.black.pos;
        var convertTo   = (turn == _C.WHITE) ? false : true;
        if (isCellAdjacentToPlayer(q)) {
            var way = _RAY[q-start + (triangles[start].left?"L":"R")];
            reversePath = getPowerRayWay(start, way);
        }
    }
    
    function getPowerRayWay(start, way) {
        var k = 0;
        var cell = start + way[k];
        var isBorder = triangles[cell].isBorder;
        var posRow = triangles[cell].posRow;
        var rayWay = [];
        while (triangles[cell]) {
            if (way.length == 1 && triangles[cell].posRow != posRow) break;
            rayWay.push(cell);
            if (triangles[cell].isBorder) break;
            k++;
            if (!way[k]) k = 0;
            cell += way[k];
        }
        return rayWay;
    }
    
    function powerReverse() {
        for (var q=0, l=triangles.length; q<l; q++) {
            if (q != _P.black.pos && q!= _P.white.pos) {
                triangles[q].selected = !triangles[q].selected;
            }
        }
        canvasBoardHasChanged = true;
        return true;
    }
    
    function powerBomb(t, q) {
        if (turn == _C.WHITE && (t.selected || !isNotForbidden(q))) {            
            reverseCell(t, q, false, true);
            return true;
        } else if (turn == _C.BLACK && (!t.selected || !isNotForbidden(q))) {                
            reverseCell(t, q, true, true);
            return true;
        }
        canvasBoardHasChanged();
        return false;
    }
    
    function powerHoverBomb(t, q) {
        if (turn == _C.WHITE && (t.selected || !isNotForbidden(q)) && q != lastHoverCell) {
            createReverseCellsPath(t, q, true);
            lastHoverCell = q;
        } else if (turn == _C.BLACK && (!t.selected || !isNotForbidden(q)) && q != lastHoverCell) {
            clearPath = [];
            createReverseCellsPath(t, q, false);
            lastHoverCell = q;
        } else {
            if (turn == _C.WHITE && q != lastHoverCell) {
                lastHoverCell = q;
            } else if (turn == _C.BLACK && q != lastHoverCell) {
                lastHoverCell = q;
            }
        }
    }
    
    function powerInverse() {
        if (turn == _C.WHITE) {            
            _P.white.actions = [_A.MOVE, _A.REVERSE, _A.POWER];
            _P.white.pow.unshift(TYPES.INVERSE);
        } else {
            _P.black.actions = [_A.MOVE, _A.REVERSE, _A.POWER];
            _P.black.pow.unshift(TYPES.INVERSE);
        }
        return true;
    }
    
    function powerDouble() {
        if (turn == _C.WHITE) {            
            _P.white.actions = [_A.REVERSE, _A.MOVE, _A.REVERSE, _A.POWER];
            _P.white.pow.unshift(TYPES.DOUBLE);
        } else {
            _P.black.actions = [_A.REVERSE, _A.MOVE, _A.REVERSE, _A.POWER];
            _P.black.pow.unshift(TYPES.DOUBLE);
        }
        return true;
    }
    
    function powerRadius() {
        if (turn == _C.WHITE) {            
            _P.white.energy = true;
            _P.white.pow.unshift(TYPES.RADIUS);
        } else {
            _P.black.energy = true;
            _P.black.pow.unshift(TYPES.RADIUS);
        }
        return true;
    }
    
    function range(a, b) {
        return ((M.random() * (b + 1 - a)) | 0) + a;
    }
    
    /*--------------------------END POWER FUNCTIONS----------------------*/    

    function onHoverCanvas(e) {
        updateStarsPosition(getCursorPosition(e));
        
        for (var q=0, l=triangles.length; q<l; q++) {
            var t = triangles[q];
            if (t.isIntoTriangle(getCursorPosition(e))) {
                var state = (turn == _C.WHITE) ? _P.white.actions[currentAction] : _P.black.actions[currentAction];
                switch (state) {
                    // movement
                    case _A.MOVE:
                        MSG1 = (turn == _C.WHITE) ? _T.white_mage : _T.black_mage;
                        MSG1 += _T.moves;
                        if (turn == _C.WHITE && !t.selected && isNotForbidden(q) &&!animatingMove && q != lastHoverCell) {
                            var path = findPath(q, doFrontier(_P.white.pos));
                            if (path.length > 1) {
                                updateMovePath(path);
                            }
                            lastHoverCell = q;
                        } else if (turn == _C.BLACK && t.selected && isNotForbidden(q) &&!animatingMove && q != lastHoverCell) {
                            var path = findPath(q, doFrontier(_P.black.pos));
                            if (path.length > 1) {
                                updateMovePath(path);
                            }
                            lastHoverCell = q;
                        }
                        break;

                    // reverse a cell
                    case _A.REVERSE:
                        MSG1 = (turn == _C.WHITE) ? _T.white_mage : _T.black_mage;
                        MSG1 += _T.magic;
                        if (turn == _C.WHITE && (t.selected || !isNotForbidden(q))
                            && isCellAdjacentToPlayer(q) && q != lastHoverCell) {
                            createReverseCellsPath(t, q, true);
                            lastHoverCell = q;
                        } else if (turn == _C.BLACK && (!t.selected || !isNotForbidden(q)) 
                                   && isCellAdjacentToPlayer(q) && q != lastHoverCell) {
                            createReverseCellsPath(t, q, false);
                            lastHoverCell = q;
                        } else if (q != lastHoverCell) {
                            lastHoverCell = q;
                            reversePath = [];
                        }
                        break;
                        
                    case _A.POWER:
                        if (q != lastHoverCell) {
                            var pow, f, args, types = TYPES;
                            pow = (turn == _C.WHITE) ? 
                                _P.white.pow[0] : 
                                _P.black.pow[0] || "";
                            switch (pow) {
                                case types.BLOCK:
                                    MSG1 = _T.immediate;
                                    MSG2 = _T.block;
                                    f = powerHoverBlock;
                                    args = [q, lastHoverCell];
                                    break;

                                case types.RAY:
                                    MSG1 = _T.immediate;
                                    MSG2 = _T.ray;
                                    f = powerHoverRay;
                                    args = [q];
                                    break;
                                    
                                case types.BOMB:
                                    MSG1 = _T.immediate;
                                    MSG2 = _T.bomb;
                                    f = powerHoverBomb;
                                    args = [t, q];
                                    break;
                                    
                                case types.REVERSE:
                                    MSG1 = _T.immediate;
                                    MSG2 = _T.reverse;
                                    MSG3 = _T.click;
                                    f = function() {};
                                    args = [];
                                    break;
                                    
                                case types.INVERSE:
                                    MSG1 = _T.nextTurn;
                                    MSG2 = _T.inverse;
                                    MSG3 = _T.click;
                                    f = function() {};
                                    args = [];
                                    break;

                                case types.DOUBLE:
                                    MSG1 = _T.nextTurn;
                                    MSG2 = _T.double;
                                    MSG3 = _T.click;
                                    f = function() {};
                                    args = [];
                                    break;

                                case types.RADIUS:
                                    MSG1 = _T.nextTurn;
                                    MSG2 = _T.radius;
                                    MSG3 = _T.click;
                                    f = function() {};
                                    args = [];
                                    break;
                            } 
                            f.apply(this, args);
                            
                            lastHoverCell = q;
                        }
                        break;
                }
                break;
            }
        }
    }
    
    function onClickCanvas(e) {
        for (var q=0, l=triangles.length; q<l; q++) {
            var t = triangles[q];
            if (t.isIntoTriangle(getCursorPosition(e))) {
                var state = (turn == _C.WHITE) ? _P.white.actions[currentAction] : _P.black.actions[currentAction];
                switch (state) {
                    // movement
                    case _A.MOVE:
                        clearMessages();
                        if (turn == _C.WHITE && !t.selected) {
                            var path = findPath(q, doFrontier(_P.white.pos));
                            if (path.length > 1) {
                                startMove(_C.WHITE, path);
                                _P.white.pos = q;
                            }
                        } else if (turn == _C.BLACK && t.selected) {
                            var path = findPath(q, doFrontier(_P.black.pos));
                            if (path.length > 1) {
                                startMove(_C.BLACK, path);
                                _P.black.pos = q;
                            }
                        }
                        renderPath = [];
                        break;

                    // reverse a cell
                    case _A.REVERSE:
                        clearMessages();
                        if (turn == _C.WHITE && (t.selected || !isNotForbidden(q)) 
                            && isCellAdjacentToPlayer(q)) {            
                            reverseCell(t, q, false);
                            play("magic");
                            advanceActionFor(_C.WHITE);
                        } else if (turn == _C.BLACK && (!t.selected || !isNotForbidden(q)) 
                            && isCellAdjacentToPlayer(q)) {                
                            reverseCell(t, q, true);
                            play("magic");
                            advanceActionFor(_C.BLACK);
                        }
                        break;
                        
                    case _A.POWER:
                        clearMessages();
                        var pow, f, args, types = TYPES;
                        pow = (turn == _C.WHITE) ? _P.white.pow.shift() : pow = _P.black.pow.shift() || "";
                        switch (pow) {
                            case types.BLOCK:
                                f = powerBlock;
                                args = [q];
                                break;
                                
                            case types.RAY:
                                f = powerRay;
                                args = [q];
                                break;
                                
                            case types.REVERSE:
                                f = powerReverse;
                                args = [];
                                break;
                                
                            case types.BOMB:
                                f = powerBomb;
                                args = [t, q];
                                break;
                                
                            case types.INVERSE:
                                f = powerInverse;
                                args = [];
                                break;
                                
                            case types.DOUBLE:
                                f = powerDouble;
                                args = [];
                                break;
                                
                            case types.RADIUS:
                                f = powerRadius;
                                args = [];
                                break;
                        }     
                        var success = f.apply(this, args);
                        
                        if (success) {
                            magicParticles = [];
                            play("power");
                            if (turn == _C.WHITE) {
                                _P.white.actions.pop();
                                advanceActionFor(_C.WHITE);
                            } else {
                                _P.black.actions.pop();
                                advanceActionFor(_C.BLACK);
                            }
                        }
                        break;
                }
                break;
            }
        }
    }
})();