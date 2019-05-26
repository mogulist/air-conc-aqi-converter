import {assert} from 'chai';
import {getConcFromAqi} from '../index';
import {aqiSpecs} from '../aqiSpecs';

const aqiName = 'us';

describe(`${aqiName}: PM2.5 농도 -> US AQI 테스트`, () => {
    it('농도 12 는 AQI 50이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 12), 50)
    })
    it('농도 35.4 는 AQI 100이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 35.4), 100)
    })
    it('농도 55.4 는 AQI 150이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 55.4), 150)
    })
    it('농도 150.4 는 AQI 200이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 150.4), 200)
    })
    it('농도 250.4 는 AQI 300이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 250.4), 300)
    })
    it('농도 350.4 는 AQI 400이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 350.4), 400)
    })
    it('농도 500 는 AQI 500이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 500), 500)
    })
    it('농도 1000 는 AQI 832이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 1000), 832)
    })
    it('농도 1260 는 AQI 1005이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', 1260), 1005)
    })
})

describe(`${aqiName}: PM10 농도 -> US AQI 테스트`, () => {
    it('농도 54 는 AQI 50이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 54), 50)
    })
    it('농도 154 는 AQI 100이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 154), 100)
    })
    it('농도 254 는 AQI 150이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 254), 150)
    })
    it('농도 354 는 AQI 200이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 354), 200)
    })
    it('농도 424 는 AQI 300이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 424), 300)
    })
    it('농도 504 는 AQI 400이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 504), 400)
    })
    it('농도 604 는 AQI 500이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 604), 500)
    })
    it('농도 999 는 AQI 895 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 999), 895)
    })
    it('농도 1500 는 AQI 1396이다.', () => {
        assert.equal(getConcFromAqi(aqiName, 'pm10', 1500), 1396)
    })
})

describe(`${aqiName}: NO2 농도 -> US AQI 테스트`, () => {
    const pollutant = 'no2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    
    it(`농도 0.085 는 AQI 84 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.085), 84)
    })
    it(`농도 0.234 는 AQI 126 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.234), 126)
    })
    it(`농도 1.739 는 AQI 423 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 1.739), 423)
    })
    it(`농도 2.049 는 AQI 500 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 2.049), 500)
    })
    it('농도 3 은 AQI 739 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 3), 739)
    })
    it('농도 4.123 은 AQI 1020 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 4.123), 1020)
    })
})

describe(`${aqiName}: O3 농도 -> US AQI 테스트`, () => {
    let i=0;
    const {indexBp} = aqiSpecs[aqiName];
    const pollutant = 'o3'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    
    it(`농도 0.083 는 AQI 500 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.083), 67)
    })
    it(`농도 0.193 는 AQI 186 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.193), 186)
    })
    it(`농도 0.604 는 AQI 500 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.604), 500)
    })
    it('농도 0.999 은 AQI 899 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 0.999), 899)
    })
    it('농도 1.5 은 AQI 1405 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 1.5), 1405)
    })
})

describe(`${aqiName}: SO2 농도 -> US AQI 테스트`, () => {
    const pollutant = 'so2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    
    it(`농도 1.004 는 AQI 500 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 1.004), 500)
    })
    it('농도 1.5 은 AQI 749 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 1.5), 749)
    })
    it('농도 1.999 은 AQI 1000 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 1.999), 1000)
    })
})

describe(`${aqiName}: CO 농도 -> US AQI 테스트`, () => {
    const pollutant = 'co'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    
    it(`농도 50.4 는 AQI 500 이다.`, () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 50.4), 500)
    })
    it('농도 80 은 AQI 799 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 80), 799)
    })
    it('농도 90.9 은 AQI 1000 이다.', () => {
        assert.equal(getConcFromAqi(aqiName, pollutant, 99.9), 1000)
    })
})

describe(`${aqiName}: 질못된 파라미터 검증하기`, () => {
    it(`첫번째 파라미터 aqiName 'mise'를 주면 -1 을 리터한다.`, () => {
        assert.equal(getConcFromAqi('mise', 'pm25', 100), -1)
    })
    it(`두번째 파라미터 오염원 이름으로 'pm'을 주면 -1 을 리터한다.`, () => {
        assert.equal(getConcFromAqi(aqiName, 'pm', 100), -1)
    })
    it(`세번째 파라미터가 -1 이면 -1 을 리터한다.`, () => {
        assert.equal(getConcFromAqi(aqiName, 'pm25', -1), -1)
    })
})