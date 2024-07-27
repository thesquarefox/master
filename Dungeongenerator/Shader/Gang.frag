uniform sampler2D mTexture;
varying vec3 normal,lightDir;

void main (void)
{
	float NdotL = dot(normalize(normal),normalize(lightDir));
	NdotL = abs(NdotL);	// von beiden Seiten beleuchtbar
	gl_FragColor = NdotL * texture2D(mTexture, vec2(gl_TexCoord[0]));
}
