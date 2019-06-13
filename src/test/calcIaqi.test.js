import {assert} from 'chai';
import {getAqiFromConc, getIaqiFromConcs} from '../index';
import {aqiSpecs} from '../aqiSpecs';



describe(`대표 AQI 계산 A`, () => {
    const aqiValues = {
        pm25Value: 29,
        pm10Value: 38,
        no2Value: 0.51,
        o3Value: 0.042,
        so2Value: 0.032,
        coValue: 0.8,
    }
    //// console.log(aqiValues)
    it(`misebig AQI의 IAQI는 185 이다.`, () => {
        assert.equal(getIaqiFromConcs('misebig', aqiValues), 185)
    })
    it(`US AQI의 IAQI는 176 이다.`, () => {
        assert.equal(getIaqiFromConcs('us', aqiValues), 176)
    })
    it(`KR AQI의 IAQI는 211 이다.`, () => {
        assert.equal(getIaqiFromConcs('kr', aqiValues), 211)
    })
})




describe(`대표 AQI 계산 B`, () => {
    const aqiValues = {
        pm25Value: 150,
        pm10Value: 38,
        no2Value: 0.51,
        o3Value: 0.092,
        so2Value: 0.032,
        coValue: 0.8,
    }
    //// console.log(aqiValues)
    it(`misebig AQI의 IAQI는 200 이다.`, () => {
        const aqiName = 'misebig'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('misebig', aqiValues), 200)
    })
    it(`US AQI의 IAQI는 200 이다.`, () => {
        const aqiName = 'us'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('us', aqiValues), 200)
    })
    it(`KR AQI의 IAQI는 213 이다.`, () => {
        const aqiName = 'kr'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('kr', aqiValues), 213)
    })
})

describe(`대표 AQI 계산 C: PM10 농도가 181`, () => {
    const aqiValues = {
        pm25Value: 45,
        pm10Value: 181,
        no2Value: 0.51,
        o3Value: 0.092,
        so2Value: 0.032,
        coValue: 0.8,
    }
    
    it(`misebig AQI의 IAQI는 185 이다.`, () => {
        // console.log(aqiValues)

        const aqiName = 'misebig'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('misebig', aqiValues), 185)
    })
    it(`US AQI의 IAQI는 176 이다.`, () => {
        const aqiName = 'us'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('us', aqiValues), 176)
    })
    it(`KR AQI의 IAQI는 211 이다.`, () => {
        const aqiName = 'kr'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('kr', aqiValues), 211)
    })
})

describe(`대표 AQI 계산 D: 오존이 매우 나쁨`, () => {
    const aqiValues = {
        pm25Value: 33,
        pm10Value: 38,
        no2Value: 0.04,
        o3Value: 0.151,
        so2Value: 0.032,
        coValue: 0.8,
    }
    it(`misebig AQI의 IAQI는 151 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = 'misebig'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('misebig', aqiValues), 151)
    })
    it(`US AQI의 IAQI는 134 이다.`, () => {
        const aqiName = 'us'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('us', aqiValues), 134)
    })
    it(`KR AQI의 IAQI는 151 이다.`, () => {
        const aqiName = 'kr'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('kr', aqiValues), 151)
    })
})

describe(`대표 AQI 계산 E: 잘못된 값이 있을 때에도 계산한다`, () => {
    const aqiValues = {
        pm25Value: 33,
        pm10Value: -1,
        no2Value: 0.04,
        o3Value: 0.151,
        so2Value: 0.032,
        coValue: null,
    }
    it(`misebig AQI의 IAQI는 151 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = 'misebig'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('misebig', aqiValues), 151)
    })
    it(`US AQI의 IAQI는 134 이다.`, () => {
        const aqiName = 'us'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('us', aqiValues), 134)
    })
    it(`KR AQI의 IAQI는 151 이다.`, () => {
        const aqiName = 'kr'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('kr', aqiValues), 151)
    })
})

describe(`대표 AQI 계산 F: 낮은 농도일 때`, () => {
    const aqiValues = {
        pm25Value: 16,
        pm10Value: 33,
        no2Value: 0.01,
        o3Value: 0.04,
        so2Value: 0.012,
        coValue: 0.5,
    }
    it(`misebig AQI의 IAQI는 65 이다.`, () => {
        // console.log(aqiValues)
        const aqiName = 'misebig'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('misebig', aqiValues), 65)
    })
    it(`US AQI의 IAQI는 59 이다.`, () => {
        const aqiName = 'us'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('us', aqiValues), 59)
    })
    it(`KR AQI의 IAQI는 58 이다.`, () => {
        const aqiName = 'kr'
        const aqis = [];
        aqis.push(getAqiFromConc(aqiName,'pm25',aqiValues.pm25Value))
        aqis.push(getAqiFromConc(aqiName,'pm10',aqiValues.pm10Value))
        aqis.push(getAqiFromConc(aqiName,'no2',aqiValues.no2Value))
        aqis.push(getAqiFromConc(aqiName,'o3',aqiValues.o3Value))
        aqis.push(getAqiFromConc(aqiName,'so2',aqiValues.so2Value))
        aqis.push(getAqiFromConc(aqiName,'co',aqiValues.coValue))
        // console.log(aqis)

        assert.equal(getIaqiFromConcs('kr', aqiValues), 58)
    })
})