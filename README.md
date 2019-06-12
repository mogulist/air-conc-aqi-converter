# air-conc-aqi-converter
A converter for air pollutants' concentration value and AQIs.

Although official AQI's max value is 500, this module supports over the limit AQI value. For emxample, PM2.5's 500 µg/m³ corresponds to US AQI 500. If 1000 µg/m³ is given, AQI value 832 is returned. 

## Installation
```
$ npm i git+https://github.com/HerbertLim/air-conc-aqi-converter -S
```
```
import {getAqiFromConc, getIaqiFromConcs, } from 'air-conc-aqi-converter';
```

## APIs
### getAqiFromConc (aqiName, pollutant, conc)

Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- pollutant: 'pm25', 'pm10', 'no2', 'o3', 'so2', 'co'
- conc: concentration value, 
  - For PM2.5 and PM10, concentration value's unit is µg/m³.
  - For NO2, O3, SO2, and CO, concentration value's unit is ppm, not ppb or µg/m³.

Returns

AQI values for specified AQI type


### getIaqiFromConcs (aqiName, concs)

Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- concs: is an object containing following fields:

```
{pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value}
```

Returns

Highest AQI value among six pollutants. Or AQI value of dominent pollutant. IAQI stands for Integrated AQI.

### getLevelFromConc (aqiName, pollutant, conc)

Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- pollutant: 'pm25', 'pm10', 'no2', 'o3', 'so2', 'co'
- conc: concentration value, 
  - For PM2.5 and PM10, concentration value's unit is µg/m³.
  - For NO2, O3, SO2, and CO, concentration value's unit is ppm, not ppb or µg/m³.

Returns

Level of given AQI. In case of Misebig AQI and US AQI, which consists of 6 levels, returns integer from 0 to 6. 6 means given concentration value is over the official AQI limit. In case of KR AQI, which consists of 4 levels, returns integer from 0 to 4. 4 means the same. 

-1 if any error.


### getLevelByAqi (aqiName, aqiValue) 

Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- aqiValue: AQI value

Returns

Level of given AQI. In case of Misebig AQI and US AQI, which consists of 6 levels, returns integer from 0 to 6. 6 means given concentration value is over the official AQI limit. In case of KR AQI, which consists of 4 levels, returns integer from 0 to 4. 4 means the same. 

-1 if any error.


### getPosInLevel (aqiName, aqiValue)

Find position of AQI.

Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- aqiValue: AQI value

Returns

Returns exact position floating point number within AQI level. 

For example, if AQI value is 75, AQI level is 1, and its position is 1.5. If AQI value is 125, AQI level is 2 and its position is 2.5.

-1 if any error.


---

# What is Misebig AQI?
It is a 6-levels AQI similar to US AQI but much tighter. Based on WHO guidelines, US AQI, and Korean AQI, each level is set with tightest one among those three guideline/AQIs. Misebig AQI is invented for Misebig App.

