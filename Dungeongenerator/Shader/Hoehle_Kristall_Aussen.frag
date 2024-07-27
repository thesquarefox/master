uniform vec4 mHalfColor; // Haelfte des Farbwertes
varying vec3 normal,lightDir;

void main (void)
{
	float NdotL = dot(normalize(normal),normalize(lightDir));
	gl_FragColor = (1.0+NdotL)*mHalfColor; // Interpolation uber Winkel von 180 Grad statt nur 90 Grad
}
