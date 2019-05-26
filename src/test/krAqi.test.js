import {assert} from 'chai';
import {concToAqi} from '../index';
import {aqiSpecs} from '../aqiSpecs';

const aqiName = 'kr';

describe('PM2.5 농도 -> KR AQI 테스트', () => {
    const pollutant = 'pm25'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })


    it('농도 100 는 AQI 266 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 100), 266)
    })
    it('농도 300 는 AQI 383 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 300), 383)
    })
    it('농도 400 는 AQI 441 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 400), 441)
    })
    it('농도 499 는 AQI 499 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 499), 499)
    })
    it('농도 501 는 AQI 501 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 501), 501)
    })
    it('농도 1260 는 AQI 946 이다.', () => {
        assert.equal(concToAqi(aqiName, 'pm25', 1260), 946)
    })
})

describe('PM10 농도 -> KR AQI 테스트', () => {
    const pollutant = 'pm10'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    it('농도 55 는 AQI 75 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 55), 75)
    })
    it('농도 250 는 AQI 306 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 250), 306)
    })
    it('농도 450 는 AQI 417 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 450), 417)
    })
    it('농도 599 는 AQI 499 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 599), 499)
    })
    it('농도 601 는 AQI 501 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 601), 501)
    })
    it('농도 504 는 AQI 447 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 504), 447)
    })

    it('농도 999 는 AQI 721 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 999), 721)
    })
    it('농도 1500 는 AQI 999 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 1500), 999)
    })
})

describe('NO2 농도 -> KR AQI 테스트', () => {
    const pollutant = 'no2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 1.99 는 AQI 499 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 1.99), 499)
    })
    it(`농도 2.01 는 AQI 501 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 2.01), 501)
    })
    it('농도 3 은 AQI 638 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 3), 638)
    })
    it('농도 4.123 은 AQI 794 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 4.123), 794)
    })
})


describe('O3 농도 -> KR AQI 테스트', () => {
    const pollutant = 'o3'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 0.59 는 AQI 494 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 0.59), 494)
    })
    it(`농도 0.61 는 AQI 506 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 0.61), 506)
    })
    it('농도 0.999 은 AQI 721 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 0.999), 721)
    })
    it('농도 1.5 은 AQI 999 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 1.5), 999)
    })
})

describe('SO2 농도 -> KR AQI 테스트', () => {
    const pollutant = 'so2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 0.99 는 AQI 497 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 0.99), 497)
    })
    it(`농도 1.01 는 AQI 503 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 1.01), 503)
    })
    it('농도 1.5 은 AQI 647 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 1.5), 647)
    })
    it('농도 1.999 은 AQI 793 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 1.999), 793)
    })
})

describe('CO 농도 -> KR AQI 테스트', () => {
    const pollutant = 'co'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 49.9 는 AQI 499 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 49.9), 499)
    })
    it(`농도 50.1 는 AQI 501 이다.`, () => {
        assert.equal(concToAqi(aqiName, pollutant, 50.1), 501)
    })
    it('농도 80 은 AQI 714 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 80), 714)
    })
    it('농도 90.9 은 AQI 856 이다.', () => {
        assert.equal(concToAqi(aqiName, pollutant, 99.9), 856)
    })
})

describe('질못된 파라미터 검증하기', () => {
    it(`첫번째 파라미터 aqiName 'mise'를 주면 -1 을 리터한다.`, () => {
        assert.equal(concToAqi('mise', 'pm25', 100), -1)
    })
    it(`두번째 파라미터 오염원 이름으로 'pm'을 주면 -1 을 리터한다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm', 100), -1)
    })
    it(`세번째 파라미터가 -1 이면 -1 을 리터한다.`, () => {
        assert.equal(concToAqi(aqiName, 'pm25', -1), -1)
    })
})
