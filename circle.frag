#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 st, vec2 c) {
    return smoothstep(0.0, 0.1, pow(c.x - st.x, 2.0) + pow(c.y - st.y, 2.0) - 0.04);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(1.0);
    vec2 c = vec2(0.5);
    float n = circle(st, c);
    
    float left = step(0., n);
    vec3 f = vec3(0.2, 0.3, 0.4);
    // color.rgb = mix( f * sin(u_time), color * n , 0.0);
    // color.t = 0.0;
    // color =  vec3(0.1,  0.5, 0.1) + color;
    
    color = color * n + f * (1.0 - n) * sin(u_time);

    gl_FragColor = vec4(color,1.0);
}
