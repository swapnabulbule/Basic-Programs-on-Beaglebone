from	Adafruit_I2C	import	Adafruit_I2C
import	time
ADXL345_I2C_ID = 0x53 #I2C	bus	id
ADXL345_REG_POWER_CTL =	0x2D # Power-saving	control
ADXL345_REG_DATAX0 = 0x32 #	X-axis	data	0
accel = Adafruit_I2C(ADXL345_I2C_ID,debug=False)
accel.write8(ADXL345_REG_POWER_CTL,	0x08)
while True:
			raw	=	accel.readList(ADXL345_REG_DATAX0, 6)
			result	=	[]
			for i in range(0, 6, 2):
							g =	raw[i] | (raw[i+1] << 8)
							if g > 32767: g-= 65536
							result.append(g)
			print "result = " + str(result)
			time.sleep(2)
