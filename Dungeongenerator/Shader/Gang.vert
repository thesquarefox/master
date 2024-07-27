uniform vec3 mLightPos;
varying vec3 normal,lightDir;

void main(void)
{
	// Position transformieren
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

	// Normale uebergeben und Lichtrichtung setzen
	normal = gl_Normal;
	lightDir = mLightPos - gl_Vertex.xyz;
	// lightDir nur im Fragment-Shader normalisieren, sonst Interpolation nicht exakt

	// Texturkoordinaten uebergeben
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
