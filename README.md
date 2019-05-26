# air-conc-aqi-converter
A converter for air pollutants' concentration value and AQIs.

Although official AQI's max value is 500, this module supports over the limit AQI value. For emxample, PM2.5's 500 µg/m³ corresponds to US AQI 500. If 1000 µg/m³ is given, AQI value 832 is returned. 

## getConcFromAqi (aqiName, pollutant, conc)
----
### Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- pollutant: 'pm25', 'pm10', 'no2', 'o3', 'so2', 'co'
- conc: concentration value, 
  - For PM2.5 and PM10, concentration value's unit is µg/m³.
  - For NO2, O3, SO2, and CO, concentration value's unit is ppm, not ppb or µg/m³.

### Returns
AQI values for specified AQI type


## getIaqiFromConcs (aqiName, concs)
---
### Parameters
- aqiName: name of AQI type. Currently supports only three AQI types: 'misebig', 'us', 'kr'
- concs: is an object containing following fields:

```
{pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value}
```

### Returns
Highest AQI value among six pollutants. Or AQI value of dominent pollutant. IAQI stands for Integrated AQI.

## getLevelFromConc (aqiName, pollutant, conc)
---
### Parameters

### Returns
Level of given AQI. In case of Misebig AQI and US AQI, which consists of 6 levels, returns 0~6. 6 means given concentration value is over the official AQI limit. In case of KR AQI, which consists of 4 levels, returns 0~4. 4 means the same. 

-1 if any error.

# What is Misebig AQI?
It is a 6 levels AQI used for Misebig App. It is based on WHO guidelines, US AQI, and Korean AQI. It adopted strongest levels from those guidelines and AQIs.

